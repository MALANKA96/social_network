import { createStore, combineReducers } from "redux";
import postPageReducer from "./profile-reducer";
import dialogPageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authReducer from "./auth-reduser";

let reducers = combineReducers({
  postPage: postPageReducer,
  dialogPage: dialogPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store; 
export default store;
