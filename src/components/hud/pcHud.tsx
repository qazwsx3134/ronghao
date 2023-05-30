import { component$, useVisibleTask$, type Signal } from "@builder.io/qwik";
import gsap from "gsap";
import { HUDLeft } from "~/components/hud/pc/left";
import { HUDMiddleLeft } from "~/components/hud/pc/middleLeft";
import { HUDMiddleRight } from "~/components/hud/pc/middleRight";
import { HUDRight } from "~/components/hud/pc/right";

interface Props {
  onDone?: Signal<boolean>;
}

export default component$<Props>((props) => {
  useVisibleTask$(async ({ track, cleanup }) => {
    track(() => props.onDone?.value);

    /**
     * If the loader is done, play the out animation
     * Early return to prevent create another animate instance
     */
    if (props.onDone?.value) {
      const originOffset = {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        delay: 2,
      };
      const gsapCtx = gsap.context(() => {
        // LEFT

        gsap.fromTo(
          ".leftHUD",
          {
            strokeDashoffset: 2166.580322265625,
            strokeDasharray: 2166.580322265625,
          },
          originOffset
        );

        // ML

        gsap.fromTo(
          ".middleLeft1",
          {
            strokeDashoffset: 336.3434753417969,
            strokeDasharray: 336.3434753417969,
          },
          originOffset
        );

        gsap.fromTo(
          ".middleLeft2",
          {
            strokeDashoffset: 900.15771484375,
            strokeDasharray: 900.15771484375,
          },
          originOffset
        );

        gsap.fromTo(
          ".middleLeft3",
          {
            strokeDashoffset: 479.57672119140625,
            strokeDasharray: 479.57672119140625,
          },
          originOffset
        );
        // MR

        gsap.fromTo(
          ".middleRight1",
          {
            strokeDashoffset: 889.5537109375,
            strokeDasharray: 889.5537109375,
          },
          originOffset
        );

        gsap.fromTo(
          ".middleRight2",
          {
            strokeDashoffset: 900.158447265625,
            strokeDasharray: 900.158447265625,
          },
          originOffset
        );

        gsap.fromTo(
          ".middleRight3",
          {
            strokeDashoffset: 479.57672119140625,
            strokeDasharray: 479.57672119140625,
          },
          originOffset
        );

        gsap.fromTo(
          ".middleRight4",
          {
            strokeDashoffset: 127.82252502441406,
            strokeDasharray: 127.82252502441406,
          },
          originOffset
        );

        gsap.fromTo(
          ".middleRight5",
          {
            strokeDashoffset: 222.1090850830078,
            strokeDasharray: 222.1090850830078,
          },
          originOffset
        );

        gsap.fromTo(
          ".rightHUD",
          {
            strokeDashoffset: 1853.55029296875,
            strokeDasharray: 1853.55029296875,
          },
          originOffset
        );
      });

      return;

      cleanup(() => {
        gsapCtx.kill();
      });
    }
  });

  return (
    <div class="fixed w-full h-full min-h-screen pointer-events-none p-4 z-30 hidden lg:flex opacity-60 ">
      <div class="flex-grow-0 shrink-[1]  w-60 h-full">
        <HUDLeft class="h-full w-full" />
      </div>
      <div class="grow h-full flex shrink-[2] justify-between">
        <HUDMiddleLeft class="h-full w-full max-w-[258px] shrink-[2]" />
        <HUDMiddleRight class="h-full w-full max-w-[565px] shrink" />
      </div>
      <div class="flex-grow-0 shrink-[1] w-60 h-full">
        <HUDRight class="h-full w-full" />
      </div>
    </div>
  );
});
