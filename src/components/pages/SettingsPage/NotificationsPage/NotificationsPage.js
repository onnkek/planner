import React from "react";
import "./NotificationsPage.sass";
import { CheckLg } from "react-bootstrap-icons";
import Spinner from "../../../UI/Spinner/Spinner";

const NotificationsPage = (props) => {
  return (
    <>
      <div className="settings-item">
        <div className="settings-header-container">
          <h2 className="settings-header">Notifications preferences</h2>
          <div className="settings-check">
            <Spinner className='spinner-small'/>
            <div className="settings-check-icon">
              <CheckLg className="icon-check" />
            </div>
            <span className="settings-check-title">Saved</span>
          </div>
        </div>
        <div className="noti-wrapper">
          <div className="noti-item">
            <h3 className="settings-subheader">Default notifications task</h3>
            <div className="settings-descr">
              Here you can set up notifications at different times for different
              tasks marked with tags.
            </div>
            <div className="noti-options">
              <div className="input-group mt-3">
                <div className="checkbox-wrapper input-group-text">
                  <input
                    className="checkbox form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                    onChange={() => {}}
                  />
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                />
                <button
                  className="noti-dropdown btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  time before
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      minut(es) before
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      hour(s) before
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      day(s) before
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      month(s) before
                    </a>
                  </li>
                </ul>
                <span className="noti-options-label input-group-text">for</span>
                <button
                  className="noti-dropdown btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  task
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Red badge
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Green badge
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blue badge
                    </a>
                  </li>
                </ul>
              </div>
              <div className="input-group mt-3">
                <div className="checkbox-wrapper input-group-text">
                  <input
                    className="checkbox form-check-input mt-0"
                    type="checkbox"
                    checked
                    value=""
                    aria-label="Checkbox for following text input"
                    onChange={() => {}}
                  />
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                />
                <button
                  className="noti-dropdown btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  time before
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      minut(es) before
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      hour(s) before
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      day(s) before
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      month(s) before
                    </a>
                  </li>
                </ul>
                <span className="noti-options-label input-group-text">for</span>
                <button
                  className="noti-dropdown btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  task
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Red badge
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Green badge
                    </a> 
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blue badge
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
