import React, { Component, useState } from "react"
import "./Note.sass"
import { NoteDataType } from "../pages/NotesPage/NotesPage"
import { INote } from "../../models/Note"
import testIcon from '../../assets/icons/test.svg'
import folderIcon from '../../assets/icons/folder.svg'
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { Status } from "../../models/Status"
import { Spinner } from "reactstrap"
import { CheckLg, Pencil } from "react-bootstrap-icons"
import IFolder from "../../models/Folder"

interface NoteProps {
  select: IFolder | undefined
  setSelect: (arg0: IFolder | undefined) => void
}

export const getIcon = (name: string) => {
  switch (name) {
    case "test":
      return testIcon
    default:
      return folderIcon
  }
}

const Note = ({ select, setSelect }: NoteProps) => {
  const dispatch = useAppDispatch()
  const [edit, setEdit] = useState(false)
  // const [body, setBody] = useState(select?.body)
  const statusSave = useAppSelector(state => state.notes.statusSavePost)
  const notes = useAppSelector(state => state.notes.notes)
  const uid = select?.uid
  console.log("RERENDER NOTE.TSX")
  console.log(select)
  // const editHandler = async () => {
  //   if (body && uid) {
  //     await dispatch(saveNote({ uid, body }))
  //     setEdit(!edit)
  //   }
  // }

  const editButton = edit ? (
    statusSave === Status.Loading ? (
      <Spinner className='spinner-small p-spinner' />
    ) : (
      <CheckLg size={20} type="button" className="p-icon icon-trash-3"
      // onClick={editHandler} 
      />
    )
  ) : (
    <Pencil type="button" className="p-icon icon-trash-3"
      onClick={() => setEdit(!edit)} />
  )

  return (
    <div className="note-container">
      {select && <>
        <div className="note-header">
          <div className="note-header__left">
            {/* <img src={getIcon(select.icon)} className="note-header__icon" /> */}
            <div className="note-header__title">
              {select.label}
            </div>
          </div>
          <div className="note-header__right">
            <div className="note-header__time">
              {select.create}
            </div>
            {editButton}
          </div>
        </div>
        <div className="note-body" dangerouslySetInnerHTML={{ __html: select.label }}></div>
        {edit && <div className="note-editor">
          <h5>Note editor</h5>
          {/* <textarea
            className="note-editor__area"
            onChange={e => { setBody(e.target.value) }}
          >{body}</textarea> */}
        </div>}
      </>}
    </div>
  )
}
export default Note