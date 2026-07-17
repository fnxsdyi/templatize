import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviewCount: number;
  showCount?: boolean;
  size?: "sm" | "md";
}

export function StarRating({
  rating,
  reviewCount,
  showCount = true,
  size = "sm",
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              size === "sm" ? "size-3.5" : "size-4",
              star <= Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
      {showCount && (
        <span className="text-xs text-gray-500">
          {rating.toFixed(1)} ({reviewCount})
        </span>
      )}
    </div>
  );
}
