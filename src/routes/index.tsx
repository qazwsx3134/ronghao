import {
  component$,
  noSerialize,
  useSignal,
  useStore,
  useStylesScoped$,
  useVisibleTask$,
  type NoSerialize,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { gsap } from "gsap";

import videojs from "video.js";
import Player from "video.js/dist/types/player";

import PlainBackground from "~/components/loader/background/plainBackground";
import BlackholeOriginal from "~/components/loader/LoaderIcon/blackhole/blackholeOriginal";
import PcHud from "~/components/hud/pcHud";
import TextPlugin from "gsap/TextPlugin";
import horizontalLoop from "~/utils/horizontalLoop";

export default component$(() => {
  const onDone = useSignal(false);
  useStylesScoped$(`
    .neonText {
      text-shadow:
          0 0 2px #fb923c,
          0 0 7px #fb923c,
          0 0 12px #fb923c;
      color: #ffedd5;
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
  const videoInstance = useStore<{
    video: NoSerialize<Player>;
  }>({
    video: undefined,
  });

  const wordsSet = ["WEB-DEVELOPER", "FRONT-END DEVELOPER", "DESIGNER"];

  useVisibleTask$(async ({ track }) => {
    track(() => onDone.value);
    gsap.set([".HUDTextContainer", ".text", ".hi", ".cursor"], {
      visibility: "hidden",
    });

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
        player.play();
      }, 2000);

      gsap.context(() => {
        horizontalLoop(".marqueeText", {
          repeat: -1,
          speed: 1.5,
          reversed: true,
        });
      });
    } else {
      gsap.registerPlugin(TextPlugin);

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
        "+=1.5"
      );

      gsap.set([".HUDTextContainer"], {
        visibility: "visible",
      });
      backGroundTimeline.from(".HUDTextContainer", {
        width: 0,
        padding: 0,
        duration: 1.5,
        border: 0,
        onComplete: () => {
          gsap.set([".text", ".hi"], {
            visibility: "visible",
          });
          HUDTextContext.start();
        },
      });

      backGroundTimeline.to("#my-player", {
        scale: 1.1,
        duration: 10,
      });

      const HUDTextContext = gsap.context(() => {});

      HUDTextContext.add("start", () => {
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
            masterTimeline.play();
          },
          text: {
            value: "I AM RONG HAO",
          },
        });

        wordsSet.forEach((word) => {
          masterTimeline.to(".text", {
            duration: 1,
            ease: "power2.inOut",
            repeat: 1,
            repeatDelay: 1.5,
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

  return (
    <>
      <PlainBackground onDone={onDone}>
        <BlackholeOriginal
          q:slot="icon"
          class="aspect-square rotate-[20deg] iconElement"
        />
      </PlainBackground>

      <div class="relative w-full h-full min-h-screen flex">
        <PcHud onDone={onDone} />
        <div class=" w-full h-full z-50 relative flex items-center justify-center grow min-h-screen">
          <div class="HUDTextContainer flex flex-col justify-around items-center w-[800px] h-[300px] p-4 backdrop-blur-md rounded-md border-white border-[3px] border-opacity-10 invisible">
            <h1 class="text-5xl font-bold relative font-digi text-center w-full leading-normal">
              <div class="hi neonText"></div>
              <span class="text neonText"></span>
              <span class="cursor neonText">_</span>
            </h1>
          </div>
        </div>
        <div class="fixed bottom-14 w-full h-14 z-30 flex items-end">
          <div class="relative overflow-hidden flex items-end w-full mx-24 border border-white font-digi text-lg tracking-wide">
            <div class="marqueeText flex-[0_0_33%] py-2 flex">
              <span class="inline-flex text-gray-500">
                Specialize in DESIGN
              </span>
              &nbsp;
              <span class="inline-flex">Modern Dynamic Website</span>
            </div>
            <div class="marqueeText flex-[0_0_33%] py-2 flex">
              CREATIVE STUDIO
            </div>
            <div class="marqueeText flex-[0_0_33%] py-2 flex">
              For your business with taste
            </div>
            <div class="marqueeText flex-[0_0_33%] py-2 flex">
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
          >
            <source src="/video/galaxy_scene.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
