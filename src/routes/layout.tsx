import {
  component$,
  Slot,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

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
      <main class="flex flex-col h-full min-h-screen">
        <div class="pointer-events-none fixed h-full w-full z-[11] bg-black"></div>
        <div class="fixed h-28 w-full flex px-12 pt-12 items-center z-50">
          {/* Logo */}
          <button class="btn btn-ghost logoBtn invisible w-48">
            <a href="/" class="font-digi">
              Vida Design
            </a>
          </button>
        </div>
        <div class="fixed bottom-0 h-20 w-full flex px-12 items-center z-40 backdrop-blur-sm"></div>
        <div class="z-40 relative w-full h-full grow">
          <Slot />
        </div>
      </main>
    </>
  );
});
