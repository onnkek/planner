import React from "react"
import "./Post.sass"
import { ChevronDown, Trash3 } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { hidePost, removePost } from "../../redux/PostListReducer"

const Post = (props) => {

  const dispatch = useDispatch()
  const status = useSelector(state => state.posts.removing)
  
  
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

  const { body, create, deadline, id, visible } = props

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

  return (
    <>
      <div className="item-wrapper">
        <div className="row">
          <div className="item-title-container col-5">
            {/* <div className="btn-icon-outline" onClick={this.toggle}> */}
            <div className="btn-icon-outline">
              <ChevronDown className="main-icon" />
            </div>
            <div className="item-title">
              <p>{body}</p>
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
          {/* <div className={`col-3 ${this.state.active}`}> */}
          <div className={`col-3`}>
            {getDeadline(deadline)}
          </div>
          <div className="delete-button col-1">{button}</div>
        </div>
        {/* <div
          className={`item-desc ${this.state.selected ? "item-desc-show" : ""
            }`}
        > */}
        <div className={`item-desc`}>
          <div className="item-desc-wrapper">
            <div className="item-desc-body">
              Дата создания: {getDeadline(props.create)}
            </div>
            {oldPageContent}
          </div>
        </div>
      </div>
    </>
  )

}

export default Post
