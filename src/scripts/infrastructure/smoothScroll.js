import SmoothScroll from "smooth-scroll";

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

export default function init() {
  const scroll = new SmoothScroll();

  window.addEventListener(
    "click",
    event => {
      const toggle = event.target.closest("[data-scroll]");
      if (!toggle || toggle.tagName.toLowerCase() !== "a") return;
      const anchor = document.querySelector(toggle.hash);
      if (!anchor) return;

      event.preventDefault(); // Prevent default click event
      scroll.animateScroll(anchor, toggle, {}); // Animate scroll
    },
    false
  );
}
