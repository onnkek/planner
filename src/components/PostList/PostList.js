import React, { Component } from "react";
import "./PostList.sass";
import Post from "../Post/Post";
import Spinner from "../UI/Spinner/Spinner";

export default class PostList extends Component {
  renderItems = (data) => {
    data = data.sort((item1, item2) =>
      item1.deadline > item2.deadline ? 1 : -1
    );
    return data.map((item) => {
      const { id, visible, ...itemProps } = item;
      if (this.props.new) {
        if (visible === false) {
          return;
        }
        return (
          <li key={item.id} className="planner-list">
            <Post {...itemProps} onDelete={() => this.props.onDelete(id)} />
          </li>
        );
      } else {
        if (!visible === false) {
          return;
        }
        return (
          <li key={item.id} className="planner-list">
            <Post {...itemProps} onDelete={() => this.props.onDelete(id)} />
          </li>
        );
      }
    });
  };

  render() {
    const { data } = this.props;

    if (!data.length) {
      return <Spinner />;
    }

    const items = this.renderItems(data);

    return (
      <div className="planner">
        <div className="app-container">
          <ul className="planner-container">{items}</ul>
        </div>
      </div>
    );
  }
}
