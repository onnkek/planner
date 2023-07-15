import React, { useState } from "react"
import "./ItemAddForm.sass"
import Spinner from "../UI/Spinner/Spinner"
import { Status, addBadge, addNewPost, removeBadge } from "../../redux/PostListReducer"
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { X, Plus } from 'react-bootstrap-icons'
import Badge from "../UI/Badge/Badge"

export interface IBadge {
  id: number,
  color: string,
  text: string,
  isAdded?: boolean
}

const ItemAddForm = () => {

  const dispatch = useAppDispatch()

  const [body, setBody] = useState('')
  const [deadline, setDeadline] = useState('')
  const [startBadges, setStartBadges] = useState<IBadge[]>(
    useAppSelector(state => state.posts.startBadges))
  const status = useAppSelector(state => state.posts.statusAddPost)
  const badges = useAppSelector(state => state.posts.badges)

  const onBodyChange = (e: any) => {
    setBody(e.target.value)
    console.log(body)
  }
  const onDeadlineChange = (e: any) => {
    setDeadline(e.target.value)
    console.log(deadline)
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    await dispatch(addNewPost({ body, deadline }))

    setBody('')
    setDeadline('')
  }



  const badgeHandle = (badge: IBadge) => {
    if (badge.isAdded) {
      dispatch(removeBadge(badge))

      setStartBadges([...startBadges, badge])
    } else {
      dispatch(addBadge(badge))

      const index = startBadges.findIndex((b) => b.id === badge.id)
      setStartBadges([...startBadges.slice(0, index), ...startBadges.slice(index + 1)])
    }
  }

  if (status === Status.Loading) {
    return <Spinner small />
  }


  const badgesContent = badges.map(badge => {
    return (<Badge key={badge.id} id={badge.id} color={badge.color} text={badge.text} isAdded onClick={badgeHandle} />)
  })
  const startBadgesContent = startBadges.map(badge => {
    return (<Badge key={badge.id} id={badge.id} color={badge.color} text={badge.text} onClick={badgeHandle} />)
  })
  return (

    <form className="form-1" onSubmit={onSubmit}>
      <div className="mb-3">
        {/* <label className="form-label" name="body"> */}
        <label className="form-label">
          Post description
        </label>
        <textarea
          autoFocus
          className="form-control"
          name="body"
          rows={5}
          placeholder="What should be done?"
          value={body}
          onChange={onBodyChange}
        ></textarea>
      </div>
      <div className="mb-3">
        {/* <label className="form-label" name="deadline"> */}
        <label className="form-label">
          Set deadline
        </label>

        <input
          type="datetime-local"
          name="deadline"
          className="form-control add-form-date"
          value={deadline}
          onChange={onDeadlineChange}
        />
      </div>

      <div className="form-control">
        {badgesContent}
      </div>
      <br></br>
      <div>
        {startBadgesContent}
      </div>


      <div className="form-footer">
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
          Add
        </button>
      </div>
    </form>
  )
}
export default ItemAddForm