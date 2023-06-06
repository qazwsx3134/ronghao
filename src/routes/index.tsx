import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import ScreenOne from "~/components/screen/screenOne";

export default component$(() => {
  // // Scroll down

  return (
    <>
      <ScreenOne />
      <section class="webBody hidden w-full h-[400vh] min-h-screen relative">
        <div class="mt-20 w-[33vw] h-[500px] sticky top-1/2 -translate-y-1/2 bg-slate-700">
          <hr class="h-10 w-2 bg-red-500" />
        </div>
      </section>
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
