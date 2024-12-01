import React, { MouseEvent, MouseEventHandler, useState } from "react"
import './TreeViewItem.sass'
import { INote } from "../../models/Note"
import IFolder from "../../models/Folder"
import TreeView from "../TreeView/TreeView"
import { getIcon } from "../Note/Note"
import folderIcon from '../../assets/icons/folder.svg'
import ContextMenu from "../ContextMenu/ContextMenu"
import { useAppDispatch } from "../../models/Hook"
import { openContextMenu } from "../../redux/NotesSlice"

interface TreeViewItemProps {
  itemData: IFolder | INote
  select: IFolder | undefined,
  setSelect: (arg0: IFolder | undefined) => void
}

export const isFolder = (object: any): object is IFolder => {
  return 'children' in object
}

const TreeViewItem = React.memo(({ itemData, select, setSelect }: TreeViewItemProps) => {

  const [showChildren, setShowChildren] = useState(true)

  const handleClick = () => setShowChildren(!showChildren)
  const dispatch = useAppDispatch()

  const onSelect = () => {
    // setSelect(itemData)
    console.log(itemData.uid.toString())
  }



  const contextMenuHandler = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(openContextMenu({ position: { x: event.clientX, y: event.clientY }, item: itemData }))
  }

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
  })

  return (
    <>
      <ul style={{ paddingLeft: "0px" }}>

        <div className="tree-view-item" onContextMenu={contextMenuHandler}>
          {isFolder(itemData) ? (
            <>
              {itemData.children.length > 0 && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                onClick={handleClick}
                className={`tree-view-item__control ${itemData.children.length > 0 && "tree-view-item__control_show"} ${showChildren && "tree-view-item__control_open"}`}
                viewBox="0 0 16 16">
                <path fill="white"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>}
              <img
                className="tree-view-item__icon"
                src={folderIcon}
                alt=""
              />
            </>
          ) : (
            <>
              <img
                className="tree-view-item__icon"
                src={getIcon(itemData.icon)}
                alt=""
              />
            </>
          )
          }
          <span
            className={`tree-view-item__label ${select?.uid === itemData.uid && "tree-view-item__label_select"}`}
            onClick={onSelect}
          >{itemData.label}</span>
        </div>
        {showChildren && isFolder(itemData) &&
          <ul style={{ paddingLeft: "22px" }}>
            <TreeView
              select={select} setSelect={setSelect}
              data={itemData}
            // onSelect={onSelect}
            />
          </ul>
        }
      </ul>
    </>

  )
})

export default TreeViewItem