import React, { Dispatch, SetStateAction, useState } from "react"
import './TreeViewItem.sass'
import arrowIcon from '../../assets/icons/arrow.svg'
import TreeView from "../TreeView/TreeView"
import { INote } from "../../models/Note"
import { getIcon } from "../Note/Note"
// import { TreeType } from "../Explorer/Explorer"

interface TreeViewItemProps {
  itemData: INote
  select: INote | undefined,
  setSelect: (arg0: INote) => void
}


const TreeViewItem = React.memo(({ itemData, select, setSelect }: TreeViewItemProps) => {

  const [showChildren, setShowChildren] = useState(true)

  const handleClick = () => setShowChildren(!showChildren)

  const onSelect = () => {
    setSelect(itemData)
    console.log(itemData.uid.toString())
  }

  return (
    <ul style={{ paddingLeft: "0px" }}>

      <div className="tree-view-item" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"

          onClick={handleClick}
          className={`tree-view-item__control ${itemData.children.length > 0 && "tree-view-item__control_show"} ${showChildren && "tree-view-item__control_open"}`} viewBox="0 0 16 16">
          <path fill="white"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
        </svg>
        {/* <img
          onClick={handleClick}
          className={`tree-view-item__control ${itemData.children.length > 0 && "tree-view-item__control_show"} ${showChildren && "tree-view-item__control_open"}`}
          src={arrowIcon}
          alt=""
        /> */}
        <img
          className="tree-view-item__icon"
          src={getIcon(itemData.icon)}
          alt=""
        />
        <span
          // className="tree-view-item__label"
          className={`tree-view-item__label ${select?.uid === itemData.uid && "tree-view-item__label_select"}`}
          onClick={onSelect}
        >{itemData.label}</span>
      </div>
      {showChildren &&
        <ul style={{ paddingLeft: "10px" }}>
          <TreeView
            select={select} setSelect={setSelect}
            data={itemData}
          // onSelect={onSelect}
          />
        </ul>
      }
    </ul>
  )
})

export default TreeViewItem