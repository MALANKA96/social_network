import { createStore, combineReducers } from "redux";
import postPageReducer from './postPage-reducer';
import dialogPageReducer from './dialogPage-reducer';
import sidebarReducer from './sidebar-reducer';


let reducers = combineReducers({
    postPage: postPageReducer,
    dialogPage: dialogPageReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store; 