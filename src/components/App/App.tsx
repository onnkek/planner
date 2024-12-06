import React, { MouseEvent } from "react"
import "./App.sass"
import Header from "../Header/Header"
import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage/MainPage"
import OldItemsPage from "../pages/OldItemsPage/OldItemsPage"
import SettingsPage from "../pages/SettingsPage/SettingsPage"
import NotesPage from "../pages/NotesPage/NotesPage"
import CalendarPage from "../pages/CalendarPage/CalendarPage"
import { useAppDispatch } from "../../models/Hook"
import { closeContextMenu, closeIconsMenu } from "../../redux/NotesSlice"

const App = () => {
  const dispatch = useAppDispatch()
  const closeMenusHandler = (e: MouseEvent<HTMLDivElement>) => {
    // e.stopPropagation()
    // console.log("ЗАКРЫТЬ")
    dispatch(closeContextMenu())
    dispatch(closeIconsMenu())
  }

  return (
    <div onClick={closeMenusHandler} className="app">
      {/* https://www.figma.com/design/bbO8aq54Bacizxjc6FxChP/10%2C000-Soft-Color-Icons-for-UI%2C-UX%2C-Graphic-Design-–-Free-Ultimate-Colors-Vector-Icons-(svg%2Cpng)-(Community)?node-id=1128-1456&node-type=frame&t=1fxAaJlQqmOyvyf2-0 */}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/old" element={<OldItemsPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/settings/*" element={<SettingsPage />} />

      </Routes>
    </div>
  )
}
export default App