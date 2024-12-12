import { configureStore } from '@reduxjs/toolkit'
import PostListReducer from './PostListSlice'
import BadgesReducer from './BadgesSlice'
import NotesReducer from './NotesSlice'
import WeatherReducer from './WeatherSlice'
import SettingsReducer from './SettingsSlice'

const store = configureStore({
    reducer: {
        posts: PostListReducer,
        badges: BadgesReducer,
        notes: NotesReducer,
        weather: WeatherReducer,
        settings: SettingsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store