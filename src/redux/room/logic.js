import { createLogic } from "redux-logic";
import { CREATE_ROOM, listRoomSuccess, LIST_ROOM } from ".";
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
      http
        .post("/room/create", JSON.stringify(credentials))
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

const configureRoomLogics = () => {
  return [handleCreateRoom(), handleListRoom()];
};

export default configureRoomLogics;
