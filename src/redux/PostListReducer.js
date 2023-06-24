import JSONBinService from "../services/JSONBinService";

const SET_POSTS = "SET_POSTS";
const CREATE_POST = "CREATE_POST";
const ADD_POST = "ADD_POST";
const CHANGE_BODY = "CHANGE_BODY";
const CHANGE_DEADLINE = "CHANGE_DEADLINE";
const HIDE_POST = "HIDE_POST";
const REMOVE_POST = "REMOVE_POST";

const initialState = {
    data: [],
    body: "",
    deadline: "",
    isShowModal: false
};
const PostListReducer = (state = initialState, action) => {
    const jsonService = new JSONBinService();
    let newState = {};
    let index = null;
    switch (action.type) {
        case SET_POSTS:
            newState = { ...state, data: action.data };
            console.log("newstate_setposts");
            console.log(newState);
            return newState;

        case CREATE_POST:

            newState = { ...state };
            newState.isShowModal = !newState.isShowModal;
            return newState;

        case ADD_POST:
            let maxId = 1;
            if (state.data.length) {
                maxId = state.data.reduce((prev, cur) =>
                    prev.id > cur.id ? prev : cur
                ).id++;
            }
            const newPost = {
                id: maxId,
                body: state.body,
                create: Date.now(),
                remove: "",
                timeleft: "",
                deadline: state.deadline,
                visible: true
            };
            newState = { ...state, data: [...state.data, newPost] };
            console.log("newstate_addpost");
            console.log(newState);
            jsonService.updateData(newState.data);
            newState.body = "";
            newState.deadline = "";
            newState.isShowModal = !state.isShowModal;
            return newState;

        case CHANGE_BODY:
            newState = { ...state };
            newState.body = action.body;
            return newState;

        case CHANGE_DEADLINE:
            newState = { ...state };
            newState.deadline = action.deadline;
            return newState;

        case HIDE_POST:
            index = state.data.findIndex((post) => post.id === action.postId);
            newState = { ...state };
            newState.data = [...state.data];
            newState.data[index].visible = !state.data[index].visible;
            jsonService.updateData(newState.data);
            return newState;

        case REMOVE_POST:
            index = state.data.findIndex((post) => post.id === action.postId);
            newState = { ...state };
            newState.data = [
                ...state.data.slice(0, index),
                ...state.data.slice(index + 1),
            ];
            jsonService.updateData(newState.data);
            return newState;

        default:
            return state;
    }
}

export const setPostAC = (data) => ({ type: SET_POSTS, data });
export const addPostAC = () => ({ type: ADD_POST });
export const createPostAC = () => ({ type: CREATE_POST });
export const changeBodyAC = (body) => ({ type: CHANGE_BODY, body: body });
export const changeDeadlineAC = (deadline) => ({ type: CHANGE_DEADLINE, deadline: deadline });
export const hidePostAC = (postId) => ({ type: HIDE_POST, postId });
export const removePostAC = (postId) => ({ type: REMOVE_POST, postId });

export default PostListReducer;