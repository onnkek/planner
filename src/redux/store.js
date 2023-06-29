import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import TimetaskReducer from './TimetaskReducer';
const { default: PostListReducer } = require("./PostListReducer");


const reducers = combineReducers({
    postList: PostListReducer,
    // timetaskList: TimetaskReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;