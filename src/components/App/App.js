import React, { Component } from "react"
import "./App.sass"
import Header from "../Header/Header"
import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage/MainPage"
import OldItemsPage from "../pages/OldItemsPage/OldItemsPage"
import SettingsPage from "../pages/SettingsPage/SettingsPage"
import Spinner from "../UI/Spinner/Spinner"

// 6493dff09d312622a373a407 FakeBin

export default class App extends Component {

  test = 'dark'
  setDarkMode = () => {
    document.querySelector('body')
      .setAttribute('data-theme', 'dark')
    this.test = 'dark'
  }
  setLightMode = () => {
    document.querySelector('body')
      .setAttribute('data-theme', 'light')
    this.test = 'light'
  }

  toggleMode = (e) => {

    this.test === 'dark' ? this.setLightMode() : this.setDarkMode()

  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage state={this.state} updateData={this.updateData} />
            }
          />
          <Route
            path="/old"
            element={
              <OldItemsPage
                state={this.state}
                updateData={this.updateData}
                deleteItem={this.deleteItem}
              />
            }
          />
          <Route path="/settings/*" element={<SettingsPage />} />
        </Routes>
      </>
    )
  }
}
