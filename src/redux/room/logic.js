import { createLogic } from "redux-logic";
import {
  CREATE_ROOM,
  CREATE_TASK,
  joinRoomPrivate,
  joinRoomSuccess,
  JOIN_ROOM,
  listRoomSuccess,
  listTaskSuccess,
  LIST_ROOM,
  LIST_TASK,
} from ".";
import http from "../api";

export const handleCreateRoom = () => {
  return createLogic({
    type: CREATE_ROOM,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      const time = Date.now();
      const invite = `${credentials.name.slice(0, 3)}${time
        .toString()
        .slice(10, time.length)}`;

      http
        .post("/room/create", JSON.stringify({ ...credentials, invite }))
        .then((res) => res.data)
        .then((res) => dispatch(listRoomSuccess(res)))
        .catch((err) => {
          return console.log(err);
        })
        .finally(done);
    },
  });
};

export const handleCreateTask = () => {
  return createLogic({
    type: CREATE_TASK,
    process(
      {
        action: {
          payload: { credentials },
        },
      },
      dispatch,
      done
    ) {
      console.log(credentials)
      http
        .post("/task/create", JSON.stringify(credentials))
        .then((res) => res.data)
        .then((res) => dispatch(listTaskSuccess(res)))
        .catch((err) => {
          return console.log(err);
        })
        .finally(done);
    },
  });
};

export const handleListRoom = () => {
  return createLogic({
    type: LIST_ROOM,
    process({ action: { payload } }, dispatch, done) {
      http
        .get(`/room/list/${payload}`)
        .then((res) => res.data)
        .then((res) => dispatch(listRoomSuccess(res)))
        .catch((err) => {
          return console.log(err);
        })
        .finally(done);
    },
  });
};

export const handleListTask = () => {
  return createLogic({
    type: LIST_TASK,
    process({ action: { payload } }, dispatch, done) {
      http
        .get(`/task/list/${payload}`)
        .then((res) => res.data)
        .then((res) => dispatch(listTaskSuccess(res)))
        .catch((err) => {
          return console.log(err);
        })
        .finally(done);
    },
  });
};

export const handleJoinRoom = () => {
  return createLogic({
    type: JOIN_ROOM,
    process({ action: { payload } }, dispatch, done) {
      http
        .post(`/room/join/${payload.invite}`, JSON.stringify(payload))
        .then((res) => res.data)
        .then((res) => {
          if (!!res?.private) {
            return dispatch(joinRoomPrivate(true));
          }
          return dispatch(joinRoomSuccess(res));
        })
        .catch((err) => {
          return console.log(err);
        })
        .finally(done);
    },
  });
};

const configureRoomLogics = () => {
  return [
    handleCreateRoom(),
    handleListRoom(),
    handleJoinRoom(),
    handleListTask(),
    handleCreateTask()
  ];
};

export default configureRoomLogics;
