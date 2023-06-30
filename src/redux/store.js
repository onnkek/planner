import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
const { default: PostListReducer, default: postReducer } = require("./PostListReducer");








export default configureStore({
    reducer: {
        posts: postReducer
    }
})










// const reducers = combineReducers({
//     postList: PostListReducer,
//     // timetaskList: TimetaskReducer

// });

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));