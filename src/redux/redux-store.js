import { createStore, combineReducers, applyMiddleware } from "redux";
import postPageReducer from "./profile-reducer";
import dialogPageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  postPage: postPageReducer,
  dialogPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
