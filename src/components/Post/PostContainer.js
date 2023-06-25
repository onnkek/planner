import { connect } from "react-redux"
import Post from "./Post"
import { hidePostAC, hidePostTC, removePostAC, removePostTC } from "../../redux/PostListReducer";

const mapStateToProps = (state) => {
  return {
    isRemoving: state.postList.isRemovingPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hidePost: (postId) => { dispatch(hidePostTC(postId)) },
    removePost: (postId) => { dispatch(removePostTC(postId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);