import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PlainBackground from "~/components/loader/background/plainBackground";
import videojs from "video.js";

export default component$(() => {
  const onDone = useSignal(false);
  useVisibleTask$(async () => {
    // const player = videojs("my-player", {
    //   controls: true,
    //   autoplay: false,
    //   preload: "auto",
    // });
    setTimeout(() => {
      onDone.value = true;
    }, 2000);
    // player.on("ended", () => {
    //   console.log("ended");
    // });
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
        <video>
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
