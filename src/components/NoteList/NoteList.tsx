import React, { useEffect } from "react"
import "./NoteList.sass"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Post from "../Post/Post"
import { fetchPosts } from "../../redux/PostListSlice"
import IPost from '../../models/Post'
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { getBadges } from "../../redux/BadgesSlice"
import { Status } from "../../models/Status"
import PostPlaceholder from "../UI/PostPlaceholder/PostPlaceholder"
import { getNotes } from "../../redux/NotesSlice"
import Note from "../Note/Note"
import { INote } from "../../models/Note"
import NoteListItem from "../NoteListItem/NoteListItem"
import IFolder from "../../models/Folder"

// interface PropsType { }

const NoteList: React.FC = () => {

  const dispatch = useAppDispatch()
  const notes: IFolder = useAppSelector(state => state.notes.notes)
  const status = useAppSelector(state => state.notes.status)

  // useEffect(() => {
  //   if (status === Status.Idle) {
  //     // dispatch(fetchPosts())
  //     dispatch(getNotes())
  //   }
  // }, [status, dispatch])



  const renderItems = (data: any) => {
    return data.map((item: INote) => {
      const { uid, label } = item


      return (
        <CSSTransition key={uid} timeout={200} classNames="item">
          <li key={item.uid} className="planner-list">
            <NoteListItem name={item.label} icon={item.icon} />
          </li>
        </CSSTransition>
      )

    })
  }

  if (status === Status.Loading && notes) {
    return (
      <>
        <PostPlaceholder />
        <PostPlaceholder />
        <PostPlaceholder />
      </>
    )
  }

  const items = renderItems(notes)
  return (
    <div className="planner">
      <ul className="planner-container">
        <TransitionGroup className="todo-list">{items}</TransitionGroup>
      </ul>
    </div>
  )
}
export default NoteList
