import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function CircularLine(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="401"
      height="401"
      viewBox="0 0 401 401"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <defs>
        <mask id="theMask" maskUnits="userSpaceOnUse">
          <path
            class="anime-line"
            d="M400.999 1H49.999C22.9371 1 0.999023 22.938 0.999023 50V401"
            stroke="white"
            stroke-width="6"
            stroke-linecap="round"
            stroke-dasharray="12,12"
          />
        </mask>
        <linearGradient
          id="theGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="300"
          x2="800"
          y2="300"
        >
          <stop offset="0" style="stop-color:#0075BE" />
          <stop offset="0.221" style="stop-color:#6200AA" />
          <stop offset="0.4218" style="stop-color:#2AA3FF" />
          <stop offset="0.6512" style="stop-color:#6200AA" />
          <stop offset="1" style="stop-color:#2AA3FF" />
        </linearGradient>
      </defs>
      <g mask="url(#theMask)">
        <rect x="0" y="0" width="800" height="600" fill="url(#theGradient)" />
      </g>
    </svg>
  );
}
