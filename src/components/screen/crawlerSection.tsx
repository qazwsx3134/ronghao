import { component$, useVisibleTask$ } from "@builder.io/qwik";
import ScanOverlay from "~/components/overlay/scanOverlay";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Antenna } from "../icon/antenna";
import { JSONIcon } from "../icon/JSONIcon";
import { ExcelIcon } from "../icon/ExcelIcon";
import { ServerIcon } from "../icon/ServerIcon";

export default component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);

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
            antennaTL.play();
          }
        }
      );
    });
    // Antenna animation
    gsap.to(".antenna-line", {
      strokeDashoffset: -480,
      duration: 5,
      ease: "none",
      repeat: -1,
    });

    const antennaTL = gsap.timeline({
      ease: "power1.inOut",
      repeat: 1,
      scrollTrigger: {
        trigger: ".crawlerSection",
        start: "30% 50%",
        end: "bottom 30%",
        toggleActions: "restart none restart none",
      },
      onComplete: () => {
        gsap.to([".jsonIcon", ".excelIcon"], {
          opacity: 1,
          duration: 0.2,
        });

        // Along the path
        gsap.to(".jsonIcon", {
          duration: 2,
          ease: "ease",
          motionPath: {
            path: ".antenna-line",
            align: ".antenna-line",
            alignOrigin: [0.5, 0.5],
          },
        });
        gsap.to(".excelIcon", {
          duration: 2.5,
          delay: 0.5,
          ease: "ease",
          motionPath: {
            path: ".antenna-line",
            align: ".antenna-line",
            alignOrigin: [0.5, 0.5],
          },
        });
      },
    });
    antennaTL.to(".antenna-circle", {
      scale: 1.2,
      duration: 0.1,
    });
    antennaTL.to(".antenna-circle", {
      scale: 1,
      duration: 0.1,
    });
    antennaTL.to(".antenna-outside-2", {
      opacity: 0,
      duration: 0.2,
    });
    antennaTL.to(".antenna-outside-2", {
      opacity: 1,
      duration: 0.2,
    });
    antennaTL.to(
      ".antenna-outside-1",
      {
        opacity: 0,
        duration: 0.3,
      },
      "-=0.1"
    );
    antennaTL.to(".antenna-outside-1", {
      opacity: 1,
      duration: 0.3,
    });

    antennaTL.pause();
  });
  return (
    <div class="flex flex-col grow items-center justify-end relative">
      <div class="flex flex-col items-center justify-end relative">
        <Antenna class="h-[500px] z-10" />
        <ServerIcon class="-translate-y-10 z-[11]"/>

        <JSONIcon class="opacity-0 text-6xl jsonIcon" />
        <ExcelIcon class="opacity-0 text-6xl excelIcon" />
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
