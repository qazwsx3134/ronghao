import {
  component$,
  Slot,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { HUDLeft } from "~/components/hud/left";
import { HUDMiddleLeft } from "~/components/hud/middleLeft";
import { HUDMiddleRight } from "~/components/hud/middleRight";
import { HUDRight } from "~/components/hud/right";

import styles from "./styles.css?inline";

// import { gsap } from "gsap";
// import GSDevTools from "~/hooks/useGSDevTools";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);

  useVisibleTask$(async () => {
    // await GSDevTools();
    // const devtools = (globalThis as any).GSDevTools as any;
    // gsap.registerPlugin(devtools);
  });
  return (
    <>
      <div class="fixed w-full h-full min-h-screen pointer-events-none p-4 z-20 flex opacity-50">
        <div class="flex-grow-0 flex-shrink-0 w-60 h-full">
          <HUDLeft class="h-full w-full" />
        </div>
        <div class="grow h-full flex justify-between">
          <HUDMiddleLeft class="h-full "/>
          <HUDMiddleRight class="h-full "/>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-60 h-full">
          <HUDRight class="h-full w-full" />
        </div>
      </div>
      <main class="flex flex-col h-full min-h-screen">
        <div class="">
          <Slot />
        </div>
      </main>
    </>
  );
});
