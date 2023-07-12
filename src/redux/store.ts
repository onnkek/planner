import { configureStore } from '@reduxjs/toolkit'
import PostListReducer from './PostListReducer'

const store = configureStore({
    reducer: {
        posts: PostListReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store