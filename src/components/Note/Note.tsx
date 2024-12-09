import React, { MouseEvent, useEffect, useState } from "react"
import "./Note.sass"
import lpIcon from '../../assets/icons/lp.svg'
import testIcon from '../../assets/icons/test.svg'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'
import icon5 from '../../assets/icons/icon5.svg'
import icon6 from '../../assets/icons/icon6.svg'
import icon7 from '../../assets/icons/icon7.svg'
import icon8 from '../../assets/icons/icon8.svg'
import icon9 from '../../assets/icons/icon9.svg'
import icon10 from '../../assets/icons/icon10.svg'
import folderIcon from '../../assets/icons/folder.svg'
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { Status } from "../../models/Status"
import { Spinner } from "reactstrap"
import { CheckLg, Pencil } from "react-bootstrap-icons"
import { isNote } from "../TreeViewItem/TreeViewItem"
import { openIconsMenu, setSelectItem, updateNotes } from "../../redux/NotesSlice"
import IconsMenu from "../IconsMenu/IconsMenu"
import Editor from "react-simple-code-editor"
import hljs from "highlight.js"
import ContentDivider from "../ContentDivider/ContentDivider"


export const getIcon = (name: string) => {
  switch (name) {
    case "lp":
      return lpIcon
    case "test":
      return testIcon
    case "icon1":
      return icon1
    case "icon2":
      return icon2
    case "icon3":
      return icon3
    case "icon4":
      return icon4
    case "icon5":
      return icon5
    case "icon6":
      return icon6
    case "icon7":
      return icon7
    case "icon8":
      return icon8
    case "icon9":
      return icon9
    case "icon10":
      return icon10
    default:
      return folderIcon
  }
}

const Note = () => {
  const dispatch = useAppDispatch()
  const select = useAppSelector(state => state.notes.selectItem)
  const [edit, setEdit] = useState(false)

  const [body, setBody] = useState("")
  const [label, setLabel] = useState("")
  const [icon, setIcon] = useState("")

  const status = useAppSelector(state => state.notes.status)
  const showIcons = useAppSelector(state => state.notes.iconsMenu)
  
  const [editorHeight, setEditorHeight] = useState(300)

  const editHandler = async () => {
    if (select) {
      setLabel(select.label)
      setIcon(select.icon)
      if (isNote(select)) {
        setBody(select?.body)
      }
      setEdit(!edit)
    }

  }
  const saveHandler = async () => {
    if (isNote(select)) {
      setBody(select.body)
      setLabel(select.label)
      setIcon(select.icon)
    }
    await dispatch(updateNotes({ body: body, label: label, icon: icon }))
    setEdit(!edit)
  }

  const changeIconHandler = async (e: MouseEvent<HTMLDivElement>) => {
    if (!showIcons) {
      e.stopPropagation()
      dispatch(openIconsMenu({ x: e.clientX, y: e.clientY }))
    }

  }

  const editButton = edit ? (
    status === Status.Loading ? (
      <Spinner className='spinner-small p-spinner' />
    ) : (
      <CheckLg size={20} type="button" className="p-icon icon-trash-3"
        onClick={saveHandler}
      />
    )
  ) : (
    <Pencil type="button" className="p-icon icon-trash-3"
      onClick={editHandler} />
  )
  useEffect(() => {
    hljs.configure({ 'languages': ['xml'] })
  }, [])
  return (
    <div className="note-container">

      {select && <>
        <div className="note-header">
          <div className="note-header__left">
            {showIcons && <IconsMenu icon={icon} setIcon={setIcon} />}
            {edit ? <div className="note-header__icon-input" onClick={changeIconHandler}>
              <img src={getIcon(icon)} className="note-header__icon note-header__icon_edit" />
            </div> :
              <img src={getIcon(select.icon)} className="note-header__icon" />
            }
            <div className="note-header__title">
              {edit ? (
                <input
                  className="note-header__label-input"
                  onChange={e => { setLabel(e.target.value) }}
                  value={label}
                />
              ) : (
                <div className="note-header__label">{select.label}</div>
              )}
            </div>
          </div>
          <div className="note-header__right">
            <div className="note-header__time">
              {new Date(Number(select.create)).toLocaleDateString("ru-RU", { day: 'numeric', year: 'numeric', month: 'numeric' })}
            </div>
            {editButton}
          </div>
        </div>
        {isNote(select) && !edit && <div className="note-body" dangerouslySetInnerHTML={{ __html: select.body }}></div>}
        {
          isNote(select) && edit &&
          <ContentDivider type="horizontal" initSize={editorHeight} hitZoneSize={10} callback={setEditorHeight}>
            <div className="note-body" dangerouslySetInnerHTML={{ __html: select.body }}></div>
            {edit && isNote(select) && <div className="note-editor">
              <Editor
                value={body}
                onValueChange={code => setBody(code)}
                highlight={code => hljs.highlightAuto(code).value}
                className="html-editor"
                padding={10}
                style={{
                  fontFamily: 'Consolas',
                  fontSize: 16,
                }}
              />
            </div>}
          </ContentDivider>
        }


      </>}
    </div>
  )
}
export default Note