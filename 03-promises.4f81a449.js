function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u={form:document.querySelector(".form"),firstDelay:document.querySelector('input[name = "delay"]'),step:document.querySelector('input[name = "step"]'),amount:document.querySelector('input[name = "amount"]')};function l(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}function a({position:t,delay:n}){e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}function s({position:t,delay:n}){e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}u.form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(u.firstDelay.value),n=Number(u.step.value),o=Number(u.amount.value);for(let e=0;e<o;e+=1){l(e+1,t+n*e).then(a).catch(s)}}));
//# sourceMappingURL=03-promises.4f81a449.js.map