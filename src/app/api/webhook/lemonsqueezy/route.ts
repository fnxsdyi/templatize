import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Lemon Squeezy webhook secret from environment
function getWebhookSecret(): string {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error("LEMONSQUEEZY_WEBHOOK_SECRET is not set");
  }
  return secret;
}

/**
 * Verify the Lemon Squeezy webhook signature using timing-safe comparison.
 *
 * Lemon Squeezy sends the HMAC-SHA256 signature as a hex-encoded string
 * in the `x-signature` header. We compute the expected HMAC of the raw
 * request body and compare it against the provided signature.
 */
function verifySignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  try {
    const hmac = crypto.createHmac("sha256", secret);
    const expectedDigest = hmac.update(payload).digest("hex");

    // Safeguard: both buffers must be the same length for timingSafeEqual
    const sigBuf = Buffer.from(signature, "utf8");
    const expectedBuf = Buffer.from(expectedDigest, "utf8");

    if (sigBuf.length !== expectedBuf.length) {
      return false;
    }

    return crypto.timingSafeEqual(sigBuf, expectedBuf);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-signature") || "";

    // Verify webhook signature before processing
    const secret = getWebhookSecret();
    if (!verifySignature(rawBody, signature, secret)) {
      console.warn("⚠️ Webhook signature verification failed — possible tampering");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const body = JSON.parse(rawBody);
    const eventName = body.meta?.event_name;

    // Handle specific events
    switch (eventName) {
      case "order_created": {
        const order = body.data?.attributes;
        const orderId = body.data?.id;

        console.log("📦 New order:", {
          id: orderId,
          productName: order?.first_order_item?.product_name,
          variantName: order?.first_order_item?.variant_name,
          email: order?.user_email,
          total: order?.total,
          status: order?.status,
        });
        // TODO: Save order to database with idempotency check using orderId
        // TODO: Send download link email (Lemon Squeezy does this automatically)
        break;
      }

      case "subscription_created": {
        const subscription = body.data?.attributes;
        console.log("🔔 New subscription:", {
          id: body.data?.id,
          email: subscription?.user_email,
          productName: subscription?.product_name,
          status: subscription?.status,
        });
        break;
      }

      case "order_refunded": {
        const refund = body.data?.attributes;
        console.log("🔄 Order refunded:", {
          id: body.data?.id,
          email: refund?.user_email,
          total: refund?.total,
          status: refund?.status,
        });
        // TODO: Revoke access / remove download link
        break;
      }

      case "subscription_cancelled": {
        const cancelled = body.data?.attributes;
        console.log("❌ Subscription cancelled:", {
          id: body.data?.id,
          email: cancelled?.user_email,
          productName: cancelled?.product_name,
        });
        // TODO: Revoke access
        break;
      }

      case "subscription_updated": {
        const updated = body.data?.attributes;
        console.log("🔄 Subscription updated:", {
          id: body.data?.id,
          status: updated?.status,
        });
        break;
      }

      default:
        console.log(`ℹ️ Unhandled event: ${eventName}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
