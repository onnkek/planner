import React, { Component } from "react";
import "./SettingsPage.sass";

export default class SettingsPage extends Component {
  render() {
    return (
      <>
        <div className="app-container">
          <div className="settings">
            <div className="settings-item">
              <div className="settings-header-container">
                <h2 className="settings-header">Theme preferences</h2>
              </div>
              <p className="settings-descr">
                Choose how Planner looks to you. Select a single theme, or sync
                with your system and automatically switch between day and night
                themes.
              </p>
              <h3 className="settings-subheader">Theme mode</h3>
              <div className="settings-theme">
                <div className="settings-theme-item">
                  <div className="settings-theme-card">
                    <div className="theme-card-header">
                      <div className="theme-card-container">
                        <h4>Day theme</h4>
                      </div>
                    </div>
                    <div className="theme-card-body">
                      <div className="theme-card-container">
                        <div className="theme-card-descr">
                          This theme will be active when your system is set to
                          “light mode”
                        </div>
                        <div className="theme-card-example">
                          <div className="example-body-container">
                            <div className="example-top">
                              <div className="temp"></div>
                              <div className="temp"></div>
                              <div className="temp"></div>
                            </div>
                            <div className="example-tabs">
                              <div className="temp temp-1"></div>
                              <div className="temp-group">
                                <div className="temp temp-2 temp-color1"></div>
                                <div className="temp temp-2 temp-color2"></div>
                              </div>
                            </div>
                            <div className="example-body">
                              <div className="example-body-wrapper">
                                <div className="example-body-temp">
                                  <div className="temp temp-3"></div>
                                </div>
                              </div>
                              <div className="example-body-wrapper example-body-wrapper-1"></div>
                            </div>
                          </div>
                          <div className="example-descr">Light default</div>
                        </div>
                        <div className="theme-card-colors">
                          <div className="theme-card-color theme-card-color-active">
                            <div className="color-item color-item-1"></div>
                          </div>
                          <div className="theme-card-color">
                            <div className="color-item color-item-2"></div>
                          </div>
                          <div className="theme-card-color">
                            <div className="color-item color-item-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="settings-theme-item">
                  <div className="settings-theme-card">
                    <div className="theme-card-header">
                      <div className="theme-card-container">
                        <h4>Night theme</h4>
                      </div>
                    </div>
                    <div className="theme-card-body">
                      <div className="theme-card-container">
                        <div className="theme-card-descr">
                          This theme will be active when your system is set to
                          “dark mode”
                        </div>
                        <div className="theme-card-example">
                          <div className="example-body-container example-body-container-dark">
                            <div className="example-top example-top-dark">
                              <div className="temp temp-dark"></div>
                              <div className="temp temp-dark"></div>
                              <div className="temp temp-dark"></div>
                            </div>
                            <div className="example-tabs">
                              <div className="temp temp-dark temp-1"></div>
                              <div className="temp-group">
                                <div className="temp temp-2 temp-color1"></div>
                                <div className="temp temp-2 temp-color2"></div>
                              </div>
                            </div>
                            <div className="example-body">
                              <div className="example-body-wrapper example-body-wrapper-dark">
                                <div className="example-body-temp">
                                  <div className="temp temp-3"></div>
                                </div>
                              </div>
                              <div className="example-body-wrapper example-body-wrapper-dark example-body-wrapper-1"></div>
                            </div>
                          </div>
                          <div className="example-descr">Dark default</div>
                        </div>
                        <div className="theme-card-colors">
                          <div className="theme-card-color theme-card-color-active">
                            <div className="color-item color-item-1"></div>
                          </div>
                          <div className="theme-card-color">
                            <div className="color-item color-item-2"></div>
                          </div>
                          <div className="theme-card-color">
                            <div className="color-item color-item-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
