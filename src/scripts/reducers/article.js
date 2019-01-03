import {
  SCROLL_SECTION_INTO_VIEW,
  SCROLL_SECTION_OUT_OF_VIEW
} from "../actions/article";

const INITIAL_STATE = {
  visibleSections: []
};

export default function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCROLL_SECTION_INTO_VIEW:
      if (!state.visibleSections.includes(action.sectionId)) {
        return {
          ...state,
          visibleSections: state.visibleSections.concat(action.sectionId)
        };
      }

      return state;

    case SCROLL_SECTION_OUT_OF_VIEW: {
      const index = state.visibleSections.indexOf(action.sectionId);
      if (index !== -1) {
        state.visibleSections.splice(index, 1);
        return {
          ...state,
          // Shallow clone
          visibleSections: [].concat(state.visibleSections)
        };
      }

      return state;
    }

    default:
      return state;
  }
}
