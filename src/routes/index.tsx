import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PlainBackground from "~/components/loader/background/plainBackground";
import videojs from "video.js";
import BlackholeOriginal from "~/components/loader/LoaderIcon/blackhole/blackholeOriginal";
import { gsap } from "gsap";

export default component$(() => {
  const onDone = useSignal(false);
  useVisibleTask$(async () => {
    const player = videojs("my-player", {
      controls: false,
      autoplay: true,
      loop: true,
      muted: true,
      playbackRates: [0.5, 1, 1.5, 2],
    });
    setTimeout(() => {
      onDone.value = true;
    }, 2000);

    player.ready(function () {
      player.playbackRate(2);
      setTimeout(() => {
        player.playbackRate(1);
      }, 3000);
    });

    gsap.from("#my-player", {
      filter: "blur(10px)",
      scale: 0.2,
      duration: 1,
    });

    gsap.to("#my-player", {
      y: 100,
      duration: 1,
      repeat: -1,
      yoyo: true,
      zIndex: 12,
    });
  });

  return (
    <>
      {/* <PlainBackground onDone={onDone}>
        <BlackholeOriginal
          q:slot="icon"
          class="aspect-square rotate-[20deg] iconElement"
        />
      </PlainBackground> */}
      <div class="relative">
        <video
          id="my-player"
          class="video-js w-full z-40 rounded-lg"
          preload="auto"
          style={{
            height: "calc(100vh - 4rem)",
          }}
        >
          <source src="/video/galaxy_scene.webm" type="video/webm" />
        </video>
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
