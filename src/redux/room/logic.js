import { createLogic } from "redux-logic";
import {
  CREATE_ROOM,
  joinRoomPrivate,
  joinRoomSuccess,
  JOIN_ROOM,
  listRoomSuccess,
  LIST_ROOM,
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
  return [handleCreateRoom(), handleListRoom(), handleJoinRoom()];
};

export default configureRoomLogics;
