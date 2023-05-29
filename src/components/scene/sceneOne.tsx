import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PlainBackground from "~/components/loader/background/plainBackground";
import videojs from "video.js";

export default component$(() => {
  const onDone = useSignal(false);
  useVisibleTask$(async () => {
    const player = videojs("my-player", {
      autoplay: true,
      preload: "auto",
    });
    setTimeout(() => {
      onDone.value = true;
    }, 2000);
    player.ready(function () {
      player.play();
      console.log("Player is ready");
    });
  });

  return (
    <>
      {/* <PlainBackground onDone={onDone}>
        <Blackhole
          q:slot="icon"
          class="aspect-square rotate-[20deg] iconElement"
        />
      </PlainBackground> */}
      <div>Hello</div>
      <div>
        <video
          id="my-player"
          class="video-js vjs-fluid"
          preload="auto"
          data-setup="{}"
        >
          <source src="/video/galaxy_scene.webm" type="video/webm" />
        </video>
      </div>
    </>
  );
});
