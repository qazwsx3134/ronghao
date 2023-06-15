import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
// import Lottie from "lottie-web";
import ThreeDCarousel from "~/components/carousel/threeDCarousel";

import PcTextHud from "~/components/hud/pcTextHud";
import ScanOverlay from "~/components/overlay/scanOverlay";

// import { CircularLine } from "~/components/icon/circularLine";
// import { ExcelIcon } from "~/components/icon/ExcelIcon";
// import { JSONIcon } from "~/components/icon/JSONIcon";
// import { ServerIcon } from "~/components/icon/ServerIcon";

import ScreenOne from "~/components/screen/screenOne";

export default component$(() => {
  // const animateRef = useSignal<HTMLElement>();

  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

    // Progress bar
    gsap.to(".hudMB", {
      duration: 0.5,
      text: {
        value: "■■■■■■■■■■■■■■■■■■■■■■■■■",
        delimiter: "",
        padSpace: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".webBody",
        start: "top top",
        end: "90% top",
        scrub: true,
      },
    });

    // 1. Web design
    gsap.to(".hudT", {
      duration: 0.5,
      text: {
        value: "Web design // Qwik // React // Modern Web framework",
        padSpace: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".webSection",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none restart reverse",
      },
    });
    gsap.to(".hudM", {
      duration: 0.5,
      text: {
        value: "Web design according to your needs",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".webSection",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none restart reverse",
      },
    });
    gsap.to(".hudB", {
      duration: 0.5,
      text: {
        value: "Make your business one of a kind",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".webSection",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none restart reverse",
      },
    });

    // 2. Crawler
    gsap.to(".hudT", {
      duration: 0.5,
      text: {
        value: "Web Scraping // Python // JS // Crawler // Automation",
        padSpace: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".crawlerSection",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });
    gsap.to(".hudM", {
      duration: 0.5,
      text: {
        value: "Automate extraction of data from websites",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".crawlerSection",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });
    gsap.to(".hudB", {
      duration: 0.5,
      text: {
        value: "Data is the new oil",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".crawlerSection",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });

    // gsap.fromTo(
    //   ".lottie-data-scraping",
    //   {
    //     visibility: "hidden",
    //     opacity: 0,
    //     scale: 0.5,
    //   },
    //   {
    //     visibility: "visible",
    //     duration: 0.3,
    //     scale: 1,
    //     opacity: 1,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".crawlerSection",
    //       start: "-100 top",
    //       end: "bottom top",
    //       toggleActions: "play none none none",
    //       markers: true,
    //     },
    //     onComplete: () => {
    //       scrape.play();
    //       gsap.fromTo(
    //         ".circular-line",
    //         {
    //           visibility: "hidden",
    //           opacity: 0,
    //         },
    //         {
    //           visibility: "visible",
    //           opacity: 1,
    //           duration: 0.3,
    //         }
    //       );
    //       gsap.to(".circular-line", {
    //         strokeDashoffset: -480,
    //         repeat: -1,
    //         ease: "none",
    //         duration: 6,
    //       });

    //       gsap.utils.toArray(".translate-icon").forEach((e, index) => {
    //         const element = e as HTMLElement;
    //         gsap.to(element, {
    //           visibility: "visible",
    //           duration: 5,
    //           repeat: -1,
    //           delay: index * 1,
    //           ease: "none",
    //           motionPath: {
    //             path: ".anime-line",
    //             align: ".anime-line",
    //             alignOrigin: [0.5, 0.5],
    //           },
    //         });
    //       });

    //       gsap.fromTo(
    //         ".server-icon",
    //         {
    //           visibility: "hidden",
    //           opacity: 0,
    //         },
    //         {
    //           visibility: "visible",
    //           opacity: 1,
    //           duration: 0.3,
    //         }
    //       );

    //       gsap.to(".server-icon", {
    //         scaleX: 0.95,
    //         scaleY: 1.05,
    //         repeat: -1,
    //         delay: 5,
    //         ease: "elastic.out(1, 0.3)",
    //         yoyo: true,
    //         duration: 0.5,
    //       });

    //       gsap.fromTo(
    //         ".server-dot",
    //         {
    //           opacity: 0,
    //         },
    //         {
    //           duration: 1,
    //           opacity: 1,
    //           repeat: -1,
    //           yoyo: true,
    //           stagger: 0.5,
    //         }
    //       );
    //     },
    //   }
    // );

    // const scrape = Lottie.loadAnimation({
    //   container: document.querySelector(".lottie-data-scraping")!,
    //   renderer: "svg",
    //   loop: true,
    //   autoplay: false,
    //   path: "lottie/lottie-data-scanning.json",
    // });

    // Bounce in device
    gsap.utils.toArray(".parallax-device").forEach((e, index) => {
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

    gsap.utils.toArray(".scanAnim").forEach((e) => {
      const element = e as HTMLElement;

      gsap.fromTo(
        element,
        {
          top: "0%",
        },
        {
          top: "100%",
          ease: "ease",
          yoyo: true,
          repeat: 2,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".crawlerSection",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "restart none restart none",
            markers: true,
          },
        }
      );
    });
  });

  return (
    <>
      <ScreenOne />
      {/* Screen one回來的時候記得把section的hidden加回 */}
      <section class="webBody hidden w-full h-[900vh] min-h-screen relative">
        {/* Left side */}
        <div class="w-[33vw] h-[100vh] sticky top-0  flex flex-col justify-center items-start z-20 pointer-events-none">
          <PcTextHud />
        </div>
        {/* Right side */}
        <div class="w-full h-full absolute top-0 right-0 flex flex-col">
          <div class="webSection w-full h-[1200px]">
            <ThreeDCarousel />
          </div>

          {/* <div class="crawlerSection w-full h-[1200px] flex flex-col relative bg-gray-950">
            <JSONIcon class="text-6xl translate-icon invisible text-gray-400 relative z-[9]" />
            <ExcelIcon class="text-6xl translate-icon invisible text-emerald-500 relative z-[9]" />
            <CircularLine class="absolute w-[300px] h-[300px] right-[450px] top-[350px] invisible circular-line" />
            <div class="w-[500px] h-[500px] lottie lottie-data-scraping invisible self-end relative z-10"></div>
            <ServerIcon class="w-[450px] h-[300px] server-icon self-center invisible relative z-10 -translate-x-4" />
          </div> */}
          <div class="crawlerSection w-full h-[1200px] flex flex-col relative bg-gray-950">
            <div class="flex relative">
              {/* Phone 1 */}
              <div class="absolute left-[45vw] p-4 parallax-device">
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
              <img
                class="object-scale-down h-[400px] w-[650px] absolute left-[10vw] top-[100px] rotate-6 parallax-device"
                src="/images/s2mock2.webp"
                width={1023}
                height={632}
              />

              {/* Phone 2 */}
              <img
                class="object-scale-down h-[350px] w-[200px] absolute left-[20vw] top-[400px] -rotate-12 parallax-device"
                src="/images/s2mock1.webp"
                width={382}
                height={1023}
              />

              {/* Phone 3 */}
              <img
                class="object-scale-down h-[500px] w-[240px] absolute right-[20vw] top-[600px] rotate-12 parallax-device"
                src="/images/s2mock4.webp"
                width={365}
                height={894}
              />
            </div>
          </div>
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
