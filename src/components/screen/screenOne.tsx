import {
  component$,
  useSignal,
  useVisibleTask$,
  useStore,
  useStylesScoped$,
  type NoSerialize,
  noSerialize,
} from "@builder.io/qwik";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";

import PcHud from "~/components/hud/pcHud";
import PlainBackground from "~/components/loader/background/plainBackground";
import BlackholeOriginal from "~/components/loader/LoaderIcon/blackhole/blackholeOriginal";

import horizontalLoop from "~/utils/horizontalLoop";

const wordsSet = ["Web design", "Animation design", "System design"];

export default component$(() => {
  useStylesScoped$(`
    .neonText {
      text-shadow:
          0 0 2px #6EE7B7,
          0 0 7px #6EE7B7,
          0 0 12px #6EE7B7;
      color: #fff;
    }

  //   /* Flickering animation */
  //   @keyframes flicker {

  //     0%, 18%, 22%, 25%, 53%, 57%, 100% {
  //       text-shadow:
  //       0 0 2px #fb923c,
  //       0 0 7px #fb923c,
  //       0 0 12px #fb923c;
  //     }

  // 20%, 24%, 55% {
  //     text-shadow: none;
  // }
}
  `);

  const onDone = useSignal(false);
  const onRevert = useSignal(false);
  const videoInstance = useStore<{
    video: NoSerialize<Player>;
  }>({
    video: undefined,
  });
  const tlStore = useStore<{
    mqTl: NoSerialize<gsap.core.Timeline>;
    loopTl: NoSerialize<gsap.core.Timeline>;
  }>({
    mqTl: undefined,
    loopTl: undefined,
  });

  // Init
  useVisibleTask$(async ({ track }) => {
    track(() => onDone.value);
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    ScrollTrigger.create({
      trigger: "#ScreenOne",
      start: "15% top",
      end: "15% top",
      onEnter: () => {
        onRevert.value = true;
      },
      onEnterBack: () => {
        onRevert.value = false;
      },
    });

    gsap.set(
      [
        ".HUDTextContainer",
        ".text",
        ".hi",
        ".cursor",
        ".marqueeContainer",
        ".marqueeText",
      ],
      {
        visibility: "hidden",
      }
    );

    // Init
    if (onDone.value === false) {
      const player = videojs("my-player", {
        controls: false,
        autoplay: false,
        loop: true,
        muted: true,
        playbackRates: [0.5, 1, 1.5, 2],
      });

      videoInstance.video = noSerialize(player);

      setTimeout(() => {
        onDone.value = true;
        videoInstance.video?.play();
      }, 2000);
    } else {
      const backGroundTimeline = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
      });
      backGroundTimeline.from(
        "#my-player",
        {
          filter: "blur(10px)",
          scale: 0.2,
          duration: 1,
        },
        "+=1.3"
      );

      gsap.set([".HUDTextContainer"], {
        visibility: "visible",
        boxShadow:
          "rgb(0, 0, 0, 0.8) 0px 0px 0px 2px, rgba(59, 130, 246, 0.5) 0px 0px 0px 5px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
      });
      backGroundTimeline.from(".HUDTextContainer", {
        width: 0,
        padding: 0,
        duration: 1.5,
        border: 0,
        boxShadow:
          "rgb(0, 0, 0, 0.8) 0px 0px 0px 0px, rgba(59, 130, 246, 0.5) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        onComplete: () => {
          gsap.set([".text", ".hi"], {
            visibility: "visible",
          });
          HUDTextContext.start();
        },
      });
      backGroundTimeline.fromTo(
        ".logoBtn",
        {
          opacity: 0,
          visibility: "hidden",
        },
        {
          visibility: "visible",
          opacity: 1,
          duration: 1,
        },
        "<"
      );

      backGroundTimeline.to("#my-player", {
        scale: 1.1,
        duration: 10,
      });

      const HUDTextContext = gsap.context(() => {});

      HUDTextContext.add("start", () => {
        const mqTL = gsap.timeline();
        mqTL.set([".marqueeText"], {
          visibility: "hidden",
          display: "none",
        });
        mqTL.fromTo(
          [".marqueeContainer"],
          {
            width: 0,
            visibility: "visible",
          },
          {
            width: "100%",
            visibility: "visible",
            duration: 1,
          }
        );

        mqTL.fromTo(
          [".marqueeContainer"],
          {
            height: 0,
          },
          {
            height: "100%",
            duration: 1,
          }
        );

        mqTL.fromTo(
          ".marqueeText",
          {
            opacity: 0,
            visibility: "visible",
            display: "flex",
          },
          {
            opacity: 1,
            visibility: "visible",
            display: "flex",
            duration: 0.3,
            onComplete: () => {
              if (tlStore.loopTl) {
                tlStore.loopTl.pause();
                tlStore.loopTl.reverse();
              } else {
                const loopTl = horizontalLoop(".marqueeText", {
                  repeat: -1,
                  speed: 1.5,
                  reversed: true,
                });
                tlStore.loopTl = noSerialize(loopTl);
              }
            },
          }
        );

        tlStore.mqTl = noSerialize(mqTL);

        const masterTimeline = gsap.timeline({
          repeat: -1,
        });

        gsap.to(".hi", {
          duration: 1,
          ease: "power2.in",
          onComplete: () => {
            gsap.set([".cursor"], {
              visibility: "visible",
            });
            // Cursor animation
            gsap.to(".cursor", {
              opacity: 0,
              ease: "power2.inOut",
              repeat: -1,
            });
            gsap.set([".webBody"], {
              display: "flex",
            });
            masterTimeline.play();
          },
          text: {
            value: "We are ViDA Design",
          },
        });

        wordsSet.forEach((word) => {
          masterTimeline.to(".text", {
            duration: 1,
            ease: "none",
            repeat: 1,
            repeatDelay: 1,
            yoyo: true,
            text: {
              value: word,
            },
          });
        });
        masterTimeline.pause();
      });
    }
  });

  // When scroll back to Screen one
  useVisibleTask$(async ({ track }) => {
    track(() => onRevert.value);
    if (onRevert.value) {
      tlStore.mqTl?.timeScale(3).reverse();
    }
    if (!onRevert.value && tlStore.mqTl?.reversed()) {
      tlStore.mqTl?.timeScale(3).play();
    }
  });

  return (
    <>
      <PlainBackground onDone={onDone}>
        <BlackholeOriginal
          q:slot="icon"
          class="aspect-square rotate-[20deg] iconElement"
        />
      </PlainBackground>
      <section id="ScreenOne" class="w-full h-full flex min-h-screen bg-black">
        <PcHud onDone={onDone} onRevert={onRevert} />
        <div class=" w-full h-full z-50 relative flex items-center justify-center grow min-h-screen">
          <div class="HUDTextContainer flex flex-col justify-around items-center w-[800px] h-[300px] p-4 backdrop-blur-sm rounded-md invisible ">
            <h1 class="text-5xl font-bold relative font-digi text-center w-full leading-normal">
              <div class="hi neonText"></div>
              <span class="text neonText"></span>
              <span class="cursor neonText">_</span>
            </h1>
          </div>
        </div>
        <div class="fixed bottom-14 w-full h-12 z-30 flex items-end">
          <div class="marqueeContainer relative overflow-hidden flex items-center w-full mx-24 border-t border-b border-white border-double font-digi text-lg tracking-wide">
            <div class="marqueeText flex-[0_0_40%] py-1 flex justify-center">
              <span class="inline-flex">Specialize in design</span>
              &nbsp;
              <span class="inline-flex">Modern Dynamic Website</span>
            </div>
            <div class="marqueeText flex-[0_0_40%] py-1 flex ">
              CREATIVE STUDIO
            </div>
            <div class="marqueeText flex-[0_0_40%] py-1 flex">
              <span class="inline-flex">For Company&nbsp;</span>
              <span class="inline-flex">with taste </span>
            </div>
            <div class="marqueeText flex-[0_0_40%] py-1 flex">
              Fastest framework, Fast development
            </div>
          </div>
        </div>
        <div class="absolute w-full h-full">
          <video
            id="my-player"
            class="video-js w-full z-20 rounded-lg"
            preload="auto"
            style={{
              height: "calc(100vh - 4rem)",
            }}
            playsInline
          >
            <source src="/video/galaxy_scene.webm" type="video/webm" />
            <source src="/video/galaxy_scene.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
});
