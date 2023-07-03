import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import SplitType from "split-type";
// import Lottie from "lottie-web";

import { routeLoader$ } from "@builder.io/qwik-city";
import { z } from "@builder.io/qwik-city";

import { formAction$, zodForm$ } from "@modular-forms/qwik";
import type { InitialValues } from "@modular-forms/qwik";

import ThreeDCarousel from "~/components/carousel/threeDCarousel";

import PcTextHud from "~/components/hud/pcTextHud";
import ContactSection from "~/components/screen/contactSection";
import CrawlerSection from "~/components/screen/crawlerSection";
import RobotSection from "~/components/screen/robotSection";

import ScreenOne from "~/components/screen/screenOne";
import { objectToFormData } from "~/utils/form";

export const useContactFormLoader = routeLoader$<InitialValues<ContactForm>>(
  () => ({
    name: null,
    email: "",
    phoneNumber: null,
    description: "",
    preferredContact: null,
  })
);

const contactSchema = z.object({
  name: z.string().nullable(),
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("The email address is badly formatted."),
  phoneNumber: z.string().nullable(),
  description: z.string(),
  preferredContact: z.string().nullable(),
});

export type ContactForm = z.infer<typeof contactSchema>;

export const validateContactForm = zodForm$(contactSchema);

export const useFormAction = formAction$<ContactForm>(async (values) => {
  // Runs on server
  // sent to google sheet, and check if any error
  // if error, return error message
  console.log(values);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw89Luv5y2BN5MyhzA4eltdqtV8yq4aKgnct1Zb5YCEK_IzcFQOpT6DkmVhbminE7w0SA/exec";

  const fData = objectToFormData(values);
  console.log(fData);

  const res = await fetch(scriptURL, { method: "POST", body: fData })
    .then((response) => response.json())
    .catch((error) => error.message);

  if (res?.result === "success") {
    return {
      status: "success",
      message: "Thank you for contacting us. We will get back to you soon.",
      data: res,
    };
  }
  return {
    status: "error",
    message: "Something went wrong.",
    data: res,
  };
}, zodForm$(contactSchema));

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
    const showcaseText = new SplitType("#webTitle");

    gsap.from(showcaseText.chars, {
      webkitTextStrokeColor: "#6EE7B7",
      opacity: 0,
      yPercent: -90,
      rotateX: 90,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".webSection",
        start: "top 50%",
        end: "bottom top",
      },
    });

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
    const crawlerText = new SplitType("#crawlerTitle");

    gsap.from(crawlerText.chars, {
      webkitTextStrokeColor: "#6EE7B7",
      opacity: 0,
      yPercent: -90,
      rotateX: 90,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".crawlerSection",
        start: "top 50%",
        end: "bottom top",
      },
    });

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

    // 3. Robot
    const robotText = new SplitType("#robotTitle");

    gsap.from(robotText.chars, {
      webkitTextStrokeColor: "#6EE7B7",
      opacity: 0,
      yPercent: -90,
      rotateX: 90,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".robotSection",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".hudT", {
      duration: 0.5,
      text: {
        value: "Intelligence Robot // AI // Chatbot // Automation",
        padSpace: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".robotSection",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });
    gsap.to(".hudM", {
      duration: 0.5,
      text: {
        value: "24/7 Intelligent Robot to help your business",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".robotSection",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });
    gsap.to(".hudB", {
      duration: 0.5,
      text: {
        value: "Make your business one of a kind",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".robotSection",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });

    // 4. Contact
    const contactText = new SplitType("#contactTitle");

    gsap.from(contactText.chars, {
      webkitTextStrokeColor: "#6EE7B7",
      opacity: 0,
      yPercent: -90,
      rotateX: 90,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".hudT", {
      duration: 0.5,
      text: {
        value: "Contact us // qazwsx3134@gmail",
        padSpace: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });
    // 幫您打造一個與眾不同的網站，從平凡中脫穎而出．
    gsap.to(".hudM", {
      duration: 0.5,
      text: {
        value:
          "crafting a captivating website that attracts and engages customers like never before.",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });
    gsap.to(".hudB", {
      duration: 0.5,
      text: {
        value: "Make your business one of a kind",
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top 50%",
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
      <section class="webBody hidden w-full h-[5500px] min-h-screen relative">
        {/* Left side */}
        <div class="w-[33vw] h-[100vh] sticky top-0  flex flex-col justify-center items-start z-20 pointer-events-none">
          <PcTextHud />
        </div>
        {/* Right side */}
        <div class="w-full h-full absolute top-0 right-0 flex flex-col">
          <div class="webSection w-full h-[1200px] flex flex-col items-center">
            <h2
              id="webTitle"
              class="my-8 pt-3 text-6xl font-bold tracking-wider text-outline"
            >
              Showcase
            </h2>

            <div>
              <ThreeDCarousel />
            </div>
          </div>

          <div class="crawlerSection w-full h-[1600px] flex flex-col items-center relative">
            <h2
              id="crawlerTitle"
              class="mt-8 mb-24 pt-3 text-6xl font-bold tracking-wider text-outline"
            >
              Web crawler
            </h2>
            <div class="flex flex-col grow w-full">
              <CrawlerSection />
            </div>
          </div>

          <div class="robotSection w-full h-[1400px] flex flex-col items-center relative">
            <h2
              id="robotTitle"
              class="mt-8 mb-24 pt-3 text-6xl font-bold tracking-wider text-outline"
            >
              Intelligence Robot
            </h2>
            <div class="flex flex-col grow w-full">
              <RobotSection />
            </div>
          </div>

          <div class="contactSection w-full h-[1000px] flex flex-col items-center relative">
            <h2
              id="contactTitle"
              class="mt-8 mb-24 pt-3 text-6xl font-bold tracking-wider text-outline"
            >
              Contact us
            </h2>
            <div class="flex flex-col grow w-full items-center">
              <ContactSection />
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
