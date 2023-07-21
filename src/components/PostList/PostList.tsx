import React, { useEffect } from "react"
import "./PostList.sass"
import Spinner from "../UI/Spinner/Spinner"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Post from "../Post/Post"
import { fetchPosts } from "../../redux/PostListReducer"
import IPost from '../../models/Post'
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { getBadges } from "../../redux/BadgesSlice"
import { Status } from "../../models/Status"

interface PropsType {
  isNew: boolean
}

const PostList: React.FC<PropsType> = ({ isNew }) => {

  const dispatch = useAppDispatch()
  const posts: IPost[] = useAppSelector(state => state.posts.posts)
  const status = useAppSelector(state => state.posts.statusFetchPosts)

  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(fetchPosts())
      dispatch(getBadges())
    }
  }, [status, dispatch])



  const renderItems = (data: any) => {
    return data.map((item: IPost) => {
      const { id, visible } = item
      if (isNew) {
        if (visible) {
          return (
            <CSSTransition key={id} timeout={200} classNames="item">
              <li key={item.id} className="planner-list">
                <Post {...item} />
              </li>
            </CSSTransition>
          )
        }
      } else {
        if (!visible) {
          return (
            <CSSTransition key={id} timeout={200} classNames="item">
              <li key={item.id} className="planner-list">
                <Post {...item} />
              </li>
            </CSSTransition>
          )
        }
      }
    })
  }

  if (status === Status.Loading && posts) {
    return <Spinner className='spinner-big' />
  }

  const items = renderItems(posts)
  return (
    <div className="planner">
      <ul className="planner-container">
        <TransitionGroup className="todo-list">{items}</TransitionGroup>
      </ul>
    </div>
  )
}
export default PostList
