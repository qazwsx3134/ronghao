import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import Lottie from "lottie-web";
import ThreeDCarousel from "~/components/carousel/threeDCarousel";

import PcTextHud from "~/components/hud/pcTextHud";
import { CircularLine } from "~/components/icon/circularLine";
import { ExcelIcon } from "~/components/icon/ExcelIcon";
import { JSONIcon } from "~/components/icon/JSONIcon";
import { ServerIcon } from "~/components/icon/ServerIcon";

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
        markers: true,
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
        markers: true,
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
        markers: true,
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
        markers: true,
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
        markers: true,
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
        markers: true,
      },
    });

    gsap.fromTo(
      ".lottie-data-scraping",
      {
        visibility: "hidden",
        opacity: 0,
        scale: 0.5,
      },
      {
        visibility: "visible",
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".crawlerSection",
          start: "-100 top",
          end: "bottom top",
          toggleActions: "play none none none",
          markers: true,
        },
        onComplete: () => {
          scrape.play();
          gsap.fromTo(
            ".circular-line",
            {
              visibility: "hidden",
              opacity: 0,
            },
            {
              visibility: "visible",
              opacity: 1,
              duration: 0.3,
            }
          );
          gsap.to(".circular-line", {
            strokeDashoffset: -480,
            repeat: -1,
            ease: "none",
            duration: 6,
          });

          gsap.utils.toArray(".translate-icon").forEach((e, index) => {
            const element = e as HTMLElement;
            gsap.to(element, {
              visibility: "visible",
              duration: 5,
              repeat: -1,
              delay: index * 1,
              ease: "none",
              motionPath: {
                path: ".anime-line",
                align: ".anime-line",
                alignOrigin: [0.5, 0.5],
              },
            });
          });

          gsap.fromTo(
            ".server-icon",
            {
              visibility: "hidden",
              opacity: 0,
            },
            {
              visibility: "visible",
              opacity: 1,
              duration: 0.3,
            }
          );

          gsap.to(".server-icon", {
            scaleX: 0.95,
            scaleY: 1.05,
            repeat: -1,
            delay: 5,
            ease: "elastic.out(1, 0.3)",
            yoyo: true,
            duration: 0.5,
          });

          gsap.fromTo(
            ".server-dot",
            {
              opacity: 0,
            },
            {
              duration: 1,
              opacity: 1,
              repeat: -1,
              yoyo: true,
              stagger: 0.5,
            }
          );
        },
      }
    );

    const scrape = Lottie.loadAnimation({
      container: document.querySelector(".lottie-data-scraping")!,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "lottie/lottie-data-scanning.json",
    });
  });

  return (
    <>
      {/* <ScreenOne /> */}
      {/* Screen one回來的時候記得把section的hidden加回 */}
      <section class="webBody w-full h-[900vh] min-h-screen relative">
        {/* Left side */}
        <div class="w-[33vw] h-[100vh] sticky top-0  flex flex-col justify-center items-start z-20 pointer-events-none">
          <PcTextHud />
        </div>
        {/* Right side */}
        <div class="w-full h-full absolute top-0 right-0 flex flex-col">
          <div class="webSection w-full h-[1200px]">
            <ThreeDCarousel />
          </div>

          <div class="crawlerSection w-full h-[1200px] flex flex-col relative bg-gray-950">
            <JSONIcon class="text-6xl translate-icon invisible text-gray-400 relative z-[9]" />
            <ExcelIcon class="text-6xl translate-icon invisible text-emerald-500 relative z-[9]" />
            <CircularLine class="absolute w-[300px] h-[300px] right-[450px] top-[350px] invisible circular-line" />
            <div class="w-[500px] h-[500px] lottie lottie-data-scraping invisible self-end relative z-10"></div>
            <ServerIcon class="w-[450px] h-[300px] server-icon self-center invisible relative z-10 -translate-x-4" />
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
