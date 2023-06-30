import React, { Component } from "react";

import "./Post.sass";
import { ChevronDown, Trash3 } from "react-bootstrap-icons";

export default class Post extends Component {
  state = {
    progress: 0,
    active: "",
    spinner: false,
    selected: false,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateItem();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  updateItem = () => {
    const deadlineDate = Date.parse(this.props.deadline);

    const fullTime = deadlineDate - this.props.create;

    let currentTime = deadlineDate - Date.now();
    if (currentTime < 0) {
      currentTime = 0;
      const progress = (currentTime / fullTime) * 100;
      this.setState({
        progress: progress,
        active: "active",
      });
      return;
    }
    const progress = (currentTime / fullTime) * 100;
    this.setState({
      progress: progress,
      active: "",
    });
  };
  getDate = () => {
    const deadlineDate = Date.parse(this.props.deadline);
    const currentTime = deadlineDate - Date.now();
    let result = "";
    const hours = this.getNumber(Math.floor(currentTime / (1000 * 60 * 60))),
      minutes = this.getNumber(Math.floor((currentTime / (1000 * 60)) % 60)),
      seconds = this.getNumber(Math.floor((currentTime / 1000) % 60));
    result += hours > 0 ? `${hours}:` : "00:";
    result += minutes > 0 ? `${minutes}:` : "00:";
    result += seconds > 0 ? seconds : "00";
    return result;
  };
  getTimeLeft = (time) => {
    let result = "";
    const hours = this.getNumber(Math.floor(time / (1000 * 60 * 60))),
      minutes = this.getNumber(Math.floor((time / (1000 * 60)) % 60)),
      seconds = this.getNumber(Math.floor((time / 1000) % 60));
    result += hours > 0 ? `${hours}:` : "00:";
    result += minutes > 0 ? `${minutes}:` : "00:";
    result += seconds > 0 ? seconds : "00";
    return result;
  };
  getNumber = (number) => (number < 10 ? `0${number}` : number);

  getDeadline = (deadline) => {
    const date = new Date(deadline),
      day = date.getDate(),
      month = String(date.getMonth() + 1).padStart(2, "0"),
      year = date.getFullYear(),
      hour = this.getNumber(date.getHours()),
      minute = this.getNumber(date.getMinutes());
    return `${day}.${month}.${year} ${hour}:${minute}`;
  };
  delete = () => {
    this.props.onDelete();
    this.setState({
      spinner: true,
    });
  };

  toggle = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  hidePost = (postId, postVisible) => {
    postVisible ? this.props.hidePost(postId) : this.props.removePost(postId);
  };

  render() {
    const { body, create, deadline, id, visible } = this.props;

    const deadlineDate = Date.parse(deadline);
    // const button = this.props.isRemoving.some((postId) => postId === id) ? (
    //   <button className="btn-icon btn btn-primary" type="button" disabled>
    //     <div
    //       className="spinner-border spinner-border-sm"
    //       role="status"
    //       aria-hidden="true"
    //     />
    //   </button>
    // ) : (
    //   <button
    //     type="button"
    //     className="btn-icon btn btn-primary"
    //     onClick={(e) => {
    //       e.stopPropagation();
    //       this.hidePost(id, visible);
    //     }}
    //   >
    //     <Trash3 className="icon-trash-3"/>
    //   </button>
    // );
    const fullTime = deadlineDate - create;

    let currentTime = deadlineDate - Date.now();

    if (currentTime < 0) {
      currentTime = 0;
    }
    const prog = (currentTime / fullTime) * 100;

    const oldPageContent = this.props.visible || (
      <>
        <div className="item-desc-body">
          Дата удаления: {this.getDeadline(this.props.remove)}
        </div>
        <div className="item-desc-body">
          Time left: {this.getTimeLeft(this.props.timeleft)}
        </div>
      </>
    );

    return (
      <>
        <div className="item-wrapper">
          <div className="row">
            <div className="item-title-container col-5">
              <div className="btn-icon-outline" onClick={this.toggle}>
                <ChevronDown className="main-icon"/>
              </div>
              <div className="item-title">
                <p>{body}</p>
              </div>
            </div>
            <div className="item-progress col-3">
              <div
                className="progress"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{ width: `${prog}%` }}
                ></div>
              </div>
              <div>{this.getDate()}</div>
            </div>
            <div className={`col-3 ${this.state.active}`}>
              {this.getDeadline(deadline)}
            </div>
            {/* <div className="delete-button col-1">{button}</div> */}
          </div>
          <div
            className={`item-desc ${
              this.state.selected ? "item-desc-show" : ""
            }`}
          >
            <div className="item-desc-wrapper">
              <div className="item-desc-body">
                Дата создания: {this.getDeadline(this.props.create)}
              </div>
              {oldPageContent}
            </div>
          </div>
        </div>
      </>
    );
  }
}
