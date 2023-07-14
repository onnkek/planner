import React, { useState } from "react"
import "./ItemAddForm.sass"
import Spinner from "../UI/Spinner/Spinner"
import { Status, addNewPost } from "../../redux/PostListReducer"
import { useAppDispatch, useAppSelector } from "../../models/Hook"

const ItemAddForm = () => {

  const dispatch = useAppDispatch()

  const [body, setBody] = useState('')
  const [deadline, setDeadline] = useState('')
  const status = useAppSelector(state => state.posts.statusAddPost)

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

  if (status === Status.Loading) {
    return <Spinner small />
  }


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
      <div className="form-footer">
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
          Add
        </button>
      </div>
    </form>
  )
}
export default ItemAddForm