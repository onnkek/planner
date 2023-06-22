import React, { Component } from "react";
import "./ItemAddForm.sass";

export default class ItemAddForm extends Component {
  state = {
    body: null,
    deadline: null,
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.body, this.state.deadline);
    this.setState({
      body: null,
      deadline: null,
    });
  };
  onBodyChange = (e) => {
    this.setState({
      body: e.target.value,
    });
  };
  onDateChange = (e) => {
    this.setState({
      deadline: e.target.value,
    });
  };
  render() {
    return (
      <form className="form-1" onSubmit={this.onSubmit}>
        <div className="mb-3">
          <label className="form-label" name="body">
            Post description
          </label>
          <textarea
            className="form-control"
            name="body"
            rows="5"
            placeholder="What should be done?"
            onChange={this.onBodyChange}
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
            onChange={this.onDateChange}
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
}
