import React from "react"
import TreeViewItem from "../TreeViewItem/TreeViewItem"
import { DataType, DataTypeItem } from "../Explorer/Explorer"

interface TreeViewProps {
  data: DataType
}

const TreeView = React.memo(({ data }: TreeViewProps) => {

  const renderItem = (item: DataTypeItem) => (
    <TreeViewItem
      // onSelect={onSelect}
      itemData={item}
      key={item.uid}
    />
  )

  return (
    <>
      {data.items.map(renderItem)}
    </>
  )
})

export default TreeView