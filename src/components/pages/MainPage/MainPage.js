import React, { Component } from "react";
import "./MainPage.sass";
import PostListContainer from "../../PostList/PostListContainer";
import Search from "../../Search/Search";
import { PlusLg } from "react-bootstrap-icons";

export default class MainPage extends Component {

  render() {
    return (
      <div className="app-container">
        <div className="search-containter">
          <Search />
          <button type="button" className="add-button btn btn-primary outline"
            data-bs-target="#add-modal" data-bs-toggle="modal"
          ><PlusLg size={22}/></button>
        </div>
        <PostListContainer
          new={true}
          onDelete={this.props.deleteItem}
        />
      </div>
    );
  }
}
