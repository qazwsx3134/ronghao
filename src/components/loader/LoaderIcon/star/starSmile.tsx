import { component$, QwikIntrinsicElements } from "@builder.io/qwik";

export default component$(
  (
    props: QwikIntrinsicElements["img"] & {
      key?: string;
    }
  ) => {
    return <img {...props} src={"/images/loader/starSmile.webp"} alt="" />;
  }
);
