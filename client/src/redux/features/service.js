const initialState = {
  loading: true,
  service: [],
  error: null,
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
    case "service/post/pending":
      return {
        ...state,
        loading: true,
      };
    case "service/post/fulfilled":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "service/image/pending":
      return {
        ...state,
        loading: true,
      };
    case "service/image/fulfilled":
      return {
        ...state,
        loading: false,
        image: action.payload.image,
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

export const addProduct = (name, price, image, description, number) => {
  return async (dispatch, getState) => {
    dispatch({ type: "service/post/pending" });

    const state = getState();

    const response = await fetch("http://localhost:4000/service", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${state.application.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        image: state.service.image,
        number,
        description,
      }),
    });

    const json = await response.json();

    dispatch({
      type: "product/post/fulfilled",
      payload: json,
    });
  };
};

export const addImage = (e) => {
  return async (dispatch) => {
    dispatch({ type: "service/image/pending" });

    const { files } = e.target;
    const data = new FormData();
    data.append("image", files[0]);

    const response = await fetch("http://localhost:4000/image", {
      method: "POST",
      body: data,
    });

    const json = await response.json();

    dispatch({
      type: "service/image/fulfilled",
      payload: json,
    });
  };
};
