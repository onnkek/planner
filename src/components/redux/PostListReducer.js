import JSONBinService from "../../services/JSONBinService";

const CREATE_POST = "CREATE_POST";
const ADD_POST = "ADD_POST";
const CHANGE_BODY = "CHANGE_BODY";
const CHANGE_DEADLINE = "CHANGE_DEADLINE";

const initialState = {
    data: [],
    body: "",
    deadline: "",
    isShowModal: false
};
const PostListReducer = (state = initialState, action) => {
    const jsonService = new JSONBinService();
    let newState = {};
    switch (action.type) {
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
            newState = state.data ? [...state.data, newPost] : [newPost];
            jsonService.updateData(newState);
            newState.body = "";
            newState.deadline = "";
            return newState;

        case CHANGE_BODY:
            newState = { ...state };
            newState.body = action.body;
            return newState;
        case CHANGE_DEADLINE:
            newState = { ...state };
            newState.deadline = action.deadline;
            return newState;
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST });
export const createPostAC = () => ({ type: CREATE_POST });
export const changeBodyAC = (body) => ({ type: CHANGE_BODY, body: body });
export const changeDeadlineAC = (deadline) => ({ type: CHANGE_DEADLINE, deadline: deadline });

export default PostListReducer;