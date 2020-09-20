import { createActions, handleActions } from "redux-actions";

export const CREATE_ROOM = "CREATE_ROOM";

export const { createRoom } = createActions({
  [CREATE_ROOM]: (credentials) => ({ credentials }),
});

export const JOIN_ROOM = "JOIN_ROOM";
export const JOIN_ROOM_SUCCESS = "JOIN_ROOM_SUCCESS";
export const JOIN_ROOM_PRIVATE = "JOIN_ROOM_PRIVATE";

export const { joinRoom, joinRoomSuccess, joinRoomPrivate } = createActions({
  [JOIN_ROOM]: (credentials) => credentials,
  [JOIN_ROOM_SUCCESS]: (credentials) => credentials,
  [JOIN_ROOM_PRIVATE]: (boolean) => boolean,
});

export const LIST_ROOM = "LIST_ROOM";
export const LIST_ROOM_SUCCESS = "LIST_ROOM_SUCCESS";

export const { listRoom, listRoomSuccess } = createActions({
  [LIST_ROOM]: (id) => id,
  [LIST_ROOM_SUCCESS]: (list) => ({ list }),
});

export const LIST_TASK = "LIST_TASK";
export const LIST_TASK_SUCCESS = "LIST_TASK_SUCCESS";

export const { listTask, listTaskSuccess } = createActions({
  [LIST_TASK]: (id) => id,
  [LIST_TASK_SUCCESS]: (list) => ({ list }),
});

export const CREATE_TASK = "CREATE_TASK";

export const { createTask } = createActions({
  [CREATE_TASK]: (credentials) => ({credentials}),
});

export const CREATED_STATUS = "CREATED_STATUS";

export const { createdStatus } = createActions({
  [CREATED_STATUS]: (boolean) => boolean,
});

export const INITIAL_STATE = {
  list: [],
  created: false,
  room: {},
  private: false,
  joined: false,
  listTask: [],
};

const reducer = handleActions(
  {
    [LIST_ROOM_SUCCESS]: (state, { payload: { list } }) => {
      return {
        ...state,
        list,
        created: true,
      };
    },
    [LIST_TASK_SUCCESS]: (state, { payload: { list } }) => {
      return {
        ...state,
        listTask: list,
        created: true,
      };
    },
    [CREATED_STATUS]: (state, { payload }) => {
      return {
        ...state,
        created: payload,
      };
    },
    [JOIN_ROOM_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        room: payload,
        joined: true,
      };
    },
    [JOIN_ROOM_PRIVATE]: (state, { payload }) => {
      return {
        ...state,
        private: payload,
      };
    },
  },
  INITIAL_STATE
);

export default reducer;
