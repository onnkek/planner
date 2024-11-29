import React, { Component, useEffect, useState } from "react"
import "./NotesPage.sass"
import Explorer from "../../Explorer/Explorer"
import Note from "../../Note/Note"
import NoteList from "../../NoteList/NoteList"
import { INote } from "../../../models/Note"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import { getNotes } from "../../../redux/NotesSlice"
import { Status } from "../../../models/Status"

export interface NoteDataType {
  uid: number,
  body: string,
  icon: string
}

const NotesPage = () => {

  const dispatch = useAppDispatch()
  const posts: INote = useAppSelector(state => state.notes.notes)
  const status = useAppSelector(state => state.notes.status)

  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getNotes())
    }
  }, [status, dispatch])

  const [select, setSelect] = useState<INote>()


  console.log("RERENDER NOTE PAGE")
  return (
    // <div className="app-container">
    <div className="notes-page">
      <Explorer select={select} setSelect={setSelect} posts={posts} />
      <Note data={select} />
    </div>

    // </div >
  )
}
export default NotesPage