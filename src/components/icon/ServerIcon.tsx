import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function ServerIcon(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      width="250"
      height="261"
      viewBox="0 0 250 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <rect width="250" height="250" rx="5" fill="white" />
      <rect x="188" y="211" width="32" height="7" rx="3.5" fill="#ACACAC" />
      <rect x="21" y="211" width="60" height="7" rx="3.5" fill="#ACACAC" />
      <rect
        x="30.5"
        y="247.5"
        width="41"
        height="13"
        rx="3.5"
        fill="black"
        stroke="white"
      />
      <rect
        x="178.5"
        y="247.5"
        width="41"
        height="13"
        rx="3.5"
        fill="black"
        stroke="white"
      />
      <rect
        x="16.5"
        y="26.5"
        width="217"
        height="37"
        rx="8.5"
        fill="white"
        stroke="#ACACAC"
        stroke-width="3"
      />
      <rect
        x="16.5"
        y="78.5"
        width="217"
        height="37"
        rx="8.5"
        fill="white"
        stroke="#ACACAC"
        stroke-width="3"
      />
      <rect
        x="16.5"
        y="130.5"
        width="217"
        height="37"
        rx="8.5"
        fill="white"
        stroke="#ACACAC"
        stroke-width="3"
      />
      <rect x="29" y="33" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="49" y="33" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="69" y="33" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="29" y="85" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="49" y="85" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="69" y="85" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="69" y="137" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="21" y="194" width="60" height="7" rx="3.5" fill="#ACACAC" />
      <rect x="49" y="137" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <rect x="29" y="137" width="7" height="24" rx="3.5" fill="#ACACAC" />
      <ellipse
        cx="213.5"
        cy="45"
        rx="6.5"
        ry="7"
        fill="#74D068"
        class="server-dot"
      />
      <ellipse
        cx="213.5"
        cy="97"
        rx="6.5"
        ry="7"
        fill="#74D068"
        class="server-dot"
      />
      <ellipse
        cx="213.5"
        cy="149"
        rx="6.5"
        ry="7"
        fill="#74D068"
        class="server-dot"
      />
    </svg>
  );
}
