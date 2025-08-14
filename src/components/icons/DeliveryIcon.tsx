import type { SVGProps } from "react";

export function DeliveryIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20" />
      <path d="M2 8a13 13 0 0 1 13 13" />
      <path d="M18 20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
      <path d="M12 12v8" />
      <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}
