import React, { Component } from "react"
import "./MainPage.sass"
import Search from "../../Search/Search"
import { PlusLg } from "react-bootstrap-icons"
import PostList from "../../PostList/PostList"

const MainPage = () => {

  return (
    <div className="app-container">
      <div className="search-containter">
        <Search />
        <button type="button" className="add-button btn btn-primary outline"
          data-bs-target="#add-modal" data-bs-toggle="modal"
        ><PlusLg size={22} /></button>
      </div>
      <PostList isNew={true} />
    </div>
  )
}
export default MainPage