import React, { Component } from "react";
import "./OldItemsPage.sass";
import Search from "../../Search/Search";
import PostList from "../../PostList/PostList";

export default class OldItemsPage extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="search-containter">
          <Search />
        </div>
        <PostList
          new={false}
          onDelete={this.props.deleteItem}
        />
      </div>
    );
  }
}
