import React, { Component } from "react"
import "./SettingsPage.sass"
import ThemePage from "./ThemePage/ThemePage"
import Sidebar from "./Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom"
import ProfilePage from "./ProfilePage/ProfilePage"
import TimetaskPage from "./TimetaskPage/TimetaskPage"
import NotificationsPage from "./NotificationsPage/NotificationsPage"

export default class SettingsPage extends Component {
  render() {
    return (
      <>
        <div className="app-container">
          <div className="settings-page row">
            <div className="col-4">
              <Sidebar />
            </div>
            <div className="settings-page-body col-8">
              <Routes>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="appearance" element={<ThemePage />} />
                <Route path="time" element={<TimetaskPage />} />
                <Route path="notifications" element={<NotificationsPage />} />
              </Routes>
            </div>

          </div>
        </div>
      </>
    )
  }
}
