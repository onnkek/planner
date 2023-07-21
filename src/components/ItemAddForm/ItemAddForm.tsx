import React, { useEffect, useState } from "react"
import "./ItemAddForm.sass"
import Spinner from "../UI/Spinner/Spinner"
import { addBadge, addNewPost, removeBadge } from "../../redux/PostListReducer"
import { useAppDispatch, useAppSelector } from "../../models/Hook"
import { X, Plus } from 'react-bootstrap-icons'
import Badge, { BadgeType } from "../UI/Badge/Badge"
import { IBadge } from "../../models/Badge"
import { getBadges } from "../../redux/BadgesSlice"
import { Status } from "../../models/Status"



const ItemAddForm = ({closeModal}:any) => {

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getBadges())
  // }, [dispatch])



  const [body, setBody] = useState('')
  const [deadline, setDeadline] = useState('')



  const status = useAppSelector(state => state.posts.statusAddPost)

  const [badges, setBadges] = useState<IBadge[]>([])

  //const badges = useAppSelector(state => state.posts.badges)

  const [startBadges, setStartBadges] = useState(useAppSelector(state => state.badges.badges))


  const onBodyChange = (e: any) => {
    setBody(e.target.value)
    //console.log(body)
  }
  const onDeadlineChange = (e: any) => {
    setDeadline(e.target.value)
    //console.log(deadline)
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    await dispatch(addNewPost({ body, deadline, badges }))

    setBody('')
    setDeadline('')
    closeModal()
  }



  const badgeHandle = (badge: IBadge) => {
    if (badge.type === BadgeType.Add) {
      const index = badges.findIndex((b) => b.id === badge.id)

      setBadges([...badges.slice(0, index), ...badges.slice(index + 1)])
      //dispatch(removeBadge(badge))

      setStartBadges([...startBadges, badge])
    }
    if (badge.type === BadgeType.Remove) {
      //dispatch(addBadge(badge))
      setBadges([...badges, badge])
      const index = startBadges.findIndex((b) => b.id === badge.id)
      setStartBadges([...startBadges.slice(0, index), ...startBadges.slice(index + 1)])
    }
  }

  if (status === Status.Loading) {
    return <Spinner small />
  }


  const badgesContent = badges.map(badge => {
    //console.log(badge)
    return (<Badge key={badge.id} id={badge.id} color={badge.color} text={badge.text} type={BadgeType.Add} onClick={badgeHandle} />)
  })
  const startBadgesContent = startBadges.map(badge => {
    return (<Badge key={badge.id} id={badge.id} color={badge.color} text={badge.text} type={BadgeType.Remove} onClick={badgeHandle} />)
  })
  return (

    <form className="form-1">
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
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Add
        </button>
      </div>
    </form>
  )
}
export default ItemAddForm