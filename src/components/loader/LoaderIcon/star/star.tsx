import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function StarIcon(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      {...props}
      key={key}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.2253 1.14545C35.2253 7.64545 34.991 17.6252 41.8683 24.5025C48.7455 31.3798 66.7253 31.1459 65.2253 33.1454C63.7253 35.145 48.7455 34.9111 41.8683 41.7883C34.991 48.6656 35.2253 63.645 33.2253 65.1454C31.2253 66.6459 31.4597 48.6656 24.5824 41.7883C17.7051 34.9111 -1.27466 35.6459 1.22534 33.1454C3.72534 30.645 17.7051 31.3798 24.5824 24.5025C31.4597 17.6252 31.2253 -5.35455 33.2253 1.14545Z"
        fill="black"
      />
      <path
        d="M1 33.5C1 33.5 13.9709 33.5373 21.5 36.5C26.5485 38.4866 32 45.5 33.5 45.5C35 45.5 39.5 39.5 46 36.5C52.5 33.5 65 33 65 33"
        stroke="white"
        stroke-opacity="0.93"
        stroke-width="0.3"
        stroke-linecap="round"
      />
    </svg>
  );
}
