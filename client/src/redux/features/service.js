const initialState = {
  loading: true,
  service: [],
  error: null,
  filter: "",
  userservice: [],
  accepted: null,
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
        service: action.payload.service,
        pages: action.payload.pages,
      };

    case "service/fetch-service/rejected":
      return {
        ...state,
        loading: false,
        service: action.error,
      };

    case "service/post/pending":
    case "service/get/pending":
    case "service/toggle-ticket/pending":
      return {
        ...state,
        loading: true,
      };
    case "service/post/fulfilled":
    case "service/toggle-ticket/fulfilled":
      return {
        ...state,
        loading: false,
        service: action.payload,
      };

    case "service/get/fulfilled":
      return {
        ...state,
        loading: false,
        accepted: action.payload.accepted,
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
    case "service/filter/fulfilled":
      return {
        ...state,
        filter: action.payload,
      };
    case "service/delete":
      return {
        ...state,
        service: state.service.filter(
          (service) => service.id !== action.payload
        ),
      };
    case "service/edit":
      return {
        ...state,
        service: state.service.filter(
          (service) => service.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export const fetchService = (page = 1) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "service/fetch-service/pending" });
    const response = await fetch(`http://localhost:4000/service?page=${page}`);

    const json = await response.json();

    const { service, pages } = json;

    if (json.error) {
      dispatch({
        type: "service/fetch-service/rejected",
        error: "При запросе на сервер произошла ошибка",
      });
    } else {
      dispatch({
        type: "service/fetch-service/fulfilled",
        payload: { service, pages },
      });
    }
  };
};

export const addProduct = (
  name,
  price,
  address,
  square,
  description,
  image,
 
) => {
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
        address,
        image: state.service.image,
        description,
        square,
      }),
    });

    const json = await response.json();

    dispatch({
      type: "service/post/fulfilled",
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

    const response = await fetch("http://localhost:4000/service/upload", {
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

export const setFilterText = (text) => {
  console.log(text)
  return {
    type: "service/filter/fulfilled",
    payload: text,
  };
};

export const removeService = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    fetch(`http://localhost:4000/service/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.application.token}`,
        "Content-Type": "application/json",
      },
    }).then(() => {
      dispatch({ type: "service/delete", payload: id });
    });
    window.location.reload();
  };
};

export const addApplication = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "service/post/pending" });

    const state = getState();

    const response = await fetch(
      `http://localhost:4000/service/adduser/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json",
        },
      }
    );
    const json = await response.json();

    dispatch({
      type: "service/post/fulfilled",
      payload: json,
    });
  };
};

export const getApplication = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "service/get/pending" });

    const state = getState();

    const response = await fetch(
      `http://localhost:4000/service/getuser/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json",
        },
      }
    );
    const json = await response.json();

    dispatch({
      type: "service/get/fulfilled",
      payload: json,
    });
  };
};

export const toggleTicket = (id, ticketId, type) => {
  return async (dispatch, getState) => {
    dispatch({ type: "service/toggle-ticket/pending" });

    const state = getState();

    const response = await fetch(
      `http://localhost:4000/service/toggle-ticket/${id}/${ticketId}/${type}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json",
        },
      }
    );
    const json = await response.json();

    dispatch({
      type: "service/toggle-ticket/fulfilled",
      payload: json,
    });
  };
};

export const editService = (
  id,
  name,
  price,
  address,
  square,
  image,
  description
) => {
  return (dispatch, getState) => {
    const state = getState();
    fetch(`http://localhost:4000/service/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        price,
        image: state.service.image,
        address,
        square,
        description,
      }),

      headers: {
        Authorization: `Bearer ${state.application.token}`,
        "Content-Type": "application/json",
      },
    }).then(() => {
      dispatch({ type: "service/edit", payload: id });
    });
  };
};
