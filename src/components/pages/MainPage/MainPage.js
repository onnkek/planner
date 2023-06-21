import React, { Component } from "react";
import "./MainPage.sass";
import PostList from "../../PostList/PostList";

export default class MainPage extends Component {

  render() {
    return (
      <>
        <PostList
          data={this.props.state.data}
          new={true}
          onDelete={this.props.deleteItem}
        />
      </>
    );
  }
}
