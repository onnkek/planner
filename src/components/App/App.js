import React, { Component } from "react";
import "./App.sass";
import Post from "../Post/Post";
import PostList from "../PostList/PostList";
import Header from "../Header/Header";
import ControlPanel from "../ControlPanel/ControlPanel";
import ItemAddForm from "../ItemAddForm";
import JSONBinService from "../../services/JSONBinService";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import OldItemsPage from "../pages/OldItemsPage/OldItemsPage";

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

  addItem = (body, deadline) => {
    let maxId = 1;
    if (this.state.data.length) {
      maxId = this.state.data.reduce((prev, cur) =>
        prev.id > cur.id ? prev : cur
      ).id++;
    }

    const newItem = {
      id: maxId,
      body: body,
      create: Date.now(),
      deadline: deadline,
      visible: true,
    };
    const newData = this.state.data ? [...this.state.data, newItem] : [newItem];
    this.jsonService.updateData(newData, this.updateState);
  };
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
    const newItem = {
      id: this.state.data[index].id,
      body: this.state.data[index].body,
      create: this.state.data[index].create,
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
        <ControlPanel onChange={this.addItem} />
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
