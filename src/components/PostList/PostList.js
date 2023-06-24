import React, { Component } from "react";
import "./PostList.sass";
import Spinner from "../UI/Spinner/Spinner";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import JSONBinService from "../../services/JSONBinService";
import PostContainer from "../Post/PostContainer";

export default class PostList extends Component {

  

  jsonService = new JSONBinService();
  componentDidMount() {
    this.jsonService.getData().then(response => {
      console.log('response')
      console.log(response)
      this.props.setPosts(response.record);
    });
  }





  renderItems = (data) => {
    data = data.sort((item1, item2) =>
      item1.deadline > item2.deadline ? 1 : -1
    );
    return data.map((item) => {
      const { id, visible } = item;
      if (this.props.new) {
      if (visible === false) {
        return;
      }
      return (
        <CSSTransition key={id} timeout={200} classNames="item">
          <li key={item.id} className="planner-list">
            <PostContainer {...item} onDelete={() => this.props.onDelete(id)} />
          </li>
        </CSSTransition>
      );
      } else {
        if (!visible === false) {
          return;
        }
        return (
          <CSSTransition key={id} timeout={200} classNames="item">
            <li key={item.id} className="planner-list">
              <PostContainer {...item} onDelete={() => this.props.onDelete(id)} />
            </li>
          </CSSTransition>
        );
      }
    });
  };

  render() {
    const { data } = this.props;
    console.log(data);
    if (!data.length) {
      return <Spinner />;
    }

    const items = this.renderItems(data);
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
