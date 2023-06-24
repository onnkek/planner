import { changeDeadlineAC, addPostAC, changeBodyAC, addPostTC } from "../../redux/PostListReducer";
import { connect } from "react-redux";
import ItemAddForm from "./ItemAddForm";




  const mapStateToProps = (state) => {
    return {
      body: state.postList.body,
      deadline: state.postList.deadline,
      isAdding: state.postList.isAddingPost
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      onBodyChange: (body) => {
        dispatch(changeBodyAC(body));
      },
      onDeadlineChange: (deadline) => {
        dispatch(changeDeadlineAC(deadline));
      },
      onAddPost: () => {
        dispatch(addPostTC());
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm);