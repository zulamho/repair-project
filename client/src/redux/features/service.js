const initialState = {
  loading: true,
  service: [],
  error: null,
  image: [],
};

export default function service(state = initialState, action) {
  switch (action.type) {
    case "service/fetch-service/pending":
        return {
          ...state,
          loading: true,
        };
      case "service/fetch-service/fulfilled":
        return {
          ...state,
          loading: false,
          service: action.payload,
          error: action.error,
        };
      case "service/fetch-service/rejected":
        return {
          ...state,
          loading: false,
          service: action.error,
        };
    default:
      return state;
  }
}

export const fetchService = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "service/fetch-service/pending" });
    try {
      const response = await fetch("http://localhost:4000/service", {
        headers: {
          Authorization: `Bearer ${state.application.token}`,
        },
      });

      const json = await response.json();

      if (json.error) {
        dispatch({
          type: "service/fetch-service/rejected",
          error: "При запросе на сервер произошла ошибка",
        });
      } else {
        dispatch({ type: "service/fetch-service/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({
        type: "service/fetch-service/rejected",
        error: e.toString(),
      });
    }
  };
};
