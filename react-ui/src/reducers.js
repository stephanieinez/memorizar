import { combineReducers } from "redux";
import wordReducer from "./redux/reducer";

const app = combineReducers({ wordReducer });

export default app;
