import { configureStore } from '@reduxjs/toolkit'
import PostListReducer from './PostListReducer'
import BadgesSlice from './BadgesSlice'

const store = configureStore({
    reducer: {
        posts: PostListReducer,
        badges: BadgesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store