import{U as l}from"./q-3e17a5c2.js";const a=async()=>{const o={spread:360,ticks:70,gravity:0,decay:.95,startVelocity:30,colors:["#ffeddd","#ffdbbb","#ffc89a","#ffb678","#ffa456","#cc8345","#996234","#664222","#332111"],origin:{x:.5,y:.35}};function c(){return new Promise((n,s)=>{if(globalThis.confetti)return n(globalThis.confetti);const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js",e.onload=()=>n(globalThis.confetti),e.onerror=s,document.head.appendChild(e),e.remove()})}const i=await c();function t(){i({...o,particleCount:80,scalar:1.2}),i({...o,particleCount:60,scalar:.75})}setTimeout(t,0),setTimeout(t,100),setTimeout(t,200),setTimeout(t,300),setTimeout(t,400)};export{l as _hW,a as s_JuIgA4BlaSQ};
