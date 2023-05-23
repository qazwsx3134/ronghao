import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PlainBackground from "~/components/loader/background/plainBackground";


export default component$(() => {
  const onDone = useSignal(false);
  useVisibleTask$(async () => {
    setTimeout(() => {
      onDone.value = true;
    }, 2000);
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

      <button class="btn">Button</button>
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
