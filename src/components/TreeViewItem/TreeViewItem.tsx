import React, { useState } from "react"
import './TreeViewItem.sass'
import arrowIcon from '../../assets/icons/arrow.svg'
import TreeView from "../TreeView/TreeView"
import { DataType, DataTypeItem } from "../Explorer/Explorer"

interface TreeViewItemProps {
  itemData: DataTypeItem
}


const TreeViewItem = React.memo(({ itemData }: TreeViewItemProps) => {

  const [showChildren, setShowChildren] = useState(true)

  const handleClick = () => setShowChildren(!showChildren)

  return (
    <ul style={{ paddingLeft: "0px" }}>

      <div className="tree-view-item" >
        <div
          className={`tree-view-item__area ${itemData.select && "tree-view-item__area_select"}`}
          // onClick={onSelect}
          data-uid={itemData.uid}
        ></div>
        <img
          onClick={handleClick}
          className={`tree-view-item__control ${itemData.children.items.length > 0 && "tree-view-item__control_show"} ${showChildren && "tree-view-item__control_open"}`}
          src={arrowIcon}
          alt=""
        />
        <img
          className="tree-view-item__icon"
          src={itemData.icon}
          alt=""
        />
        <span>{itemData.label}</span>
      </div>
      {showChildren &&
        <ul style={{ paddingLeft: "10px" }}>
          <TreeView
            data={itemData.children}
          // onSelect={onSelect}
          />
        </ul>
      }
    </ul>
  )
})

export default TreeViewItem