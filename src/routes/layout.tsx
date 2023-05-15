import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";

import styles from "./styles.css?inline";
import PlainBackground from "~/components/loader/background/plainBackground";
import Blackhole from "~/components/loader/LoaderIcon/blackhole";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <main class="flex flex-col h-full min-h-screen">
        <PlainBackground>
          <Blackhole q:slot="icon" />
        </PlainBackground>
        <Slot />
      </main>
    </>
  );
});
