import React, { Component } from "react";
import "./PostList.sass";
import Spinner from "../UI/Spinner/Spinner";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostContainer from "../Post/PostContainer";

export default class PostList extends Component {


  componentDidMount() {
    this.props.setPosts();
  }

  renderItems = (data) => {
    return data.map((item) => {
      const { id, visible } = item;
      if (this.props.new) {
        if (visible) {
          return (
            <CSSTransition key={id} timeout={200} classNames="item">
              <li key={item.id} className="planner-list">
                <PostContainer {...item} />
              </li>
            </CSSTransition>
          );
        }
      } else {
        if (!visible) {
          return (
            <CSSTransition key={id} timeout={200} classNames="item">
              <li key={item.id} className="planner-list">
                <PostContainer {...item} />
              </li>
            </CSSTransition>
          );
        }
      }
    });
  };

  render() {

    if (this.props.isLoading) {
      return <Spinner />;
    }

    const items = this.renderItems(this.props.data);
    return (
      <div className="planner">
        <div className="app-container">
          <ul className="planner-container">
            <TransitionGroup className="todo-list">{items}</TransitionGroup>
          </ul>
        </div>
      </div>
    );
  }

}
