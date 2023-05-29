import {
  component$,
  Slot,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import PcHud from "~/components/hud/pcHud";
import BlackholeOriginal from "~/components/loader/LoaderIcon/blackhole/blackholeOriginal";

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
      <PcHud />
      <main class="flex flex-col h-full min-h-screen">
        <div class="pointer-events-none fixed h-full w-full z-[11] bg-black"></div>
        <div class="fixed h-28 w-full flex px-12 pt-6 items-center z-50">
          {/* Logo */}
          <button class="btn btn-ghost">
            <a href="/" class="font-digi">
              RONG HAO DESIGN
            </a>
          </button>
        </div>
        <div class="fixed bottom-0 h-20 w-full flex px-12 items-center z-40 backdrop-blur-sm"></div>
        <div class="px-14 py-6 z-20">
          <Slot />
        </div>
      </main>
    </>
  );
});
