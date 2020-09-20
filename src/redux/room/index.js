import { createActions, handleActions } from "redux-actions";

export const CREATE_ROOM = "CREATE_ROOM";

export const { createRoom } = createActions({
  [CREATE_ROOM]: (credentials) => ({ credentials }),
});

export const LIST_ROOM = "LIST_ROOM";
export const LIST_ROOM_SUCCESS = "LIST_ROOM_SUCCESS";

export const { listRoom, listRoomSuccess } = createActions({
  [LIST_ROOM]: (id) => id,
  [LIST_ROOM_SUCCESS]: (list) => ({ list }),
});

export const CREATED_STATUS = "CREATED_STATUS";

export const { createdStatus } = createActions({
  [CREATED_STATUS]: (boolean) => boolean,
});

export const INITIAL_STATE = {
  list: {},
  created: false,
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
    [CREATED_STATUS]: (state, { payload }) => {
      return {
        ...state,
        created: payload,
      };
    },
  },
  INITIAL_STATE
);

export default reducer;
