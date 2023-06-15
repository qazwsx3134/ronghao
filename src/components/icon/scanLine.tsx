import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function Scanline(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="500"
      height="7"
      viewBox="0 0 500 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <line
        x1="3.5"
        y1="3.5"
        x2="596.5"
        y2="3.5"
        stroke="#73E5FE"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  );
}
