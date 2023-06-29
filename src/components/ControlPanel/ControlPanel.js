import React from "react";
import "./ControlPanel.sass";
import { NavLink } from "react-router-dom";
import ItemAddFormContainer from "../ItemAddForm/ItemAddFormContainer";
import Modal from "../Modal/Modal";

const ControlPanel = (props) => {
  const setActive = ({ isActive }) => (isActive ? "tab active-tab" : "tab");
  return (
    <>
      <Modal id='add-modal' title='Add new post'>
        <ItemAddFormContainer />
      </Modal>
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
            <li>
              <NavLink to="/settings" className={setActive}>
                <div className="tab-link">Settings</div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="control-filter">
          <div className="app-container"></div>
        </div>
        <button
          type="button"
          className="add-button btn btn-primary outline"
          data-bs-target="#add-modal"
          data-bs-toggle="modal"
        >
          +
        </button>
      </div>
    </>
  );
};

export default ControlPanel;
