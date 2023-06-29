import React, { Component } from "react";
import "./OldItemsPage.sass";
import PostListContainer from "../../PostList/PostListContainer";
import Search from "../../Search/Search";

export default class OldItemsPage extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="search-containter">
          <Search />
        </div>
        <PostListContainer
          new={false}
          onDelete={this.props.deleteItem}
        />
      </div>
    );
  }
}
