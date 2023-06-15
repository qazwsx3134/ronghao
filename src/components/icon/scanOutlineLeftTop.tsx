import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function ScanOutlineLT(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <path
        d="M31 111V31H111"
        stroke="#73E5FE"
        stroke-width="7"
        stroke-linecap="round"
      />
      <path
        d="M124 4H4V124"
        stroke="#73E5FE"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
}
