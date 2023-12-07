import userReducer from "./slices/UserSlice";
import reloadReducer from "../redux/slices/ReloadSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    user: userReducer,
    reload: reloadReducer,
});

export default rootReducer;