import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div
      id="loaderLayer"
      class="loader h-screen w-full absolute z-50 bg-mocha-100"
    >
      <div
        id="icon"
        class=" top-1/2 left-1/2  z-10 absolute -translate-x-1/2 -translate-y-1/2"
      >
        <Slot name="icon" />
      </div>
    </div>
  );
});
