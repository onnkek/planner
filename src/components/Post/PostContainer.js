import { connect } from "react-redux"
import Post from "./Post"
import { hidePostAC, removePostAC } from "../../redux/PostListReducer";

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hidePost: (postId) => { dispatch(hidePostAC(postId)) },
    removePost: (postId) => { dispatch(removePostAC(postId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);