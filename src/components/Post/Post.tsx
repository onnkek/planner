import React, { useState } from "react"
import "./Post.sass"
import { CheckLg, Link45deg, Pencil, Trash3 } from "react-bootstrap-icons"
import { hidePost, removePost, savePost } from "../../redux/PostListReducer"
import Spinner from "../UI/Spinner/Spinner"
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import IPost from "../../models/Post"

const Post: React.FC<IPost> = (props) => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.posts.removing)
  const [edit, setEdit] = useState(false)
  const [body, setBody] = useState(props.body)
  const [deadline, setDeadline] = useState(props.deadline)



  const getDate = () => {
    const deadlineDate = Date.parse(props.deadline)
    const currentTime = deadlineDate - Date.now()
    let result = ""
    const hours = getNumber(Math.floor(currentTime / (1000 * 60 * 60))),
      minutes = getNumber(Math.floor((currentTime / (1000 * 60)) % 60)),
      seconds = getNumber(Math.floor((currentTime / 1000) % 60))
    result += Number(hours) > 0 ? `${hours}:` : "00:"
    result += Number(minutes) > 0 ? `${minutes}:` : "00:"
    result += Number(seconds) > 0 ? seconds : "00"
    return result
  }
  // const getTimeLeft = (time) => {
  //   let result = ""
  //   const hours = getNumber(Math.floor(time / (1000 * 60 * 60))),
  //     minutes = getNumber(Math.floor((time / (1000 * 60)) % 60)),
  //     seconds = getNumber(Math.floor((time / 1000) % 60))
  //   result += hours > 0 ? `${hours}:` : "00:"
  //   result += minutes > 0 ? `${minutes}:` : "00:"
  //   result += seconds > 0 ? seconds : "00"
  //   return result
  // }
  const getNumber = (number: number) => (number < 10 ? `0${number}` : number)

  const getDeadline = (deadline: string) => {
    const date = new Date(deadline),
      day = date.getDate(),
      month = String(date.getMonth() + 1).padStart(2, "0"),
      year = date.getFullYear(),
      hour = getNumber(date.getHours()),
      minute = getNumber(date.getMinutes())
    return `${day}.${month}.${year} ${hour}:${minute}`
  }
  const { id } = props
  const onClickHandler = () => {
    if (props.visible) {
      dispatch(hidePost({ id }))
    } else {
      dispatch(removePost({ id }))
    }
  }
  const deadlineDate = Date.parse(deadline)


  const editHandler = async () => {

    await dispatch(savePost({ id, body, deadline }))
    setEdit(!edit)
  }


  const fullTime = deadlineDate - Number(props.create)
  let currentTime = deadlineDate - Date.now()

  if (currentTime < 0) {
    currentTime = 0
  }
  const prog = (currentTime / fullTime) * 100


  const deleteButton = status.some(postId => postId === props.id) ? (
    <Spinner className='spinner-small p-spinner' />
  ) : (
    <Trash3 onClick={onClickHandler} className="p-icon icon-trash-3" />
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

  return (
    <>
      <div className="item-wrapper">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="p-badges">
                <span className="badge rounded-pill text-bg-primary">Test</span>
                <span className="badge rounded-pill text-bg-warning">ИСП</span>
                <span className="badge rounded-pill text-bg-danger">Important</span>
                <span className="badge rounded-pill text-bg-info">Work</span>
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
                        style={{ width: `${prog}%` }}
                      ></div>
                    </div>
                    <div className="mb-1">
                      Deadline: {deadlineContent}
                    </div>
                    <div className="">
                      Time left: {getDate()}
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
