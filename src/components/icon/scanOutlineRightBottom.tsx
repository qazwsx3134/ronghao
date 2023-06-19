import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function ScanOutlineRB(
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
        d="M97 17V97H17"
        stroke="#10B981"
        stroke-width="7"
        stroke-linecap="round"
      />
      <path
        d="M4 124L124 124L124 4"
        stroke="#6EE7B7"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
}
