"use client";

import { cn } from "@/lib/utils";

interface PricingCardProps {
  price: number;
  originalPrice?: number;
  features: string[];
  whatsIncluded?: string[];
  cta: React.ReactNode;
  className?: string;
}

export function PricingCard({
  price,
  originalPrice,
  features,
  whatsIncluded,
  cta,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-white p-8 shadow-sm",
        className
      )}
    >
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-500">一次购买，终身使用</p>
      </div>
      {originalPrice && (
        <div className="mb-4 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
          限时优惠 -${originalPrice - price}
        </div>
      )}
      <ul className="mb-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <svg
              className="mt-0.5 size-4 shrink-0 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mb-6 rounded-lg bg-gray-50 p-4">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
          包含内容
        </p>
        <ul className="space-y-1.5">
          {(whatsIncluded || []).map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="size-1.5 rounded-full bg-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {cta}
    </div>
  );
}
