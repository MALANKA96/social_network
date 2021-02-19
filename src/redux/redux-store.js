import { createStore, combineReducers, applyMiddleware } from "redux";
import postPageReducer from "./profile-reducer";
import dialogPageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reduser";

let reducers = combineReducers({
  postPage: postPageReducer,
  dialogPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
