import React, { Component } from "react";
import "./MainPage.sass";
import PostListContainer from "../../PostList/PostListContainer";

export default class MainPage extends Component {

  render() {
    return (
      <>
        <PostListContainer
          new={true}
          onDelete={this.props.deleteItem}
        />
      </>
    );
  }
}
