import React from "react";
import "./ControlPanel.sass";
import { NavLink } from "react-router-dom";
import ItemAddFormContainer from "../ItemAddForm/ItemAddFormContainer";

const ControlPanel = (props) => {

  
  
  const setActive = ({ isActive }) => (isActive ? "tab active-tab" : "tab");
  return (
    <>
      <div
        className={`modal fade ${props.isShowModal ? "show" : ""}`}
        tabIndex="-1"
        onClick={(e) => e.currentTarget === e.target && props.toggleCreatePost()}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add new post</h5>
              <button
                type="button"
                className="btn-close"
                onClick={props.toggleCreatePost}
              ></button>
            </div>
            <div className="modal-body">
              <ItemAddFormContainer />
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
            onClick={props.toggleCreatePost}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default ControlPanel;
