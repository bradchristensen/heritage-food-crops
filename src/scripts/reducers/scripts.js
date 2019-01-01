import { FETCH_VICTORY_SUCCESS } from '../actions/scripts';

export default function scriptsReducer(state = {}, action) {
    switch (action.type) {
    case FETCH_VICTORY_SUCCESS:
        return {
            ...state,
            victory: action.script,
        };

    default:
        return state;
    }
}
