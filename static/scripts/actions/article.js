export const SCROLL_SECTION_INTO_VIEW = 'SCROLL_SECTION_INTO_VIEW';
export const SCROLL_SECTION_OUT_OF_VIEW = 'SCROLL_SECTION_OUT_OF_VIEW';

export function scrollSectionIntoView(sectionId) {
    return { type: SCROLL_SECTION_INTO_VIEW, sectionId };
}

export function scrollSectionOutOfView(sectionId) {
    return { type: SCROLL_SECTION_OUT_OF_VIEW, sectionId };
}
