import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Reviews longer than this get a Read more toggle. */
export const REVIEW_EXPAND_THRESHOLD = 400;

/** Collapsed preview — slightly shorter than full reviews to leave room for Read more. */
const REVIEW_PREVIEW_LENGTH = 285;

function previewAtWordBoundary(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");

  if (lastSpace > maxLength * 0.7) {
    return `${slice.slice(0, lastSpace).trim()}…`;
  }

  return `${slice.trim()}…`;
}

type ReviewCarouselTextProps = {
  text: string;
};

export function ReviewCarouselText({ text }: ReviewCarouselTextProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > REVIEW_EXPAND_THRESHOLD;
  const displayText = isLong && !expanded ? previewAtWordBoundary(text, REVIEW_PREVIEW_LENGTH) : text;

  return (
    <div className="flex flex-col min-h-0 h-full">
      <div
        className={cn(
          "min-h-0",
          expanded && isLong
            ? "flex-1 overflow-y-auto overscroll-contain pr-1"
            : "overflow-hidden"
        )}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{displayText}</p>
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 flex-shrink-0 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            className={cn("h-3.5 w-3.5 transition-transform duration-200", expanded && "rotate-180")}
            aria-hidden
          />
        </button>
      )}
    </div>
  );
}
