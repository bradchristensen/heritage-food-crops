export const OPEN_LIGHTBOX = 'OPEN_LIGHTBOX';
export const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';

export function openLightbox(content, caption) {
    return { type: OPEN_LIGHTBOX, caption, content };
}

export function closeLightbox() {
    return { type: CLOSE_LIGHTBOX };
}
