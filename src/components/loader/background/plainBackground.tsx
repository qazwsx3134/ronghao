import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import gsap from "gsap";
import Flip from "gsap/Flip";
import GSDevTools from "~/hooks/useGSDevTools";

export default component$(() => {
  useVisibleTask$(async () => {
    await GSDevTools();

    const devtools = (globalThis as any).GSDevTools as any;

    gsap.registerPlugin(devtools, Flip);

    const transitionOfGrid = () => {
      // Get the state of the grid
      const container = document.querySelector(".gridContainer");

      const icon = document.querySelector("#icon");
      const items = document.querySelectorAll(".gridItem");
      const itemsState = Flip.getState(".gridItem");
      const containerState = Flip.getState(".gridContainer");

      // Move grid items to their final position
      items.forEach((item) => {
        icon?.appendChild(item);
      });

      Flip.from(itemsState, {
        duration: 1,
        ease: "back.in(0.8)",
        stagger: {
          each: 0.1,
          grid: "auto",
          from: "center",
        },
        spin: 1,
        absolute: true,
        onLeave: () => {
          // Remove the grid
          console.log("onEnter");
        },
      });
    };
    setTimeout(() => {
      transitionOfGrid();
    }, 500);
  });
  return (
    <div
      id="loaderLayer"
      class="loader h-screen w-full absolute z-50 bg-slate-900"
    >
      <div class="absolute gridContainer w-full h-full grid lg:grid-cols-[repeat(16,_minmax(0,_1fr))] grid-cols-6 z-10">
        {Array(16 * 9)
          .fill(0)
          .map(() => (
            <div class="gridItem bg-mocha-600"></div>
          ))}
      </div>
      <div
        id="icon"
        class="top-1/2 left-1/2  z-10 absolute -translate-x-1/2 -translate-y-1/2"
      >
        <Slot name="icon" />
      </div>
    </div>
  );
});
