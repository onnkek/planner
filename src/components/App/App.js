import React, { Component } from "react";
import "./App.sass";
import Header from "../Header/Header";
import JSONBinService from "../../services/JSONBinService";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import OldItemsPage from "../pages/OldItemsPage/OldItemsPage";
import ControlPanelContainer from "../ControlPanel/ControlPanelContainer";

// 6493dff09d312622a373a407

export default class App extends Component {
  jsonService = new JSONBinService();
  state = {
    data: [],
  };
  componentDidMount() {
    this.jsonService.getData().then((data) => {
      this.setState({
        data,
      });
    });
  }

  deleteItem = (id) => {
    const index = this.state.data.findIndex((item) => item.id === id);
    const newData = [
      ...this.state.data.slice(0, index),
      ...this.state.data.slice(index + 1),
    ];
    this.jsonService.updateData(newData, this.updateState);
  };
  hideItem = (id) => {
    const index = this.state.data.findIndex((item) => item.id === id);
    console.log(`dl ${Date.parse(this.state.data[index].deadline)}, now ${Date.now()}, left ${Date.parse(this.state.data[index].deadline) - Date.now()}`);
    const newItem = {
      id: this.state.data[index].id,
      body: this.state.data[index].body,
      create: this.state.data[index].create,
      remove: Date.now(),
      timeleft: Date.parse(this.state.data[index].deadline) - Date.now(),
      deadline: this.state.data[index].deadline,
      visible: false,
    };
    const newData = [
      ...this.state.data.slice(0, index),
      newItem,
      ...this.state.data.slice(index + 1),
    ];
    this.jsonService.updateData(newData, this.updateState);
  };
  updateState = (newData) => {
    this.setState({
      data: newData,
    });
  };

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
                deleteItem={this.hideItem}
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
