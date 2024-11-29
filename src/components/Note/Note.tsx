import React, { Component, useState } from "react"
import "./Note.sass"
import { NoteDataType } from "../pages/NotesPage/NotesPage"
import { INote } from "../../models/Note"
import testIcon from '../../assets/icons/test.svg'
import folderIcon from '../../assets/icons/folder.svg'

interface NoteProps {
  data: INote | undefined
}

export const getIcon = (name: string) => {
  switch (name) {
    case "test":
      return testIcon
    default:
      return folderIcon
  }
}

const Note = ({ data }: NoteProps) => {



  return (
    <div className="note-container">
      {data && <>
        <div className="note-header">
          <div className="note-header__left">
            <img src={getIcon(data.icon)} className="note-header__icon" />
            <div className="note-header__title">
              {data.label}
            </div>
          </div>
          <div className="note-header__right">
            <div className="note-header__time">
              {data.create}
            </div>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
        <div className="note-body" dangerouslySetInnerHTML={{ __html: data.body }}></div>
        {/* <div className="note-editor">
          <h5>Note editor</h5>
          <textarea className="note-editor__area">{data.body}</textarea>
        </div> */}
      </>}
    </div>
  )
}
export default Note