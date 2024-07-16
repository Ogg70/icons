import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgMinus16({
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
        d="M14.25 7.25H1.75c-.41 0-.75.34-.75.75s.34.75.75.75h12.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
      />
    </svg>
  );
}
export default SvgMinus16;
