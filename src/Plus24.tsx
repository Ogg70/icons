import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPlus24({
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
        d="M14.25 7.25h-5.5v-5.5C8.75 1.34 8.41 1 8 1s-.75.34-.75.75v5.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5v5.5c0 .41.34.75.75.75s.75-.34.75-.75v-5.5h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
      />
    </svg>
  );
}
export default SvgPlus24;
