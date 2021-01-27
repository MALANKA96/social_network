import { createStore, combineReducers } from "redux";
import postPageReducer from './profile-reducer';
import dialogPageReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersPageReducer from './users-reducer';


let reducers = combineReducers({
    postPage: postPageReducer,
    dialogPage: dialogPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
});

let store = createStore(reducers);

export default store; 