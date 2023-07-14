import React, { Component } from "react"
import "./OldItemsPage.sass"
import Search from "../../Search/Search"
import PostList from "../../PostList/PostList"

const OldItemsPage = () => {

  return (
    <div className="app-container">
      <div className="search-containter">
        <Search />
      </div>
      <PostList isNew={false} />
    </div>
  )
}
export default OldItemsPage