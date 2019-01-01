import { CLOSE_LIGHTBOX, OPEN_LIGHTBOX } from '../actions/lightbox';

export default function lightboxReducer(state = {}, action) {
    switch (action.type) {
    case CLOSE_LIGHTBOX:
        return {
            ...state,
            visible: false,
        };

    case OPEN_LIGHTBOX:
        return {
            ...state,
            caption: action.caption,
            content: action.content,
            visible: true,
        };

    default:
        return state;
    }
}
