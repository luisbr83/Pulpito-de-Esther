import type { SVGProps } from "react";

export function AnointingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
        <path d="M12 4.5C12 4.5 15 2 18 2s3 2.5 3 2.5" />
        <path d="M12 4.5C12 4.5 9 2 6 2s-3 2.5-3 2.5" />
        <path d="M12 6V4.5" />
        <path d="m11.3 11.3 4.4-4.4" />
        <path d="m5.2 11.5 1.2-1.2" />
        <path d="M12 22a2.5 2.5 0 0 1-2.5-2.5V19a2.5 2.5 0 0 1 5 0v.5A2.5 2.5 0 0 1 12 22Z" />
        <path d="M12 19v-5" />
    </svg>
  );
}
