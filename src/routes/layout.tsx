import { component$, Slot, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";
import PlainBackground from "~/components/loader/background/plainBackground";
import Blackhole from "~/components/loader/LoaderIcon/blackhole";

import { gsap } from "gsap";
import GSDevTools from "~/hooks/useGSDevTools";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);

  useVisibleTask$(async()=> {
    await GSDevTools();

    const devtools = (globalThis as any).GSDevTools as any;

    gsap.registerPlugin(devtools);
  })
  return (
    <>
      <main class="flex flex-col h-full min-h-screen">
        <PlainBackground>
          <Blackhole q:slot="icon" />
        </PlainBackground>
        <Slot />
      </main>
    </>
  );
});
