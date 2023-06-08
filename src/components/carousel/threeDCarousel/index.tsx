import {
  useStore,
  component$,
  useVisibleTask$,
  type NoSerialize,
  noSerialize,
  $,
} from "@builder.io/qwik";

import { gsap } from "gsap";

export default component$(() => {
  const carouselTimelineStore = useStore<{
    carouselTimeline: NoSerialize<gsap.core.Timeline>;
  }>({
    carouselTimeline: undefined,
  });

  const stopCarousel = $(() => {
    carouselTimelineStore.carouselTimeline?.timeScale(0.1);
  });

  const playCarousel = $(() => {
    carouselTimelineStore.carouselTimeline?.timeScale(1);
  });

  useVisibleTask$(() => {
    // 3. 3D Carousel
    const GsapCarouselItems = gsap.utils.toArray(".GsapCarouselItem");
    const carouselRadius = 500;
    const carouselTimeline = gsap.timeline();

    carouselTimeline.set(".GsapCarouselWrapper", {
      perspective: 1100,
      transformStyle: "preserve-3d",
    });

    // Set initial rotation
    GsapCarouselItems.forEach(function (e, index) {
      // descrimate unknown type
      const element = e as HTMLElement;
      carouselTimeline.set(element, {
        rotationY: (index * 360) / GsapCarouselItems.length,
        transformOrigin: "50% 50% " + -carouselRadius,
      });

      carouselTimeline.to(
        element,
        {
          duration: 15,
          repeat: -1,
          rotationY: "-=360",
          ease: "none",
        },
        "0"
      );
    });

    carouselTimelineStore.carouselTimeline = noSerialize(carouselTimeline);
  });

  return (
    <>
      {/* height can control the perspective Y */}
      <div class="GsapCarouselWrapper mx-auto flex justify-center relative antialiased my-[200px] h-[600px] w-full">
        <div
          class="absolute GsapCarouselItem hover:cursor-pointer bg-gradient-to-br  from-green-500  rounded-lg"
          onMouseEnter$={stopCarousel}
          onMouseLeave$={playCarousel}
        >
          <div class="card w-96 glass">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1686040068882-1ecdf4e25549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="car!"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
