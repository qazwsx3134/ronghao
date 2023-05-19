import {
  component$,
  Slot,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import gsap from "gsap";
import { v4 as uuidv4 } from "uuid";
import Flip from "gsap/Flip";

import MotionPathPlugin from "gsap/MotionPathPlugin";
// import GSDevTools from "~/hooks/useGSDevTools";
import { random } from "~/utils/Math";

import { StarIcon } from "../LoaderIcon/star/star";
import StarSmile from "../LoaderIcon/star/starSmile";
import { StarTrack1 } from "../LoaderIcon/star/startTrack1";
import { StarTrack2 } from "../LoaderIcon/star/startTrack2";
import { StarTrack3 } from "../LoaderIcon/star/startTrack3";

import { StarTrack4 } from "../LoaderIcon/star/startTrack4";
import { StarTrack5 } from "../LoaderIcon/star/startTrack5";
import { StarTrack6 } from "../LoaderIcon/star/startTrack6";

import StarUpset from "../LoaderIcon/star/starUpset";

import oldTVstyles from "~/components/overlay/oldTV/oldTV.css?inline";

const starList = [
  // 1
  [
    {
      start: 0.22,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.13,
      end: -0.25,
      offsetY: 10,
    },
    {
      start: 0.0,
      end: -0.25,
      offsetY: -15,
    },
    {
      start: 0.9,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.37,
      end: -0.25,
      offsetY: -30,
    },
  ],
  // 2
  [
    {
      start: 0.2,
      end: -0.25,
      offsetY: 0,
    },
    {
      start: 0.08,
      end: -0.25,
      offsetY: 10,
    },
    {
      start: 0.0,
      end: -0.25,
      offsetY: -15,
    },
    {
      start: 0.7,
      end: -0.25,
      offsetY: -5,
    },
    {
      start: 0.37,
      end: -0.25,
      offsetY: -30,
    },
  ],
  // 3
  [
    {
      start: 0.2,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.08,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.0,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.7,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.37,
      end: -0.25,
      offsetY: -30,
    },
  ],
  [
    {
      start: 0.2,
      end: -0.25,
      offsetY: -10,
    },
    {
      start: 0.08,
      end: -0.25,
      offsetY: -10,
    },
    {
      start: 0.0,
      end: -0.25,
      offsetY: -10,
    },
    {
      start: 0.7,
      end: -0.25,
      offsetY: -10,
    },
    {
      start: 0.37,
      end: -0.25,
      offsetY: -10,
    },
  ],
  [
    {
      start: 0.2,
      end: -0.25,
      offsetY: 0,
    },
    {
      start: 0.08,
      end: -0.25,
      offsetY: 10,
    },
    {
      start: 0.0,
      end: -0.25,
      offsetY: -15,
    },
    {
      start: 0.7,
      end: -0.25,
      offsetY: -5,
    },
    {
      start: 0.37,
      end: -0.25,
      offsetY: -30,
    },
  ],
  [
    {
      start: 0.22,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.13,
      end: -0.25,
      offsetY: 10,
    },
    {
      start: 0.0,
      end: -0.25,
      offsetY: -15,
    },
    {
      start: 0.9,
      end: -0.25,
      offsetY: -30,
    },
    {
      start: 0.37,
      end: -0.25,
      offsetY: -30,
    },
  ],
];

export default component$(() => {
  useStylesScoped$(oldTVstyles);
  useVisibleTask$(async ({ cleanup }) => {
    // await GSDevTools();

    // const devtools = (globalThis as any).GSDevTools as any;

    gsap.registerPlugin(Flip, MotionPathPlugin);

    const gsapCtx = gsap.context(() => {
      gsap.to("#icon", {
        duration: 18,
        rotation: -30,
        yoyo: true,
        repeat: -1,
      });
      starList.forEach((starAry, starIndex) => {
        starAry.forEach((star, index) => {
          gsap.to(`.star${starIndex + 1}-${index + 1}`, {
            duration: 1,
            opacity: 1,
            ease: "ease.inOut",
          });
          gsap.to(`.star${starIndex + 1}-${index + 1}`, {
            duration: 18,
            yoyo: true,
            ease: "none",
            motionPath: {
              path: `#starTrack${starIndex + 1}`,
              align: `#starTrack${starIndex + 1}`,
              alignOrigin: [0.5, 0.5],
              ...star,
            },
            repeat: -1,
          });
          gsap.to(`.star${starIndex + 1}-${index + 1}`, {
            duration: 12,
            rotation: random(0, 360),
            ease: "ease.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      });

      gsap.to(".starSmile", {
        duration: 48,
        ease: "none",
        motionPath: {
          path: "#starTrack5",
          align: "#starTrack5",
          alignOrigin: [0.5, 0.5],
          offsetX: 0,
          offsetY: -50,
          start: 0.3,
          end: -0.7,
        },
        repeat: -1,
      });
      gsap.to(".starSmile", {
        duration: 12,
        rotation: random(-90, 90),
        ease: "ease.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".starUpset", {
        duration: 48,
        ease: "none",
        motionPath: {
          path: "#starTrack5",
          align: "#starTrack5",
          alignOrigin: [0.5, 0.5],
          offsetX: 0,
          offsetY: 0,
          start: 0.5,
          end: -0.5,
        },
        repeat: -1,
      });
      gsap.to(".starUpset", {
        duration: 12,
        rotation: random(-90, 90),
        ease: "ease.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    const transitionOfGrid = () => {
      // Get the state of the grid
      const container = document.querySelector(".gridContainer");

      const gridCollector = document.querySelector("#gridCollector");
      const items = document.querySelectorAll(".gridItem");
      const itemsState = Flip.getState(".gridItem");

      // Move grid items to their final position
      items.forEach((item) => {
        gridCollector?.appendChild(item);
      });

      Flip.from(itemsState, {
        duration: 0.4,
        ease: "back.in(0.8)",
        stagger: {
          each: 0.05,
          grid: "auto",
          from: "center",
        },
        fade: true,
        spin: 0.1,
        absolute: true,
        onComplete: () => {
          // Remove the grid
          gsap.set(container, { display: "none" });
          gsap.fromTo(
            "#loaderLayer",
            {
              backgroundColor: "rgb(255 250 229)",
            },
            {
              background: "transparent",
              ease: "power.out",
              duration: 0.5,
              onComplete: () => {
                gsap.set("#loaderLayer", { display: "none" });
              },
            }
          );
        },
      });
    };
    setTimeout(() => {
      const timeline = gsap.timeline();
      timeline
        .to(".shrinkElement", {
          duration: 0.5,
          scale: 0.0,
          ease: "ease.inOut",
        })
        .to(
          ".iconElement",
          {
            duration: 0.3,
            scaleY: 0.0,
            ease: "ease.inOut",
          },
          "<+0.15"
        )
        .to(
          ".iconElement",
          {
            duration: 0.3,
            scaleX: 0.0,
            ease: "none",
            onComplete: () => {
              transitionOfGrid();
            },
          },
          "<"
        );
    }, 1500);
    cleanup(() => {
      gsapCtx.kill();
    });
  });

  return (
    <div
      id="loaderLayer"
      class="loader h-screen w-full absolute z-50 bg-slate-900 tvOverlay"
    >
      <div class="absolute gridContainer w-full h-full grid lg:grid-cols-[repeat(16,_minmax(0,_1fr))] grid-cols-6 z-10 ">
        {Array(16 * 9)
          .fill(0)
          .map(() => (
            <div class="gridItem bg-mocha-300"></div>
          ))}
      </div>
      <div class="z-20 absolute w-full h-full shrinkElement">
        {Array(3)
          .fill(0)
          .map((_, outIndex) => {
            return (
              <>
                {Array(5)
                  .fill(0)
                  .map((_, inIndex) => (
                    <StarIcon
                      key={uuidv4()}
                      class={[
                        "aspect-square",
                        "lg:w-5",
                        "w-3",
                        `star${outIndex + 1}-${inIndex + 1}`,
                      ]}
                      style={{
                        transform: `scale(${random(0.5, 1.3)})`,
                        opacity: 0,
                      }}
                    />
                  ))}
              </>
            );
          })}
        <StarTrack1 class="w-full absolute lg:top-[20%] top-[8%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 " />
        <StarTrack2 class="lg:w-full w-2/3 absolute lg:top-[27%] top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 " />
        <StarTrack3 class="lg:w-full w-1/4 absolute lg:top-[34%] top-[32%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 " />
      </div>
      <div class="z-10 absolute w-full h-full shrinkElement">
        {Array(3)
          .fill(0)
          .map((_, outIndex) => {
            return (
              <>
                {Array(5)
                  .fill(0)
                  .map((_, inIndex) => (
                    <StarIcon
                      key={uuidv4()}
                      class={[
                        "aspect-square",
                        "lg:w-5",
                        "w-3",
                        `star${outIndex + 4}-${inIndex + 1}`,
                      ]}
                      style={{
                        transform: `scale(${random(0.5, 1.3)})`,
                        opacity: 0,
                      }}
                    />
                  ))}
              </>
            );
          })}
        <StarSmile class="aspect-square w-12 absolute top-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 starSmile" />
        <StarUpset class="aspect-square w-12 absolute top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 starUpset" />
        <StarTrack4 class="lg:w-full w-1/4 absolute lg:top-[67%] top-[62%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 " />
        <StarTrack5 class="lg:w-full w-2/3 absolute lg:top-[74%] top-[73%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 " />
        <StarTrack6 class="lg:w-full w-full absolute lg:top-[81%] top-[84%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 " />
      </div>
      <div
        id="icon"
        class="top-1/2 left-1/2 z-10 absolute -translate-x-1/2 -translate-y-1/2 lg:w-[500px] w-[300px] "
      >
        <Slot name="icon" />
        <div
          id="gridCollector"
          class="top-1/2 left-1/2 z-10 absolute -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
    </div>
  );
});
