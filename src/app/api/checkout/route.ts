/**
 * ⚠️ Checkout API endpoint has been deprecated.
 *
 * We migrated from Lemon Squeezy to Gumroad.
 * Purchase buttons now link directly to Gumroad product pages,
 * so this server-side checkout URL generation is no longer needed.
 *
 * URLs:
 * - AI Startup Starter Pack: https://shoujiang.gumroad.com/l/smrreb
 * - Solopreneur Operating System: https://shoujiang.gumroad.com/l/flbkiw
 * - Client CRM Pro: https://shoujiang.gumroad.com/l/rbjnxp
 * - Content Creator Calendar: https://shoujiang.gumroad.com/l/ysajyd
 * - Personal Knowledge Hub: https://shoujiang.gumroad.com/l/zrerc
 */

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "Checkout API is deprecated. Use direct Gumroad links instead." },
    { status: 410 }
  );
}
