import React from "react"
import "./IconsMenu.sass"
import { useAppSelector } from "../../models/Hook"
import { getIcon } from "../Note/Note"

interface IconsMenuProps {
  // position: { x: number, y: number }
  icon: string
  setIcon: (arg0: string) => void
}



const IconsMenu = ({ icon, setIcon }: IconsMenuProps) => {
  const iconsMenuPosition = useAppSelector(store => store.notes.iconsMenuPosition)

  return (
    <div className="icons-editor" style={{ top: iconsMenuPosition.y, left: iconsMenuPosition.x }}>
      <div className="icons-editor__row">
        <img src={getIcon("folder")} onClick={() => setIcon("folder")} />
        <img src={getIcon("lp")} onClick={() => setIcon("lp")} />
        <img src={getIcon("test")} onClick={() => setIcon("test")} />
        <img src={getIcon("icon1")} onClick={() => setIcon("icon1")} />
        <img src={getIcon("icon2")} onClick={() => setIcon("icon2")} />
      </div>
      <div className="icons-editor__row">
        <img src={getIcon("icon3")} onClick={() => setIcon("icon3")} />
        <img src={getIcon("icon4")} onClick={() => setIcon("icon4")} />
        <img src={getIcon("icon5")} onClick={() => setIcon("icon5")} />
        <img src={getIcon("icon6")} onClick={() => setIcon("icon6")} />
        <img src={getIcon("icon7")} onClick={() => setIcon("icon7")} />
      </div>
      <div className="icons-editor__row">
        <img src={getIcon("icon8")} onClick={() => setIcon("icon8")} />
        <img src={getIcon("icon9")} onClick={() => setIcon("icon9")} />
        <img src={getIcon("icon10")} onClick={() => setIcon("icon10")} />
      </div>


    </div>
  )
}
export default IconsMenu