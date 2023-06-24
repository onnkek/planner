import { connect } from "react-redux"
import PostList from "./PostList";
import { setDataTC } from "../../redux/PostListReducer";


const mapStateToProps = (state) => {
  // console.log('mstp');
  // console.log(state.postList.data)
  return {
    data: state.postList.data,
    isLoading: state.postList.isLoadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: () => {
      dispatch(setDataTC());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);