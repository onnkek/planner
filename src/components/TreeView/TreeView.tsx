import React, { Dispatch, SetStateAction } from "react"
import TreeViewItem from "../TreeViewItem/TreeViewItem"
import { INote } from "../../models/Note"

interface TreeViewProps {
  data: INote

  select: INote | undefined,
  setSelect: (arg0: INote) => void

}

const TreeView = React.memo(({ data, select, setSelect }: TreeViewProps) => {

  const renderItem = (item: INote) => (
    <TreeViewItem
      // onSelect={onSelect}
      select={select} setSelect={setSelect}
      itemData={item}
      key={item.uid}
    />
  )

  return (
    <>
      {data.children.map(renderItem)}
    </>
  )
})

export default TreeView