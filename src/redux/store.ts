import { configureStore } from '@reduxjs/toolkit'
import PostListReducer from './PostListSlice'
import BadgesReducer from './BadgesSlice'
import NotesReducer from './NotesSlice'

const store = configureStore({
    reducer: {
        posts: PostListReducer,
        badges: BadgesReducer,
        notes: NotesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store