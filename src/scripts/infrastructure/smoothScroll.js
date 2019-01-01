import SmoothScroll from 'smooth-scroll';

export default function init() {
    const scroll = new SmoothScroll();

    window.addEventListener('click', (event) => {
        const toggle = event.target.closest('[data-scroll]');
        if (!toggle || toggle.tagName.toLowerCase() !== 'a') return;
        const anchor = document.querySelector(toggle.hash);
        if (!anchor) return;

        event.preventDefault(); // Prevent default click event
        scroll.animateScroll(anchor, toggle, {}); // Animate scroll
    }, false);
}
