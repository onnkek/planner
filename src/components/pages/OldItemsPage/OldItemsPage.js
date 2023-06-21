import React, { Component } from "react";
import "./OldItemsPage.sass";
import PostList from "../../PostList/PostList";

export default class OldItemsPage extends Component {
  render() {
    return (
      <>
        <PostList
          data={this.props.state.data}
          new={false}
          onDelete={this.props.deleteItem}
        />
      </>
    );
  }
}
