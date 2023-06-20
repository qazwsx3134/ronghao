import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function Antenna(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="380"
      height="715"
      viewBox="0 0 380 715"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <defs>
        <mask id="theMask" maskUnits="userSpaceOnUse">
          <path
            d="M68.3694 215.544C67.0801 218.105 63.9524 219.146 61.4498 217.747C42.3034 207.045 26.425 191.28 15.5831 172.136C3.88701 151.485 -1.42245 127.828 0.326116 104.159C2.07468 80.4899 10.8027 57.8706 25.4065 39.1618C38.9439 21.8192 56.9665 8.55883 77.4777 0.786517C80.1587 -0.229384 83.0995 1.25942 83.9985 3.98182V3.98182C84.8976 6.70421 83.4138 9.62829 80.7371 10.6552C62.1743 17.7763 45.8644 29.8265 33.5907 45.5503C20.2504 62.6404 12.2775 83.3026 10.6802 104.924C9.08294 126.545 13.933 148.155 24.6171 167.02C34.447 184.376 48.8091 198.693 66.1239 208.464C68.6208 209.873 69.6587 212.984 68.3694 215.544V215.544Z"
            fill="white"
            class="antenna antenna-outside-1"
          />
          <path
            d="M122.953 181.36C121.635 184.69 117.853 186.345 114.641 184.762C101.753 178.412 90.7748 168.687 82.9065 156.571C73.8576 142.637 69.3714 126.232 70.0709 109.632C70.7704 93.0321 76.6209 77.062 86.81 63.9386C95.6697 52.5275 107.427 43.7611 120.804 38.5179C124.138 37.211 127.767 39.1783 128.8 42.6073V42.6073C129.833 46.0362 127.874 49.6239 124.561 50.9829C113.757 55.4146 104.261 62.6087 97.0533 71.8916C88.5159 82.8877 83.6138 96.269 83.0277 110.178C82.4416 124.087 86.2005 137.833 93.7826 149.508C100.183 159.365 109.041 167.332 119.434 172.657C122.621 174.29 124.27 178.03 122.953 181.36V181.36Z"
            fill="white"
            class="antenna antenna-outside-2"
          />
          <path
            d="M305.943 7.78465C307.091 5.15722 310.157 3.94717 312.732 5.207C332.435 14.8455 349.152 29.7181 361.025 48.2399C373.834 68.2209 380.429 91.5512 379.978 115.281C379.527 139.01 372.05 162.073 358.491 181.553C345.923 199.61 328.653 213.836 308.597 222.719C305.976 223.88 302.958 222.555 301.912 219.885V219.885C300.865 217.216 302.187 214.215 304.803 213.044C322.948 204.918 338.575 191.993 349.97 175.622C362.355 157.827 369.186 136.76 369.598 115.083C370.01 93.4069 363.985 72.0951 352.285 53.8429C341.52 37.0501 326.396 23.5411 308.573 14.7314C306.003 13.461 304.796 10.4121 305.943 7.78465V7.78465Z"
            fill="white"
            class="antenna antenna-outside-1"
          />
          <path
            d="M253.051 43.1913C254.173 39.7908 257.854 37.92 261.152 39.3144C274.385 44.9088 285.907 53.9825 294.463 65.6235C304.302 79.0112 309.729 95.1302 309.99 111.743C310.251 128.355 305.334 144.637 295.92 158.327C287.735 170.231 276.503 179.662 263.453 185.67C260.2 187.167 256.463 185.413 255.233 182.05V182.05C254.004 178.686 255.752 174.991 258.981 173.443C269.511 168.394 278.575 160.663 285.234 150.979C293.122 139.508 297.242 125.866 297.023 111.946C296.805 98.027 292.257 84.5209 284.013 73.3034C277.053 63.8335 267.75 56.3912 257.067 51.676C253.791 50.23 251.928 46.5918 253.051 43.1913V43.1913Z"
            fill="white"
            class="antenna antenna-outside-2"
          />
          <circle
            cx="190"
            cy="113"
            r="30"
            fill="white"
            class="antenna antenna-circle"
          />
          <path
            class="antenna-line"
            d="M190.5 139.5V712"
            fill="white"
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
          y1="800"
          x2="500"
          y2="800"
        >
          <stop offset="0" style="stop-color:#6EE7B7" />
          <stop offset="0.221" style="stop-color:#10B981" />
          <stop offset="0.4218" style="stop-color:#fff" />
          <stop offset="0.6512" style="stop-color:#10B981" />
          <stop offset="1" style="stop-color:#6EE7B7" />
        </linearGradient>
      </defs>
      <g mask="url(#theMask)">
        <rect x="0" y="0" width="500" height="800" fill="url(#theGradient)" />
      </g>
    </svg>
  );
}