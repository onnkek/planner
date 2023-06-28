import React from "react";
import "./ProfilePage.sass";

const ProfilePage = (props) => {
  return (
    <>
      <div className="settings-item">
        <div className="settings-header-container">
          <h2 className="settings-header">Profile preferences</h2>
        </div>
        <form className="form-1 col-8">
          <div className="profile-form-group">
            <label className="profile-form-group-label form-label">
              Username
            </label>
            <input
              className="profile-form-group-input form-control"
              value="username"
            />
            <div className="profile-from-group-descr">
              Your username in the glider system and in the header of the site
              to display authorization information.
            </div>
          </div>
          <div className="profile-form-group">
            <label className="profile-form-group-label form-label">Email</label>
            <input
              className="profile-form-group-input form-control"
              value="email@email.com"
            />
            <div className="profile-from-group-descr">
              Your e-mail in the planner's system for the possibility of account
              recovery in case of password loss. Your email is not displayed
              publicly for privacy reasons.
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
