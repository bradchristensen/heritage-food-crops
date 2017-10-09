import SmoothScroll from 'smooth-scroll';

// Wrap the SmoothScroll instantiation, as it technically has side effects.
export default function init() {
    return new SmoothScroll('[data-scroll]');
}
