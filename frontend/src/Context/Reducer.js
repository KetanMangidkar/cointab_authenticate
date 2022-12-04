const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        username: action.payload.email,
        loading: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: false,
        loading: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        username: null,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;