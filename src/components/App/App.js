import React, { Component } from "react";
import "./App.sass";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import OldItemsPage from "../pages/OldItemsPage/OldItemsPage";
import ControlPanelContainer from "../ControlPanel/ControlPanelContainer";

// 6493dff09d312622a373a407 FakeBin

export default class App extends Component {
  
  render() {
    return (
      <>
        <Header />
        <ControlPanelContainer />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                state={this.state}
                updateData={this.updateData}
              />
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
        </Routes>
      </>
    );
  }
}
