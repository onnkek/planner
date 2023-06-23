import { connect } from "react-redux"
import ControlPanel from "./ControlPanel";
import { createPostAC } from "../redux/PostListReducer";


const mapStateToProps = (state) => {
  return {
    isShowModal: state.postList.isShowModal
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCreatePost: () => { dispatch(createPostAC()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);