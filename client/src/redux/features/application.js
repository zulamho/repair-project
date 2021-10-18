const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token"),
  users: [],
  avatar: [],
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
    case "application/profile/exit":
      return {
        ...state,
        signingIn: false,
        token: null,
        signingUp: false,
        error: null,
      };
    case "user/avatar/fulfilled":
      return {
        ...state,
        avatar: action.payload,
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
  ConfirmPassword,
  telephone,
  descriptionService
) => {
  return async (dispatch, getState) => {
    dispatch({ type: "application/signup/pending" });

    const { application } = getState();

    const response = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({
        name,
        lastName,
        workingUser,
        email,
        login,
        password,
        ConfirmPassword,
        telephone,
        image: application.avatar.image,
        descriptionService,
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

export const changeUser = (
  name,
  lastName,
  workingUser,
  email,
  login,
  password,
  ConfirmPassword,
  telephone,
  descriptionService
) => {
  return async (dispatch, getState) => {
    dispatch({ type: "application/signup/pending" });
    const { application } = getState();
    const state = getState();

    const response = await fetch("/user", {
      headers: {
        Authorization: `Bearer ${state.application.token}`,
        "Content-type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        lastName,
        workingUser,
        email,
        login,
        password,
        ConfirmPassword,
        telephone,
        pathImages: application.avatar.image,
        descriptionService,
      }),
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

    const response = await fetch("/login", {
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

export const addAvatar = (e) => {
  return async (dispatch) => {
    dispatch({ type: "user/avatar/pending" });

    const { files } = e.target;
    const data = new FormData();
    data.append("image", files[0]);

    const response = await fetch("/user/upload", {
      method: "POST",

      body: data,
    });

    const json = await response.json();

    dispatch({
      type: "user/avatar/fulfilled",
      payload: json,
    });
  };
};

export const changeAvatar = (e) => {
  return async (dispatch, getState) => {
    dispatch({ type: "user/avatar/pending" });

    const { files } = e.target;
    const data = new FormData();
    data.append("image", files[0]);
    // const state = getState();

    const response = await fetch("/user/upload", {
      method: "POST",

      body: data,
    });

    const json = await response.json();

    dispatch({
      type: "user/avatar/fulfilled",
      payload: json,
    });
  };
};

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    // const state = getState();
    try {
      const response = await fetch("/users", {});

      const json = await response.json();

      if (json.error) {
        dispatch({
          type: "users/fetch/error",
          error: "При запросе на сервер произошла ошибка",
        });
      } else {
        dispatch({ type: "users/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({
        type: "users/fetch/rejected",
        error: e.toString(),
      });
    }
  };
};
