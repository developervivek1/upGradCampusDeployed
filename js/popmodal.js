const wapp = document.querySelector(".whatsapp"),
  allImg = document.querySelectorAll("img");
allImg.forEach((a) => {
  a.setAttribute("loading", "lazy");
}),
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      wapp.classList.contains("active") || wapp.classList.add("active");
    }, 5e3),
      setTimeout(() => {
        wapp.classList.contains("active") && wapp.classList.remove("active");
      }, 3e5);
  });
let setOfevents = [
    "mousemove",
    "mousedown",
    "scroll",
    "click",
    "dblclick",
    "mouseleave",
    "mouseenter",
    "resize",
  ],
  setTimeforPop;
function detecttype(a) {
  setOfevents.includes(a.type) &&
    (clearTimeout(setTimeforPop),
    (setTimeforPop = setTimeout(dispSubscribe, 20e3)));
}
function dispSubscribe() {
  let a = document.querySelector("#subscribeModal"),
    b = document.querySelector(".overlay");
  a.classList.add("show"),
    b.classList.add("active"),
    a.addEventListener("click", () => {
      a.classList.contains("show") &&
        (a.classList.remove("show"), b.classList.remove("active"));
    });
}
setOfevents.forEach((a) => {
  window.addEventListener(a, detecttype);
}),
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(dispSubscribe, 20e3);
  });
