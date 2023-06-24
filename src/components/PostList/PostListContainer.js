import { connect } from "react-redux"
import PostList from "./PostList";
import { setPostAC } from "../../redux/PostListReducer";


const mapStateToProps = (state) => {
  console.log('mstp');
  console.log(state.postList.data)
  return {
    data: state.postList.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: (posts) => {
      dispatch(setPostAC(posts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);