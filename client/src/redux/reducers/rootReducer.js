import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import {productReducer} from "./productReducer";

 const rootReducer = combineReducers({
 auth: authReducer,
 prod: productReducer,
});
export default rootReducer;