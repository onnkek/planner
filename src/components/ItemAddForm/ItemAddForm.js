import React from "react";
import "./ItemAddForm.sass";

const ItemAddForm = (props) => {

  const onBodyChange = (e) => {
    props.onBodyChange(e.target.value);
  }
  const onDeadlineChange = (e) => {
    props.onDeadlineChange(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    props.onAddPost();
  }

  return (
    <form className="form-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" name="body">
          Post description
        </label>
        <textarea
          className="form-control"
          name="body"
          rows="5"
          placeholder="What should be done?"
          value={props.body}
          onChange={onBodyChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label" name="deadline">
          Set deadline
        </label>

        <input
          type="datetime-local"
          name="deadline"
          className="form-control add-form-date"
          value={props.deadline}
          onChange={onDeadlineChange}
        />
      </div>
      <div className="form-footer">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
export default ItemAddForm;