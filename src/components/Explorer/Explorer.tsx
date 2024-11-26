import React, { useCallback, useMemo } from "react"
import "./Explorer.sass"
import TreeView from "../TreeView/TreeView"
import testIcon from '../../assets/icons/test.svg'
import folderIcon from '../../assets/icons/folder.svg'

export interface DataTypeItem {
  uid: number,
  label: string,
  icon: string | undefined;
  select: boolean,
  children: DataType
}

export interface DataType {
  items: DataTypeItem[]
}

const Explorer = React.memo(() => {


  // const getIcon = (element) => {
  //   if (element instanceof Node) {
  //     return nodeIcon;
  //   } else if (element instanceof Branch) {
  //     return branchIcon;
  //   } else if (element instanceof Switch) {
  //     return switchIcon;
  //   } else if (element instanceof Generation) {
  //     return genIcon;
  //   } else if (element instanceof Transformer) {
  //     return transIcon;
  //   } else if (element instanceof Load) {
  //     return loadIcon;
  //   } else {
  //     return folderIcon;
  //   }

  // }



  const getData = useMemo(() => {
    const data: DataType = {
      items: [
        {
          uid: 1,
          label: "Notes",
          icon: folderIcon,
          select: false,
          children: {
            items: [
              {
                uid: 2,
                label: "Technology",
                icon: folderIcon,
                select: false,
                children: {
                  items: [
                    {
                      uid: 3,
                      label: "Note 1",
                      icon: testIcon,
                      select: false,
                      children: {
                        items: [

                        ]
                      }
                    },
                    {
                      uid: 4,
                      label: "Note 2",
                      icon: testIcon,
                      select: false,
                      children: {
                        items: [

                        ]
                      }
                    },
                    {
                      uid: 5,
                      label: "Note 3",
                      icon: testIcon,
                      select: false,
                      children: {
                        items: [

                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
    // for (let i = 0; i < scheme.elements.length; i++) {
    //   const type = getType(scheme.elements[i]);

    //   let typeIndex = -1;
    //   if (data[0].children.length) {
    //     typeIndex = data[0].children.findIndex(x => x.label === type)
    //   }
    //   const isSelected = (selected.length > 0 && selected[0].id === scheme.elements[i].id) ? true : false;
    //   if (typeIndex !== -1) {
    //     data[0].children[typeIndex].children.push(
    //       { uid: scheme.elements[i].id, select: isSelected, label: scheme.elements[i].name, icon: getIcon(scheme.elements[i]), children: [] }
    //     )
    //   } else {
    //     data[0].children.push({
    //       uid: i, label: getType(scheme.elements[i]), select: false, icon: folderIcon, children: [
    //         { uid: scheme.elements[i].id, select: isSelected, label: scheme.elements[i].name, icon: getIcon(scheme.elements[i]), children: [] }
    //       ]
    //     })
    //   }

    // }
    return data
  }, [])




  //const onSelectHandler = useCallback((e) => onSelect(e), [onSelect]);

  return (
    <div className="explorer">
      {/* BETA */}
      {/* <div style={{ color: "red", fontWeight: 900, padding: "0px 10px 10px 10px", display: "flex", justifyContent: "center", fontSize: "20px" }}>
        <div style={{ width: "100%", border: "1px solid red", padding: "5px 15px", borderRadius: "4px", backgroundColor: "#fdafaf", textAlign: "center" }}>BETA PANEL</div>
      </div> */}
      {/* BETA */}

      {/* <TreeView data={getData} onSelect={onSelect} /> */}
      <TreeView data={getData} />

    </div>
  )
})

export default Explorer

// export const getType = (element) => {

//   if (element instanceof Node) {
//     return "Node";
//   } else if (element instanceof Branch) {
//     return "Branch";
//   } else if (element instanceof Switch) {
//     return "Switch";
//   } else if (element instanceof Generation) {
//     return "Generation";
//   } else if (element instanceof Transformer) {
//     return "Transformer";
//   } else if (element instanceof Load) {
//     return "Load";
//   } else {
//     return "Unknown";
//   }

// }