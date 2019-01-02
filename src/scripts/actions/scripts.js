import ReactGA from "react-ga";

export const FETCH_VICTORY = "FETCH_VICTORY";
export const FETCH_VICTORY_SUCCESS = "FETCH_VICTORY_SUCCESS";
export const FETCH_VICTORY_ERROR = "FETCH_VICTORY_ERROR";

export function fetchVictory() {
  return async dispatch => {
    dispatch({ type: FETCH_VICTORY });

    try {
      const script = await import(/* webpackChunkName: "victory" */ "victory");

      dispatch({ type: FETCH_VICTORY_SUCCESS, script });
    } catch (err) {
      dispatch({ type: FETCH_VICTORY_ERROR, err });

      ReactGA.exception({
        description: `Failed to dynamically import script with error: ${
          err.message
        }`,
        fatal: false
      });
    }
  };
}

export function fetchVictoryIfNeeded() {
  return (dispatch, getState) => {
    if (!getState().scripts.victory) {
      return dispatch(fetchVictory());
    }
    return Promise.resolve();
  };
}
