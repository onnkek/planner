import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
const { default: PostListReducer } = require("./PostListReducer");


const reducers = combineReducers({
    postList: PostListReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;