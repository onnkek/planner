import React, { Component, MouseEvent, useEffect, useState } from "react"
import "./NotesPage.sass"
import Note from "../../Note/Note"
import NoteList from "../../NoteList/NoteList"
import { INote } from "../../../models/Note"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import { closeContextMenu, getNotes } from "../../../redux/NotesSlice"
import { Status } from "../../../models/Status"
import IFolder from "../../../models/Folder"
import TreeView from "../../TreeView/TreeView"
import ContextMenu from "../../ContextMenu/ContextMenu"

export interface NoteDataType {
  uid: number,
  body: string,
  icon: string
}

const NotesPage = () => {

  const dispatch = useAppDispatch()
  const notes: IFolder = useAppSelector(state => state.notes.notes)
  const status = useAppSelector(state => state.notes.status)
  const select = useAppSelector(state => state.notes.selectItem)

  const contextMenu = useAppSelector(store => store.notes.contextMenu)
  const contextMenuPosition = useAppSelector(store => store.notes.contextMenuPosition)

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
  })
  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getNotes())
    }
  }, [status, dispatch])

  const closeContextMenuHandler = () => {
    dispatch(closeContextMenu())
  }

  return (
    <div className="notes-page" onClick={closeContextMenuHandler}>
      <div className="treeview">
        <TreeView data={notes} />
      </div>

      {select && <Note />}
      {contextMenu && <ContextMenu position={contextMenuPosition} />}
    </div>
  )
}
export default NotesPage