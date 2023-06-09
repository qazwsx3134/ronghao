import {
  component$,
  useVisibleTask$,
  type Signal,
  useStore,
  type NoSerialize,
  noSerialize,
} from "@builder.io/qwik";
import gsap from "gsap";
import { HUDLeft } from "~/components/hud/pc/left";
import { HUDMiddleLeft } from "~/components/hud/pc/middleLeft";
import { HUDMiddleRight } from "~/components/hud/pc/middleRight";
import { HUDRight } from "~/components/hud/pc/right";
import { HUDLeftGlow } from "./pc/leftGlow";
import { HUDRightGlow } from "./pc/rightGlow";

interface Props {
  onDone?: Signal<boolean>;
  onRevert?: Signal<boolean>;
}

export default component$<Props>((props) => {
  const tlStore = useStore<{
    timeline: NoSerialize<gsap.core.Timeline>;
    glowTimeline: NoSerialize<gsap.core.Timeline>;
  }>({
    timeline: undefined,
    glowTimeline: undefined,
  });
  useVisibleTask$(async ({ track, cleanup }) => {
    track(() => props.onDone?.value);
    track(() => props.onRevert?.value);

    /**
     * If the loader is done, play the out animation
     * Early return to prevent create another animate instance
     */
    if (props.onDone?.value && !props.onRevert?.value) {
      if (tlStore.timeline) {
        tlStore.timeline.timeScale(3).play();
        tlStore.glowTimeline?.play(3);

        return;
      }
      const originOffset = {
        strokeDashoffset: 0,
      };
      gsap.context(() => {
        const HUDGlowTL = gsap.timeline({
          defaults: {
            duration: 4,
            ease: "none",
            repeat: -1,
          },
        });

        // LEFT
        const HUDTl = gsap.timeline({
          defaults: {
            duration: 2,
            ease: "power2.inOut",
          },
        });

        HUDTl.fromTo(
          ".leftHUD",
          {
            strokeDashoffset: 2166.580322265625,
            strokeDasharray: 2166.580322265625,
          },
          originOffset,
          "+=2"
        );

        HUDGlowTL.fromTo(
          [".leftHUDGlow", ".rightHUDGlow"],
          {
            visibility: "hidden",
            strokeDasharray: 350,
            strokeDashoffset: 0,
            opacity: 1,
          },
          {
            visibility: "visible",
            strokeDashoffset: -700,
            opacity: 0.7,
            repeat: -1,
          },
          "+=4"
        );

        // ML

        HUDTl.fromTo(
          ".middleLeft1",
          {
            strokeDashoffset: 336.3434753417969,
            strokeDasharray: 336.3434753417969,
          },
          originOffset,
          "<"
        );

        HUDTl.fromTo(
          ".middleLeft2",
          {
            strokeDashoffset: 900.15771484375,
            strokeDasharray: 900.15771484375,
          },
          originOffset,
          "<"
        );

        HUDTl.fromTo(
          ".middleLeft3",
          {
            strokeDashoffset: 479.57672119140625,
            strokeDasharray: 479.57672119140625,
          },
          originOffset,
          "<"
        );
        // MR

        HUDTl.fromTo(
          ".middleRight1",
          {
            strokeDashoffset: 889.5537109375,
            strokeDasharray: 889.5537109375,
          },
          originOffset,
          "<"
        );

        HUDTl.fromTo(
          ".middleRight2",
          {
            strokeDashoffset: 900.158447265625,
            strokeDasharray: 900.158447265625,
          },
          originOffset,
          "<"
        );

        HUDTl.fromTo(
          ".middleRight3",
          {
            strokeDashoffset: 479.57672119140625,
            strokeDasharray: 479.57672119140625,
          },
          originOffset,
          "<"
        );

        HUDTl.fromTo(
          ".middleRight4",
          {
            strokeDashoffset: 127.82252502441406,
            strokeDasharray: 127.82252502441406,
          },
          originOffset,
          "<"
        );

        HUDTl.fromTo(
          ".middleRight5",
          {
            strokeDashoffset: 222.1090850830078,
            strokeDasharray: 222.1090850830078,
          },
          originOffset,
          "<"
        );

        HUDTl.fromTo(
          ".rightHUD",
          {
            strokeDashoffset: 1853.55029296875,
            strokeDasharray: 1853.55029296875,
          },
          originOffset,
          "<"
        );

        tlStore.timeline = noSerialize(HUDTl);
        tlStore.glowTimeline = noSerialize(HUDGlowTL);
      });
    }

    if (props.onDone?.value && props.onRevert?.value && tlStore.timeline) {
      tlStore.timeline.timeScale(3).reverse();
      tlStore.glowTimeline?.pause(0)
    }

    cleanup(() => {
      tlStore.timeline?.kill();
    });
  });

  if (!props.onDone?.value) {
    return null;
  }

  return (
    <div class="fixed w-full h-full min-h-screen pointer-events-none p-4 z-30 lg:flex">
      <div class="flex-grow-0 shrink-[1] w-60 h-full relative">
        <HUDLeft class="h-full w-full opacity-20" />
        <HUDLeftGlow class="h-full w-full absolute top-0" />
      </div>
      <div class="grow h-full flex shrink-[2] justify-between">
        <HUDMiddleLeft class="h-full w-full max-w-[258px] shrink-[2] opacity-90" />
        <HUDMiddleRight class="h-full w-full max-w-[565px] shrink opacity-90" />
      </div>
      <div class="flex-grow-0 shrink-[1] w-60 h-full relative">
        <HUDRight class="h-full w-full opacity-20" />
        <HUDRightGlow class="h-full w-full absolute top-0" />
      </div>
    </div>
  );
});
