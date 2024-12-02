import React, { useState } from "react"
import "./ContextMenu.sass"
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { addItem } from "../../redux/NotesSlice"
import { isFolder } from "../TreeViewItem/TreeViewItem"

interface ContextMenuProps {
  position: { x: number, y: number }
}



const ContextMenu = ({ position }: ContextMenuProps) => {
  const dispatch = useAppDispatch()
  const selectItem = useAppSelector(store => store.notes.selectItem)
  const state = useAppSelector(store => store.notes.notes)

  const createNoteHandler = () => {
    dispatch(addItem({ type: "note" }))
  }
  const createFolderHandler = () => {
    dispatch(addItem({ type: "folder" }))
  }

  const removeNoteHandler = () => {
    // dispatch(addItem({ type: "folder" }))
  }
  const removeFolderHandler = () => {
    // dispatch(addItem({ type: "folder" }))
  }


  return (
    <div className="context-menu" style={{ top: position.y, left: position.x }}>
      {isFolder(selectItem) ? (<>
        <div className="context-menu__item" onClick={createFolderHandler}>Create folder</div>
        <div className="context-menu__item" onClick={removeFolderHandler}>Remove folder</div>
        <div className="context-menu__item" onClick={createNoteHandler}>Create note</div>

      </>) : (
        <div className="context-menu__item" onClick={removeNoteHandler}>Remove note</div>
      )}
    </div>
  )
}
export default ContextMenu