import JSONBinService from "../services/JSONBinService";

const SET_POSTS = "SET_POSTS";
const CREATE_POST = "CREATE_POST";
const ADD_POST = "ADD_POST";
const CHANGE_BODY = "CHANGE_BODY";
const CHANGE_DEADLINE = "CHANGE_DEADLINE";
const HIDE_POST = "HIDE_POST";
const REMOVE_POST = "REMOVE_POST";
const IS_LOADING_DATA = "IS_LOADING_DATA";
const IS_ADDING_POST = "IS_ADDING_POST";
const IS_REMOVING_POST = "IS_REMOVING_POST";

const initialState = {
    data: [],
    body: "",
    deadline: "",
    isShowModal: false,
    isLoadingData: false,
    isAddingPost: false,
    isRemovingPost: false
};
const PostListReducer = (state = initialState, action) => {
    const jsonService = new JSONBinService();
    let newState = {};
    let index = null;
    switch (action.type) {
        case IS_LOADING_DATA:
            newState = { ...state };
            newState.isLoadingData = !newState.isLoadingData;
            return newState;

        case IS_ADDING_POST:
            newState = { ...state };
            newState.isAddingPost = !newState.isAddingPost;
            return newState;

        case IS_REMOVING_POST:
            newState = { ...state };
            newState.isRemovingPost = !newState.isRemovingPost;
            return newState;

        case SET_POSTS:
            newState = { ...state, data: action.data };
            // console.log("newstate_setposts");
            // console.log(newState);
            return newState;

        case CREATE_POST:
            newState = { ...state };
            newState.isShowModal = !newState.isShowModal;
            return newState;

        case ADD_POST:
            newState = { ...state, data: action.data };
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

export const loadingDataAC = () => ({ type: IS_LOADING_DATA });
export const addingPostAC = () => ({ type: IS_ADDING_POST });
export const removingPostAC = () => ({ type: IS_REMOVING_POST });
export const setPostAC = (data) => ({ type: SET_POSTS, data });
export const addPostAC = (data) => ({ type: ADD_POST, data });
export const createPostAC = () => ({ type: CREATE_POST });
export const changeBodyAC = (body) => ({ type: CHANGE_BODY, body: body });
export const changeDeadlineAC = (deadline) => ({ type: CHANGE_DEADLINE, deadline: deadline });
export const hidePostAC = (postId) => ({ type: HIDE_POST, postId });
export const removePostAC = (postId) => ({ type: REMOVE_POST, postId });


export const setDataTC = () => {
    return (dispatch) => {
        dispatch(loadingDataAC());
        new JSONBinService().getData().then(response => {
            // console.log(response.record)
            dispatch(setPostAC(response.record));
            dispatch(loadingDataAC());
        });
    }
}

export const addPostTC = () => {
    return (dispatch, getState) => {
        dispatch(addingPostAC());
        let maxId = 1;
        const state = getState().postList;
        console.log(state);
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
        const newData = [...state.data, newPost];

        new JSONBinService().updateData(newData).then(() => {
            dispatch(addPostAC(newData));
            dispatch(addingPostAC());
            dispatch(createPostAC());
        });
    }
}

export const hidePostTC = () => {
    return (dispatch) => {
        dispatch(removingPostAC());

    }
}

export const removePostTC = () => {
    return (dispatch) => {
        dispatch(removingPostAC());

    }
}

export default PostListReducer;