import { createActions, handleActions } from "redux-actions";

export const REQUEST_ACCESS = "REQUEST_ACCESS";
export const REQUEST_ACCESS_SUCCESS = "REQUEST_ACCESS_SUCCESS";
export const REQUEST_ACCESS_ERROR = "REQUEST_ACCESS_ERROR";

export const {
  requestAccess,
  requestAccessSuccess,
  requestAccessError,
} = createActions({
  [REQUEST_ACCESS]: (credentials) => ({ credentials }),
  [REQUEST_ACCESS_SUCCESS]: ({ user }) => ({ user }),
  [REQUEST_ACCESS_ERROR]: (error) => error,
});

export const REQUEST_REGISTER_USER = "REQUEST_REGISTER_USER";

export const { requestRegisterUser } = createActions({
  [REQUEST_REGISTER_USER]: (credentials) => ({ credentials }),
});

export const REQUEST_LOGOUT_USER = "REQUEST_LOGOUT_USER";
export const { requestLogoutUser } = createActions({
  [REQUEST_LOGOUT_USER]: () => {},
});

export const INITIAL_STATE = {
  user: {},
  loading: false,
};

const reducer = handleActions(
  {
    [REQUEST_ACCESS_SUCCESS]: (state, { payload: { user } }) => {
      return {
        ...state,
        user: user && user._id ? user : state.user,
        loading: false,
      };
    },
    [REQUEST_ACCESS_ERROR]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
      };
    },
    [REQUEST_LOGOUT_USER]: (state) => {
      return INITIAL_STATE;
    },
  },
  INITIAL_STATE
);

export default reducer;
