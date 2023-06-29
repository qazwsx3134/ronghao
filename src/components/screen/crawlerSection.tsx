import { component$, useVisibleTask$ } from "@builder.io/qwik";
import ScanOverlay from "~/components/overlay/scanOverlay";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

export default component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Bounce in device
    const device = gsap.utils.toArray(".parallax-device");

    device.forEach((e, index) => {
      const element = e as HTMLElement;

      gsap.fromTo(
        element,
        {
          y: 100,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          y: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "elastic.out(1, 0.5)",
          delay: 0.1 * index,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".crawlerSection",
            start: "top 70%",
            end: "bottom top",
          },
          onComplete: () => {
            const eltl = gsap.timeline({
              defaults: {
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: index * 0.1,
              },
            });

            eltl.to(element, {
              y: `${index % 2 === 0 ? "-" : "+"}=${(index + 1) * 10}`,
              x: `${index % 2 === 0 ? "+" : "-"}=${(index + 1) * 15}`,
              scale: 1 - (5 - index) * 0.04,
              rotation: "-=5",
              duration: 3,
            });
          },
        }
      );
    });

    // Scan animation
    gsap.utils.toArray(".outlineAnim").forEach((e) => {
      const element = e as HTMLElement;

      gsap.fromTo(
        element,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "ease",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".crawlerSection",
            start: "top 70%",
            end: "30% top",
            scrub: true,
          },
        }
      );
    });

    gsap.utils.toArray(".scanAnim").forEach((e, index) => {
      const element = e as HTMLElement;

      gsap.fromTo(
        element,
        {
          top: "-20%",
        },
        {
          top: "100%",
          ease: "ease",
          yoyo: true,
          delay: index * 0.2,
          repeat: 2,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".crawlerSection",
            start: "30% 50%",
            end: "bottom 30%",
            toggleActions: "restart none restart none",
          },
          onComplete: () => {
            // antennaTL.play();
          },
        }
      );
    });

    const crawlerTextTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".mockup-code",
        start: "top 70%",
        end: "bottom top",
        toggleActions: "restart none none none",
      },
    });

    crawlerTextTL.to(".code1", {
      duration: 0.5,
      text: {
        value: "Web crawler initiated",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.to(".code1-working", {
      duration: 0.5,
      text: {
        value: "...",
        padSpace: true,
      },
      repeat: 1,
      ease: "none",
    });

    crawlerTextTL.set(
      ".code2-wrapper",
      {
        display: "flex",
      },
      "+=0.3"
    );

    crawlerTextTL.to(".code2", {
      duration: 0.5,
      text: {
        value: "...",
        padSpace: true,
      },
      repeat: 1,
      ease: "none",
    });

    crawlerTextTL.to(
      ".code2",
      {
        duration: 0.5,
        text: {
          value: "Acquired the useful information...",
          padSpace: true,
        },
        ease: "none",
      },
      ">+0.3"
    );

    crawlerTextTL.set(
      ".code3-wrapper",
      {
        display: "flex",
      },
      "+=0.3"
    );

    crawlerTextTL.to(".code3", {
      duration: 0.5,
      text: {
        value: "Clean data...",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.to(".code3-progress", {
      duration: 0.5,
      text: {
        value: "■■■■■■■■■■■■■■■■■■■■■■■■",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.set(".code3-wrapper", {
      className: "text-black bg-white",
    });

    crawlerTextTL.set(
      ".code4-wrapper",
      {
        display: "flex",
      },
      "+=0.3"
    );

    crawlerTextTL.to(".code4", {
      duration: 0.5,
      text: {
        value: "Modeling...",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.to(".code4-progress", {
      duration: 0.5,
      text: {
        value: "■■■■■■■■■■■■■■■■■■■■■■■■",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.set(
      ".code4-wrapper",
      {
        className: "text-black bg-white",
      },
      "+=0.3"
    );

    crawlerTextTL.set(".code5-wrapper", {
      display: "flex",
    });

    crawlerTextTL.to(".code5", {
      duration: 0.5,
      text: {
        value: "Storing into database...",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.to(".code5-progress", {
      duration: 0.5,
      text: {
        value: "■■■■■■■■■■■■■■■■■■■■■■■■",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.set(
      ".code5-wrapper",
      {
        className: "text-black bg-white",
      },
      "+=0.3"
    );

    crawlerTextTL.set(".code6-wrapper", {
      display: "flex",
    });

    crawlerTextTL.to(".code6", {
      duration: 0.5,
      text: {
        value: "Waiting for further command...",
        padSpace: true,
      },
      ease: "none",
    });

    crawlerTextTL.set(
      ".code7-wrapper",
      {
        display: "flex",
      },
      "+=0.3"
    );

    crawlerTextTL.fromTo(
      ".code7-cursor",
      {
        opacity: 0,
      },
      {
        duration: 0.8,
        yoyo: true,
        opacity: 1,
        repeat: -1,
        ease: "power1.inOut",
      }
    );

    //   // Antenna animation
    //   gsap.to(".antenna-line", {
    //     strokeDashoffset: -480,
    //     duration: 5,
    //     ease: "none",
    //     repeat: -1,
    //   });

    //   const antennaTL = gsap.timeline({
    //     ease: "power1.inOut",
    //     repeat: 1,
    //     scrollTrigger: {
    //       trigger: ".crawlerSection",
    //       start: "30% 50%",
    //       end: "bottom 30%",
    //       toggleActions: "restart none restart none",
    //     },
    //     onComplete: () => {
    //       gsap.to([".jsonIcon", ".excelIcon"], {
    //         opacity: 1,
    //         duration: 0.2,
    //       });

    //       // Along the path
    //       gsap.to(".jsonIcon", {
    //         duration: 2,
    //         ease: "ease",
    //         motionPath: {
    //           path: ".antenna-line",
    //           align: ".antenna-line",
    //           alignOrigin: [0.5, 0.5],
    //         },
    //       });
    //       gsap.to(".excelIcon", {
    //         duration: 2.5,
    //         delay: 0.5,
    //         ease: "ease",
    //         motionPath: {
    //           path: ".antenna-line",
    //           align: ".antenna-line",
    //           alignOrigin: [0.5, 0.5],
    //         },
    //       });
    //     },
    //   });
    //   antennaTL.to(".antenna-circle", {
    //     scale: 1.2,
    //     duration: 0.1,
    //   });
    //   antennaTL.to(".antenna-circle", {
    //     scale: 1,
    //     duration: 0.1,
    //   });
    //   antennaTL.to(".antenna-outside-2", {
    //     opacity: 0,
    //     duration: 0.2,
    //   });
    //   antennaTL.to(".antenna-outside-2", {
    //     opacity: 1,
    //     duration: 0.2,
    //   });
    //   antennaTL.to(
    //     ".antenna-outside-1",
    //     {
    //       opacity: 0,
    //       duration: 0.3,
    //     },
    //     "-=0.1"
    //   );
    //   antennaTL.to(".antenna-outside-1", {
    //     opacity: 1,
    //     duration: 0.3,
    //   });

    //   antennaTL.pause();
  });
  return (
    <div class="flex flex-col grow items-center justify-end relative">
      <div class="flex flex-col items-center justify-end relative">
        {/* <Antenna class="h-[500px] z-10" />
        <ServerIcon class="-translate-y-10 z-[11]"/>

        <JSONIcon class="opacity-0 text-6xl jsonIcon" />
        <ExcelIcon class="opacity-0 text-6xl excelIcon" /> */}
        <div class="mockup-code text-xl flex flex-col gap-1">
          <pre data-prefix="$">
            <code class="code1"></code>
            <code class="code1-working"></code>
          </pre>
          <pre data-prefix=">" class="hidden code2-wrapper">
            <code class="code2"></code>
          </pre>
          <pre
            data-prefix=">"
            class="bg-info text-warning-content hidden code3-wrapper"
          >
            <code class="code3">Clean data</code>
            {"["}
            <code class="code3-progress"></code>
            {"]"}
          </pre>
          <pre
            data-prefix=">"
            class="bg-info text-warning-content hidden code4-wrapper"
          >
            <code class="code4">Modeling</code>
            {"["}
            <code class="code4-progress"></code>
            {"]"}
          </pre>
          <pre
            data-prefix=">"
            class="bg-info text-warning-content hidden code5-wrapper"
          >
            <code class="code5">Storing into database</code>
            {"["}
            <code class="code5-progress"></code>
            {"]"}
          </pre>
          <pre data-prefix=">" class="text-success hidden code6-wrapper">
            <code class="code6">Waiting for further command...</code>
          </pre>
          <pre data-prefix="$" class="text-success hidden code7-wrapper">
            <code class="text-success code7-cursor">|</code>
          </pre>
        </div>
      </div>

      {/* Phone 1 */}
      <div class="absolute left-[45vw] top-0 p-4 parallax-device">
        <ScanOverlay
          outlineClass={["w-10", "h-10", "outlineAnim"]}
          scanClass={["scanAnim"]}
        />

        <img
          class="object-scale-down h-[200px] w-[140px] "
          src="/images/s2mock5.webp"
          width={505}
          height={1023}
        />
      </div>

      {/* Laptop1 */}
      <div class="absolute right-[15vw] top-[50px] p-4 parallax-device">
        <ScanOverlay
          outlineClass={["w-10", "h-10", "outlineAnim"]}
          scanClass={["w-full", "scanAnim"]}
        />
        <img
          class="object-scale-down h-[350px] w-[400px]"
          src="/images/s2mock3.webp"
          width={513}
          height={498}
        />
      </div>

      {/* Laptop2 */}
      <div class="absolute left-[10vw] top-[100px] rotate-6 parallax-device">
        <ScanOverlay
          outlineClass={["w-10", "h-10", "outlineAnim"]}
          scanClass={["w-full", "scanAnim"]}
        />
        <img
          class="object-scale-down h-[400px] w-[650px]"
          src="/images/s2mock2.webp"
          width={1023}
          height={632}
        />
      </div>

      {/* Phone 2 */}
      <div class="absolute left-[20vw] top-[400px] -rotate-12 parallax-device">
        <ScanOverlay
          outlineClass={["w-10", "h-10", "outlineAnim", "mx-4"]}
          scanClass={["w-[600px]", "scanAnim"]}
        />

        <img
          class="object-scale-down h-[350px] w-[200px] "
          src="/images/s2mock1.webp"
          width={382}
          height={1023}
        />
      </div>

      {/* Phone 3 */}
      <div class=" absolute right-[20vw] top-[600px] rotate-12 parallax-device">
        <ScanOverlay
          outlineClass={["w-10", "h-10", "outlineAnim", "mx-4"]}
          scanClass={["w-[600px]", "scanAnim"]}
        />
        <img
          class="object-scale-down h-[500px] w-[240px]"
          src="/images/s2mock4.webp"
          width={365}
          height={894}
        />
      </div>
    </div>
  );
});
