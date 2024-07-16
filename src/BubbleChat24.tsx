import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgBubbleChat24({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M8.05 12.82h-.1c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1h.1c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1M12.05 12.82h-.1c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1h.1c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1M16.05 12.82h-.1c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1h.1c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1"
      />
      <path
        fill="currentColor"
        d="m2 22 1.15-5.34A10.04 10.04 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10c-1.7 0-3.36-.43-4.83-1.25zm5.38-2.85.27.16A8.5 8.5 0 0 0 12 20.5c4.69 0 8.5-3.81 8.5-8.5S16.69 3.5 12 3.5 3.5 7.31 3.5 12c0 1.46.38 2.91 1.1 4.18l.14.25-.73 3.49 3.38-.77z"
      />
    </svg>
  );
}
export default SvgBubbleChat24;
