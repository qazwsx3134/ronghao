import {
  useStore,
  component$,
  useVisibleTask$,
  type NoSerialize,
  noSerialize,
  $,
} from "@builder.io/qwik";

import { gsap } from "gsap";

const carouselData = [
  {
    pcMockup: "/images/pc_mockup_1.webp",
    mobileMockup: "/images/mobile_mockup_1.webp",
    colorMockup: "/images/color_mockup_1.webp",
    title: "Vibrant car website design",
    description: "Using vibrant color and simple design to catch visitors eyes",
    tags: ["Qwik", "Midjourney", "Figma"],
  },
  {
    pcMockup: "/images/pc_mockup_1.webp",
    mobileMockup: "/images/mobile_mockup_1.webp",
    colorMockup: "/images/color_mockup_1.webp",
    title: "Vibrant car website design",
    description: "Using vibrant color and simple design to catch visitors eyes",
    tags: ["Qwik", "Midjourney", "Figma"],
  },
  {
    pcMockup: "/images/pc_mockup_1.webp",
    mobileMockup: "/images/mobile_mockup_1.webp",
    colorMockup: "/images/color_mockup_1.webp",
    title: "Vibrant car website design",
    description: "Using vibrant color and simple design to catch visitors eyes",
    tags: ["Qwik", "Midjourney", "Figma"],
  },
  {
    pcMockup: "/images/pc_mockup_1.webp",
    mobileMockup: "/images/mobile_mockup_1.webp",
    colorMockup: "/images/color_mockup_1.webp",
    title: "Vibrant car website design",
    description: "Using vibrant color and simple design to catch visitors eyes",
    tags: ["Qwik", "Midjourney", "Figma"],
  },
  {
    pcMockup: "/images/pc_mockup_1.webp",
    mobileMockup: "/images/mobile_mockup_1.webp",
    colorMockup: "/images/color_mockup_1.webp",
    title: "Vibrant car website design",
    description: "Using vibrant color and simple design to catch visitors eyes",
    tags: ["Qwik", "Midjourney", "Figma"],
  },
];

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
    const carouselRadius = 550;
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
    });

    GsapCarouselItems.forEach(function (e) {
      // descrimate unknown type
      const element = e as HTMLElement;
      carouselTimeline.to(
        element,
        {
          duration: 30,
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
      <div class="GsapCarouselWrapper mx-auto flex justify-center relative antialiased my-[200px] h-[600px] w-full rotate-[15deg]">
        {carouselData.map((item) => (
          <>
            <div
              class="absolute GsapCarouselItem pl-6 pr-16 inline-block hover:cursor-pointer rounded-lg bg-transparent hover:shadow-glow -rotate-[10deg]"
              onMouseEnter$={stopCarousel}
              onMouseLeave$={playCarousel}
            >
              <div class="card rotate-[12deg]">
                <figure class="flex overflow-visible relative z-[11]">
                  <img
                    class="w-[400px] -rotate-12 translate-y-4"
                    width={500}
                    height={488}
                    src={item.pcMockup}
                    alt="car!"
                  />
                  <div>
                    <img
                      class="w-[100px] -rotate-12 translate-x-3 "
                      width={180}
                      height={320}
                      src={item.colorMockup}
                      alt="car!"
                    />
                    <img
                      class="w-[100px] translate-x-3 translate-y-5"
                      width={400}
                      height={800}
                      src={item.mobileMockup}
                      alt="car!"
                    />
                  </div>
                </figure>
                <div class="card-body rounded-xl relative z-10 -rotate-12">
                  <h2 class="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <p class="mt-2 flex gap-1">
                    {item.tags.map((tag) => (
                      <kbd class="kbd w-auto">{tag}</kbd>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
});
