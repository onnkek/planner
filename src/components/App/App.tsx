import React from "react"
import "./App.sass"
import Header from "../Header/Header"
import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage/MainPage"
import OldItemsPage from "../pages/OldItemsPage/OldItemsPage"
import SettingsPage from "../pages/SettingsPage/SettingsPage"
import NotesPage from "../pages/NotesPage/NotesPage"
import CalendarPage from "../pages/CalendarPage/CalendarPage"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/old" element={<OldItemsPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/settings/*" element={<SettingsPage />} />
        
      </Routes>
    </>
  )
}
export default App