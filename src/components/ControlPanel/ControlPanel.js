import React, { Component } from "react";
import "./ControlPanel.sass";
import ItemAddForm from "../ItemAddForm";
import { NavLink } from "react-router-dom";

export default class ControlPanel extends Component {
  state = {
    modal: false,
  };

  showAddForm = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  addItem = (body, deadline) => {
    this.setState({
      modal: !this.state.modal,
    });
    this.props.onChange(body, deadline);
  };

  render() {
    const setActive = ({ isActive }) => (isActive ? "tab active-tab" : "tab");

    return (
      <>
        <div
          className={`modal fade ${this.state.modal ? "show" : ""}`}
          tabIndex="-1"
          onClick={(e) => e.currentTarget === e.target && this.showAddForm()}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add new post</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.showAddForm}
                ></button>
              </div>
              <div className="modal-body">
                <ItemAddForm addItem={this.addItem} />
              </div>
            </div>
          </div>
        </div>
        <div className="app-container">
          <div className="control">
            <div className="nav-tabs-container">
              <ul className="nav-tabs">
                <li>
                  <NavLink to="/" className={setActive}>
                    <div className="tab-link">Actual</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/old" className={setActive}>
                    <div className="tab-link">Old</div>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="control-filter">
              <div className="app-container"></div>
            </div>
            <button
              type="button"
              className="btn btn-primary outline"
              onClick={this.showAddForm}
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}
