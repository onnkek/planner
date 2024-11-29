import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo } from "react"
import "./Explorer.sass"
import TreeView from "../TreeView/TreeView"
import testIcon from '../../assets/icons/test.svg'
import folderIcon from '../../assets/icons/folder.svg'
import { Status } from "../../models/Status"
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { INote } from "../../models/Note"
import { getNotes } from "../../redux/NotesSlice"


interface ExplorerProps {
  select: INote | undefined,
  setSelect: (arg0: INote) => void
  posts: INote
}
const Explorer = React.memo(({ posts, select, setSelect }: ExplorerProps) => {

  

  return (
    <div className="explorer">
      
      <TreeView select={select} setSelect={setSelect} data={posts} />

    </div>
  )
})

export default Explorer

