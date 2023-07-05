import React, { useState } from "react"
import "./TaskAddForm.sass"

const TaskAddForm = (props) => {
  const [state, setState] = useState(false)

  const toggleDropdown = () => {
    setState({
      state: !state,
    })
  }

  return (
    <>
      <form className="form-1">
        <div className="mb-3">
          <label className="form-label" name="body">
            Task description
          </label>
          <textarea
            autoFocus
            className="form-control"
            name="body"
            rows="5"
            placeholder="What should be done?"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label" name="deadline">
            Autocreate task every
          </label>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
            <button
              className={`btn btn-outline-secondary dropdown-toggle ${
                state && "show"
              }`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={toggleDropdown}
            >
              Every
            </button>
            <ul className={`dropdown-menu dropdown-menu-end ${state && "show"}`}>
              <li className="dropdowm-list-item">
                <p className="dropdown-item">Month</p>
              </li>
              <li className="dropdowm-list-item">
                <p className="dropdown-item">Week</p>
              </li>
              <li className="dropdowm-list-item">
                <p className="dropdown-item">Day</p>
              </li>
              <li className="dropdowm-list-item">
                <p className="dropdown-item">Hour</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  )
}

export default TaskAddForm
