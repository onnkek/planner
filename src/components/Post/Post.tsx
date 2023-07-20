import React, { useState } from "react"
import "./Post.sass"
import { CheckLg, Link45deg, Pencil, Trash3 } from "react-bootstrap-icons"
import { hidePost, removePost, savePost } from "../../redux/PostListReducer"
import Spinner from "../UI/Spinner/Spinner"
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { getDate, getDeadline, getProgress } from "../../utils/date"
import IPost from "../../models/Post"

const Post: React.FC<IPost> = (props) => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.posts.removing)
  const [edit, setEdit] = useState(false)
  const [body, setBody] = useState(props.body)
  const [deadline, setDeadline] = useState(props.deadline)

  const { id, create, badges } = props

  const deleteHandler = () => {
    if (props.visible) {
      dispatch(hidePost({ id }))
    } else {
      dispatch(removePost({ id }))
    }
  }

  const editHandler = async () => {

    await dispatch(savePost({ id, body, deadline }))
    setEdit(!edit)
  }

  const deleteButton = status.some(postId => postId === props.id) ? (
    <Spinner className='spinner-small p-spinner' />
  ) : (
    <Trash3 onClick={deleteHandler} className="p-icon icon-trash-3" />
  )
  const editButton = edit ? (
    <CheckLg size={20} type="button" className="p-icon icon-trash-3"
      onClick={editHandler} />
  ) : (
    <Pencil type="button" className="p-icon icon-trash-3"
      onClick={() => setEdit(!edit)} />
  )
  const deadlineContent = edit ? (
    <input type="datetime-local" name="deadline"
      className="form-control input-date edit-deadline" value={deadline}
      onChange={e => { setDeadline(e.target.value) }}
    />
  ) : (getDeadline(deadline))
  const bodyContent = edit ? (
    <textarea
      autoFocus className="form-control"
      name="body" rows={body.length / 40}
      placeholder="What should be done?" value={body}
      onChange={e => { setBody(e.target.value) }}
    ></textarea>
  ) : (<p>{body}</p>)


  const badgesContent = () => badges.map(badge => {
    return (
      <span key={badge.id} className={`badge rounded-pill text-bg-${badge.color}`}>
        {badge.text}
      </span>)
  })


  return (
    <>
      <div className="item-wrapper">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="p-badges">
                {badges && badgesContent()}
              </div>
            </div>
            <div className="row">
              {bodyContent}
            </div>
          </div>
          <div className="col-5">
            <div className="row item-flex">
              <div className="col">
                <div className="">
                  <div className="p-min">
                    <div
                      className="progress mb-2"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${getProgress(deadline, create)}%` }}
                      ></div>
                    </div>
                    <div className="mb-1">
                      Deadline: {deadlineContent}
                    </div>
                    <div className="">
                      Time left: {getDate(deadline)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="fix">
                <div className="item-flex-btns">
                  <Link45deg size={20} className="p-icon icon-trash-3" />
                  {editButton}
                  {deleteButton}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Post
