import albumReducer from "./album";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import { reducer as burgerMenu } from "redux-burger-menu";

export default combineReducers({
  albumReducer,
  form: formReducer
  // burgerMenu
});
