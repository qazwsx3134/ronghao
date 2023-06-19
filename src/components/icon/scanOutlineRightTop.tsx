import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function ScanOutlineRT(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      width="129"
      height="128"
      viewBox="0 0 129 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <path
        d="M17.9985 30.998L97.9985 30.998L97.9985 110.998"
        stroke="#10B981"
        stroke-width="7"
        stroke-linecap="round"
      />
      <path
        d="M124.999 123.998L124.999 3.99805L4.99853 3.99805"
        stroke="#6EE7B7"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
}
