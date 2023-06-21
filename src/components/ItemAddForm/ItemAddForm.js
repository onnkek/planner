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
      <div className="add-wrapper">
        <div className="add-form-container">
          <form className="add-form" onSubmit={this.onSubmit}>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <label name="body" className="add-form-label">
              What should be done?
            </label>
            <textarea
              type="text"
              name="body"
              className="add-form-input"
              onChange={this.onBodyChange}
            ></textarea>
            <label name="body" className="add-form-label">
              When is the deadline?
            </label>
            <div className="add-form-bottom">
              <input
                type="datetime-local"
                name="deadline"
                className="add-form-date"
                formatValue="dd-MM-yyyyTHH:mm"
                onChange={this.onDateChange}
              ></input>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                value={"Add"}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
