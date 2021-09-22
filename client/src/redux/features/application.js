const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token"),
  basket: [],
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    case "application/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
        error: null,
      };

    case "application/signin/pending":
      return {
        ...state,
        signingIn: true,
        error: null,
      };

    case "application/signin/fulfilled":
      return {
        ...state,
        signingIn: false,
        token: action.payload.token,
      };

    case "application/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
    case "basket":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    default:
      return state;
  }
}

export const createUser = (
  name,
  lastName,
  workingUser,
  email,
  login,
  password,
  ConfirmPassword
) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const response = await fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify({
        name,
        lastName,
        workingUser,
        email,
        login,
        password,
        ConfirmPassword,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "application/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signin/fulfilled", payload: json });
    }
  };
};

export const auth = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signin/pending" });

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "application/signin/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signin/fulfilled", payload: json });

      localStorage.setItem("token", json.token);
    }
  };
};
export const userBasket = (id) => {
  return {
    type: "basket",
    payload: id,
  };
};

export const fetchProductsBasket = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "product/basket/pending" });
    try {
      const response = await fetch(
        "http://localhost:4000/cart/6141c3a0a38940a0244174e9",
        {
          headers: {
            Authorization: `Bearer ${state.application.token}`,
          },
        }
      );

      const json = await response.json();

      if (json.error) {
        dispatch({
          type: "product/basket-server/rejected",
          error: "При запросе на сервер произошла ошибка",
        });
      } else {
        dispatch({ type: "product/basket/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({
        type: "product/basket-server/rejected",
        error: e.toString(),
      });
    }
  };
};
