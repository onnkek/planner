import { createStore, combineReducers } from 'redux';
const { default: PostListReducer } = require("./PostListReducer");



const reducers = combineReducers({
    postList: PostListReducer,

});



let store = createStore(reducers);


window.store = store;


export default store;