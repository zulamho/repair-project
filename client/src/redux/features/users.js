const initialState = {
  items: [],
  loading: false,
  currentUser: {},
  userService: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "users/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/load/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "usersById/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "usersById/load/fulfilled":
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case "noteByUser/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "noteByUser/load/fulfilled":
      return {
        ...state,
        userNotes: action.payload,
        loading: false,
      };
    case "avatar/upload/pending":
      return {
        ...state,
        loading: true,
      };
    case "avatar/upload/fulfilled":
      return {
        ...state,
        loading: false,
        image: action.payload.image,
      };
    case "serviceByUser/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "serviceByUser/load/fulfilled":
      return {
        ...state,
        userService: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export const loadUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "users/load/pending" });

    const res = await fetch("/users");
    const json = await res.json();

    dispatch({ type: "users/load/fulfilled", payload: json });
  };
};

export const loadUserById = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "usersById/load/pending" });
    const state = getState();
    const res = await fetch(`/user`, {
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
    });
    const json = await res.json();
    dispatch({ type: "usersById/load/fulfilled", payload: json });
  };
};

export const addAvatar = (e) => {
  return async (dispatch, getState) => {
    dispatch({ type: "avatar/upload/pending" });

    const { files } = e.target;
    const data = new FormData();
    data.append("image", files[0]);
    const state = getState();

    const response = await fetch(`/upload/avatar/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
      body: data,
    });

    const json = await response.json();
    dispatch({
      type: "avatar/upload/fulfilled",
      payload: json,
    });
    window.location.reload();
  };
};

export const loadUserService = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: "serviceByUser/load/pending",
    });
    const state = getState();
    const response = await fetch("/admin", {
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
    });
    const json = await response.json();

    dispatch({
      type: "serviceByUser/load/fulfilled",
      payload: json,
    });
  };
};
