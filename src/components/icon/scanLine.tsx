import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function Scanline(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="900"
      height="65"
      viewBox="0 0 900 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <g filter="url(#filter0_df_117_18)">
        <line
          x1="3.5"
          y1="32.5"
          x2="996.5"
          y2="32.5"
          stroke="#73E5FE"
          stroke-opacity="0.8"
          stroke-width="7"
          stroke-linecap="round"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_df_117_18"
          x="-29"
          y="0"
          width="958"
          height="65"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="14.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.45098 0 0 0 0 0.898039 0 0 0 0 0.996078 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_117_18"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_117_18"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3"
            result="effect2_foregroundBlur_117_18"
          />
        </filter>
      </defs>
    </svg>
  );
}
