import React, { Component, useState } from "react"
import "./Note.sass"
import { NoteDataType } from "../pages/NotesPage/NotesPage"

interface NoteProps {
  data: NoteDataType
}

const Note = ({ data }: NoteProps) => {



  return (
    <div className="note-container">
      <div className="note-body" dangerouslySetInnerHTML={{ __html: data.body }}></div>
      <div className="note-editor">
        <h5>Note editor</h5>
        <textarea className="note-editor__area">{data.body}</textarea>
      </div>
    </div>
  )
}
export default Note