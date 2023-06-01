import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import ScreenOne from "~/components/screen/screenOne";

export default component$(() => {
  // // Scroll down

  return (
    <>
      <ScreenOne />
      <section class="webBody hidden w-full h-full min-h-screen"></section>
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
