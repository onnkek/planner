import React, { Component } from "react";
import "./OldItemsPage.sass";
import PostListContainer from "../../PostList/PostListContainer";

export default class OldItemsPage extends Component {
  render() {
    return (
      <>
        <PostListContainer
          new={false}
          onDelete={this.props.deleteItem}
        />
      </>
    );
  }
}
