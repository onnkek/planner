import React, { Component, useState } from "react"
import "./MainPage.sass"
import Search from "../../Search/Search"
import { PlusLg } from "react-bootstrap-icons"
import PostList from "../../PostList/PostList"
import Modal from "../../Modal/Modal"
import ItemAddForm from "../../ItemAddForm/ItemAddForm"

const MainPage = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="app-container">
      <div className="search-containter">
        <Search />
        <button
          type="button"
          className="add-button btn btn-primary outline"
          onClick={() => setShowModal(true)}

        ><PlusLg size={22} /></button>
      </div>
      <PostList isNew={true} />
      <Modal title='Add new post' show={showModal} setShow={setShowModal}>
        <ItemAddForm closeModal={() => setShowModal(false)}/>
      </Modal >
    </div >
  )
}
export default MainPage