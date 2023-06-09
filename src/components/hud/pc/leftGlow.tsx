import type { QwikIntrinsicElements } from "@builder.io/qwik";

/***************************************************
 * Generated by SVG Artista on 5/24/2023, 9:42:21 AM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

//  svg .svg-elem-1 {
//   stroke-dashoffset: 2166.580322265625px;
//   stroke-dasharray: 2166.580322265625px;
//   -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
//           transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
// }

// svg.active .svg-elem-1 {
//   stroke-dashoffset: 0;
// }

export function HUDLeftGlow(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      viewBox="0 0 220 846"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <g filter="url(#filter0_d_39_3)">
        <path
          d="M207 19H140.863C140.312 19 139.786 18.7728 139.408 18.372L124.092 2.12797C123.714 1.72719 123.188 1.5 122.637 1.5H27.3284C26.798 1.5 26.2893 1.71071 25.9142 2.08579L2.08579 25.9142C1.71071 26.2893 1.5 26.798 1.5 27.3284V94.6419C1.5 95.1898 1.7248 95.7137 2.12188 96.0913L31.3781 123.909C31.7752 124.286 32 124.81 32 125.358V382.709C32 383.217 31.8063 383.706 31.4584 384.077L2.04162 415.423C1.69367 415.794 1.5 416.283 1.5 416.791V807.758C1.5 808.237 1.67159 808.7 1.98363 809.062L22.4015 832.804C22.7815 833.246 23.3352 833.5 23.9179 833.5H206.5M207 35H171H135.793C135.284 35 134.793 34.8056 134.422 34.4564L118.578 19.5436C118.207 19.1944 117.716 19 117.207 19H32.7277C32.2576 19 31.8026 19.1656 31.4425 19.4676L17.2148 31.4005C16.7617 31.7805 16.5 32.3415 16.5 32.9329V85.711C16.5 86.218 16.6925 86.7061 17.0387 87.0765L45 117M46.5 393L14.5858 424.914C14.2107 425.289 14 425.798 14 426.328V799.688C14 800.209 14.2033 800.709 14.5665 801.082L31.4111 818.395C31.7876 818.782 32.3046 819 32.8445 819H206.5"
          stroke="#73E5FE"
          stroke-width="2"
          stroke-linecap="round"
          fill-opacity="0"
          class="leftHUDGlow"
          style={{
            visibility: "hidden",
          }}
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_39_3"
          x="0"
          y="0"
          width="220"
          height="846"
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
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.45098 0 0 0 0 0.898039 0 0 0 0 0.996078 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_39_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_39_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}