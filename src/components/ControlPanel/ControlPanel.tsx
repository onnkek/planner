import React from "react"
import "./ControlPanel.sass"
import { NavLink } from "react-router-dom"
import Modal from "../Modal/Modal"
import ItemAddForm from "../ItemAddForm/ItemAddForm"

const ControlPanel = () => {
  const setActive = ({ isActive }: any) => (isActive ? "tab active-tab" : "tab")

  // const status = useAppSelector(state => state.posts.statusAddPost)
  return (
    <>
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
      </div>
    </>
  )
}

export default ControlPanel
