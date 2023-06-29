import { component$, useStylesScoped$ } from "@builder.io/qwik";

export default component$(() => {
  useStylesScoped$(`
    .textShadow {
      text-shadow: 0px 0px 1px #000000, 0px 0px 8px #27612F
      ;
    }
  `);
  return (
    <>
      <div class="w-full flex justify-start flex-col gap-3 font-digi">
        <div class="ml-[48px] flex items-center skew-x-[4deg] gap-[2px]">
          <div class="h-[3px] w-[3px] rounded-[0.5px] gradient-emerald opacity-80" />
          <div class="h-[3px] w-[3px] rounded-[0.5px] gradient-emerald opacity-40" />
          <div class="h-[3px] w-[3px] rounded-[0.5px] gradient-emerald opacity-25" />
        </div>

        {/* Up */}
        <div class="ml-[52px] flex items-center skew-x-[4deg] gap-[3px]">
          <div class="h-14 w-[3px] rounded-[0.5px] gradient-emerald opacity-40" />
          <div class="h-[52px] w-[3px] rounded-[0.5px] gradient-emerald opacity-25" />
          <div class="ml-4 p-1 h-full flex grow ">
            <h4 class="hudT text-xl text-emerald-500 opacity-70 textShadow">
              Innovative Web Solutions // Intelligent Automation
            </h4>
          </div>
        </div>

        {/* Middle */}
        <div class="ml-14 flex items-center gap-[3px]">
          <div class="h-40 w-[3px] rounded-[0.5px] gradient-emerald opacity-70 " />
          <div class="h-[154px] w-[3px] rounded-[0.5px] gradient-emerald opacity-40 " />
          <div class="h-[148px] w-[3px] rounded-[0.5px] gradient-emerald opacity-25 " />
          <div class="ml-4 p-1 h-full flex grow shadow-[inset_0_10px_6px_-12px,_inset_0_-10px_6px_-12px] shadow-emerald-500">
            <div class="h-full w-full flex flex-col items-start justify-evenly shadow-[inset_0_10px_6px_-12px,_inset_0_-10px_6px_-12px] shadow-emerald-500/60">
              <h4 class="text-xl text-emerald-500 opacity-50">
                <span>&gt;&gt; </span>
                <span class="hudMT textShadow">主要支援系統</span>
              </h4>
              <h2 class="text-3xl text-emerald-500 opacity-80 textShadow">
                <span>./</span>
                <span class="hudM">已檢測到 AI</span>
              </h2>
              <h4 class="text-xl text-emerald-500 opacity-50 flex justify-center">
                <span>SYS_PG&gt;</span>
                <span class="hudMB tracking-[-0.2em] textShadow"></span>
              </h4>
            </div>
          </div>
        </div>

        {/* Down */}
        <div class="ml-[52px] flex items-center -skew-x-[4deg] gap-[3px]">
          <div class="h-14 w-[3px] rounded-[0.5px] gradient-emerald opacity-40" />
          <div class="h-[52px] w-[3px] rounded-[0.5px] gradient-emerald opacity-25" />
          <div class="ml-4 p-1 h-full flex grow ">
            <h4 class="hudB text-xl text-emerald-500 opacity-40 textShadow">
              Empowering your business
            </h4>
          </div>
        </div>

        <div class="ml-[48px] flex items-center -skew-x-[4deg] gap-[2px]">
          <div class="h-[3px] w-[3px] rounded-[0.5px] gradient-emerald opacity-80" />
          <div class="h-[3px] w-[3px] rounded-[0.5px] gradient-emerald opacity-40" />
          <div class="h-[3px] w-[3px] rounded-[0.5px] gradient-emerald opacity-25" />
        </div>
      </div>
    </>
  );
});
