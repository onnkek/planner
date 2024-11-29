import React, { Component, useState } from "react"
import "./NoteListItem.sass"
import { NoteDataType } from "../pages/NotesPage/NotesPage"

interface NoteListItemProps {
  name: string,
  icon: string
}

const NoteListItem = ({ name, icon }: NoteListItemProps) => {



  return (
    <div className="note-container">
      <div className="note-body">{name}</div>

    </div>
  )
}
export default NoteListItem