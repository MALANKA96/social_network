import { createStore, combineReducers } from "redux";
import postPageReducer from './postPage-reducer';
import dialogPageReducer from './dialogPage-reducer';
import sidebarReducer from './sidebar-reducer';
sidebarReducer

let reducers = combineReducers({
    postPageReducer,
    dialogPageReducer,
    sidebarReducer,
});
let store = createStore();

export default store;