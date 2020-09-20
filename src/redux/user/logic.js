import { createLogic } from "redux-logic";
import {
  REQUEST_ACCESS,
  requestAccessSuccess,
  requestAccessError,
  REQUEST_REGISTER_USER,
} from ".";
import { AsyncStorage } from "react-native";
import http from "../api";

export const handleRequestAccessLogic = () => {
  return createLogic({
    type: REQUEST_ACCESS,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      http
        .post("/auth/login", JSON.stringify(credentials))
        .then((res) => res.data)
        .then(async ({ user, token }) => {
          dispatch(requestAccessSuccess({ user }));
          await AsyncStorage.setItem("user", JSON.stringify(user));
          await AsyncStorage.setItem("token", JSON.stringify(token));
        })
        .catch((err) => {
          return dispatch(requestAccessError(true));
        })
        .finally(done);
    },
  });
};

export const handleRequestRegisterUserLogic = () => {
  return createLogic({
    type: REQUEST_REGISTER_USER,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      http
        .post("/auth/register", JSON.stringify(credentials))
        .then((res) => res.data)
        .then(async ({ user, token }) => {
          dispatch(requestAccessSuccess({ user }));
          await AsyncStorage.setItem("user", JSON.stringify(user));
          await AsyncStorage.setItem("token", JSON.stringify(token));
        })
        .catch((err) => {
          console.log(err);
          return dispatch(requestAccessError(true));
        })
        .finally(done);
    },
  });
};

const configureUserLogics = () => {
  return [handleRequestAccessLogic(), handleRequestRegisterUserLogic()];
};

export default configureUserLogics;
