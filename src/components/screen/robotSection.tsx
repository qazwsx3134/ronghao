import { component$, useVisibleTask$ } from "@builder.io/qwik";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".chat-1", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-1",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".chat-2", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-2",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to([".chat-3", ".chat-4"], {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-3",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".chat-5", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-5",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".chat-6", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-6",
        start: "+=100 50%",
      },
    });
  });
  return (
    <div class="mockup-phone h-[1000px]">
      <div class="camera"></div>
      <div class="display h-full">
        <div
          class="artboard artboard-demo w-[500px] h-[1200px] justify-start p-4 pt-6"
          style={{
            alignItems: "initial",
          }}
        >
          <div class="chat-1 chat chat-start opacity-0">
            <div class="chat-header">7x24⚡World Stock Intelligence News</div>
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="/images/robot-avatar.webp" />
              </div>
            </div>
            <div class="chat-bubble">
              <span class="text-lg font-semibold">
                Powell Says Fed’s Inflation Fight Could Take Years
              </span>
              <br />
              <span class="text-base font-normal">
                After raising rates rapidly over the past year, officials aren’t
                sure how much higher and faster to lift them
              </span>

              <br />
              <br />

              <span class="link text-blue-500">
                <a
                  href="https://www.wsj.com/articles/powell-other-central-bankers-face-uncertain-inflation-outlook-30bd34e5?mod=markets_lead_pos11"
                  target="blank"
                >
                  Source
                </a>
              </span>
            </div>
          </div>

          <div class="chat-2 chat chat-start opacity-0">
            <div class="chat-header">
              7x24⚡Stock Intelligence News translated by AI
            </div>
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="/images/robot-avatar.webp" />
              </div>
            </div>
            <div class="chat-bubble">
              <span class="text-lg font-semibold">
                鮑威爾表示美聯儲對抗通脹或需耗時數年
              </span>
              <br />
              <span class="text-base font-normal">
                在過去一年中迅速提高利率後，官員們對於進一步提高利率的程度和速度感到不確定。
              </span>

              <br />
              <br />

              <span class="link text-blue-500">
                <a
                  href="https://www.wsj.com/articles/powell-other-central-bankers-face-uncertain-inflation-outlook-30bd34e5?mod=markets_lead_pos11"
                  target="blank"
                >
                  來源
                </a>
              </span>
            </div>
          </div>

          <div class="chat-3 chat chat-start opacity-0">
            <div class="chat-header">⚡Stock market Intelligence Robot⚡</div>
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="/images/stock-avatar.webp" />
              </div>
            </div>
            <div class="chat-bubble">
              <img src="/images/stock-image.webp" width={200} />
            </div>
          </div>

          <div class="chat-4 chat chat-start opacity-0">
            <div class="chat-header">⚡Stock market Intelligence Robot⚡</div>
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="/images/stock-avatar.webp" />
              </div>
            </div>
            <div class="chat-bubble text-base chat-bubble-error">
              The -- {"{"} Support level {"}"} -- conditions has met the
              criteria, please check it on your application.
            </div>
          </div>

          <div class="chat-5 chat chat-end opacity-0">
            <div class="chat-header">ViDa</div>
            <div class="chat-bubble">Show me the Japanese yen rate please.</div>
            <div class="chat-footer opacity-50">Seen</div>
          </div>

          <div class="chat-6 chat chat-start opacity-0">
            <div class="chat-header">⚡Chat Intelligence Robot⚡</div>
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="/images/stock-avatar.webp" />
              </div>
            </div>
            <div class="chat-bubble text-base">
              1.00 US Dollar = 144.43008 Japanese Yen
              <br />
              1 JPY = 0.00692377 USD
              <br />
              <br />
              Last updated Jun 29, 2023, 08:00 UTC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
