import { component$ } from "@builder.io/qwik";
import { HUDLeft } from "~/components/hud/pc/left";
import { HUDMiddleLeft } from "~/components/hud/pc/middleLeft";
import { HUDMiddleRight } from "~/components/hud/pc/middleRight";
import { HUDRight } from "~/components/hud/pc/right";

export default component$(() => {
  return (
    <div class="fixed w-full h-full min-h-screen pointer-events-none p-4 z-20 hidden lg:flex opacity-60 ">
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
