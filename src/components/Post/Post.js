import React, { useState } from "react"
import "./Post.sass"
import { CheckLg, ChevronDown, Link45deg, Pencil, Save, Trash3 } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { hidePost, removePost, savePost } from "../../redux/PostListReducer"
import Spinner from "../UI/Spinner"

const Post = (props) => {

  const dispatch = useDispatch()
  const status = useSelector(state => state.posts.removing)
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
    result += hours > 0 ? `${hours}:` : "00:"
    result += minutes > 0 ? `${minutes}:` : "00:"
    result += seconds > 0 ? seconds : "00"
    return result
  }
  const getTimeLeft = (time) => {
    let result = ""
    const hours = getNumber(Math.floor(time / (1000 * 60 * 60))),
      minutes = getNumber(Math.floor((time / (1000 * 60)) % 60)),
      seconds = getNumber(Math.floor((time / 1000) % 60))
    result += hours > 0 ? `${hours}:` : "00:"
    result += minutes > 0 ? `${minutes}:` : "00:"
    result += seconds > 0 ? seconds : "00"
    return result
  }
  const getNumber = (number) => (number < 10 ? `0${number}` : number)

  const getDeadline = (deadline) => {
    const date = new Date(deadline),
      day = date.getDate(),
      month = String(date.getMonth() + 1).padStart(2, "0"),
      year = date.getFullYear(),
      hour = getNumber(date.getHours()),
      minute = getNumber(date.getMinutes())
    return `${day}.${month}.${year} ${hour}:${minute}`
  }

  const { create, id, visible } = props

  const onClickHandler = () => {
    if (visible) {
      dispatch(hidePost({ id }))
    } else {
      dispatch(removePost({ id }))
    }
  }
  const deadlineDate = Date.parse(deadline)
  const button = status.some(postId => postId === id) ? (
    <button className="btn-icon btn btn-primary" type="button" disabled>
      <div
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />
    </button>
  ) : (
    <button
      type="button"
      className="btn-icon btn btn-primary"
      onClick={onClickHandler}
    >
      <Trash3 className="icon-trash-3" />
    </button>
  )

  const editHandler = async () => {

    await dispatch(savePost({ id, body, deadline }))
    setEdit(!edit)
  }


  const fullTime = deadlineDate - create

  let currentTime = deadlineDate - Date.now()

  if (currentTime < 0) {
    currentTime = 0
  }
  const prog = (currentTime / fullTime) * 100

  if (status === 'failed') {
    alert('FETCH DROP!')
  }

  const oldPageContent = props.visible || (
    <>
      <div className="item-desc-body">
        Дата удаления: {getDeadline(props.remove)}
      </div>
      <div className="item-desc-body">
        Time left: {getTimeLeft(props.timeleft)}
      </div>
    </>
  )
  console.log(edit)

  const deleteButton = status.some(postId => postId === id) ? (
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
              <p className="item-body">{bodyContent}</p>
            </div>
          </div>
          <div className="col-5">
            <div className="row item-flex">
              <div className="col">
                <div className="">
                  <div className="p-min">

                    <div
                      className="progress mb-2"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
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



      {/* <div className="item-wrapper">
        <div className="row">
          <div className="item-title-container col-5">
            <div className="btn-icon-outline">
              <ChevronDown className="main-icon" />
            </div>
            <div className="item-title">
              {!edit ? (<p>{body}</p>) : (<textarea
                autoFocus
                className="form-control"
                name="body"
                rows={body.length / 40}
                placeholder="What should be done?"
                value={body}
                onChange={e => { setBody(e.target.value) }}
              ></textarea>)}

            </div>
          </div>
          <div className="item-progress col-3">
            <div
              className="progress"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar"
                style={{ width: `${prog}%` }}
              ></div>
            </div>
            <div>{getDate()}</div>
          </div>
          {!edit ? (
            <div className={`col-3 deadline`}>
              {getDeadline(deadline)}
            </div>
          ) : (
            <div className="col-3 deadline">
              <input
                type="datetime-local"
                name="deadline"
                className="form-control input-date"
                value={deadline}
                onChange={e => { setDeadline(e.target.value) }}
              />
            </div>
          )}
          <div className="col-1 d-flex">
            <div className="delete-button">{editButton}</div>
            <div className="delete-button">{button}</div>
          </div>
        </div>
        <div className={`item-desc`}>
          <div className="item-desc-wrapper">
            <div className="item-desc-body">
              Дата создания: {getDeadline(props.create)}
            </div>
            {oldPageContent}
          </div>
        </div>
      </div> */}
    </>
  )

}

export default Post
