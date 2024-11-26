import React, { Component, useState } from "react"
import "./NotesPage.sass"
import Explorer from "../../Explorer/Explorer"
import Note from "../../Note/Note"

export interface NoteDataType {
  uid: number,
  body: string,
  icon: string
}

const NotesPage = () => {

  const data: NoteDataType = {
    uid: 1,
    body: `<h1>Тут будет название заметки</h1>
    <p>Свободная HTML разметка встраиваемая сюда для вёрстки заметки</p>
    <b>123</b>
    <span style="color: red">123</span>
    <br>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaA23Orn8cIauyUDtC-hmrUTguMwW9q5kyvg&s">
    <br>
    
    `,
    icon: ""
  }

  return (
    <div className="app-container">
      <div className="notes-page">
        <Explorer />
        <Note data={data} />
      </div>

    </div >
  )
}
export default NotesPage