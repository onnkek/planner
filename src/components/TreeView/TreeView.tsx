import React from "react"
import TreeViewItem from "../TreeViewItem/TreeViewItem"
import IFolder from "../../models/Folder"
import { INote } from "../../models/Note"
import "./TreeView.sass"

interface TreeViewProps {
  data: IFolder
  select: IFolder | undefined
  setSelect: (arg0: IFolder | undefined) => void
}

const TreeView = React.memo(({ data, select, setSelect }: TreeViewProps) => {

  const renderItems = (item: IFolder | INote) => (
    <TreeViewItem
      // onSelect={onSelect}
      select={select} setSelect={setSelect}
      itemData={item}
      key={item.uid}
    />
  )

  return (
    <>
      {data.children.map(renderItems)}
    </>
  )
})

export default TreeView