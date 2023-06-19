import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
// import Lottie from "lottie-web";
import ThreeDCarousel from "~/components/carousel/threeDCarousel";

import PcTextHud from "~/components/hud/pcTextHud";
import CrawlerSection from "~/components/screen/crawlerSection";

import ScreenOne from "~/components/screen/screenOne";

export default component$(() => {

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

    // const scrape = Lottie.loadAnimation({
    //   container: document.querySelector(".lottie-data-scraping")!,
    //   renderer: "svg",
    //   loop: true,
    //   autoplay: false,
    //   path: "lottie/lottie-data-scanning.json",
    // });
  });

  return (
    <>
      <ScreenOne />
      {/* Screen one回來的時候記得把section的hidden加回 */}
      <section class="webBody w-full hidden h-[900vh] min-h-screen relative">
        {/* Left side */}
        <div class="w-[33vw] h-[100vh] sticky top-0  flex flex-col justify-center items-start z-20 pointer-events-none">
          <PcTextHud />
        </div>
        {/* Right side */}
        <div class="w-full h-full absolute top-0 right-0 flex flex-col">
          <div class="webSection w-full h-[1200px] flex flex-col">
            <h2 class="">
              Showcase
            </h2>
            <ThreeDCarousel />
          </div>

          <div class="crawlerSection w-full h-[1600px] flex flex-col relative">
            <CrawlerSection />
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
