import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export default component$(
  (
    props: QwikIntrinsicElements["img"] & {
      key?: string;
    }
  ) => {
    return (
      <img {...props} src={"/images/loader/gargantuaBlackHole.webp"} alt="" />
    );
  }
);
