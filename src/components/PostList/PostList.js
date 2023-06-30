import React, { Component, useEffect } from "react";
import "./PostList.sass";
import Spinner from "../UI/Spinner/Spinner";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostContainer from "../Post/PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/PostListReducer";

const PostList = () => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts);
  const status = useSelector(state => state.posts.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch])



  console.log(posts);
  const renderItems = (data) => {
    return data.map((item) => {
      const { id, visible } = item;
      // if (this.props.new) {
      // if (visible) {
        return (
          <CSSTransition key={id} timeout={200} classNames="item">
            <li key={item.id} className="planner-list">
              <PostContainer {...item} />
            </li>
          </CSSTransition>
        );
      // }
      // } else {
      // if (!visible) {
      //   return (
      //     <CSSTransition key={id} timeout={200} classNames="item">
      //       <li key={item.id} className="planner-list">
      //         <PostContainer {...item} />
      //       </li>
      //     </CSSTransition>
      //   );
      // }
      // }
    });
  };

  if (status === 'loading') {
    return <Spinner className='spinner-big' />;
  }

  const items = renderItems(posts);
  return (
    <div className="planner">
      <ul className="planner-container">
        <TransitionGroup className="todo-list">{items}</TransitionGroup>
      </ul>
    </div>
  );
}
export default PostList;
