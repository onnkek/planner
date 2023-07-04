import { configureStore } from '@reduxjs/toolkit'
import PostListReducer from './PostListReducer'

export default configureStore({
    reducer: {
        posts: PostListReducer
    }
})