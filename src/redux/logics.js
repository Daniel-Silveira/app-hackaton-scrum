import configureUserLogics from "./user/logic";
import configureRoomLogics from "./room/logic";

const userLogics = configureUserLogics();
const roomLogics = configureRoomLogics();

const logics = [...userLogics, ...roomLogics];

export default logics;
