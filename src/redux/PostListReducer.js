import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import JSONBinService from "../services/JSONBinService"





const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts.push(action.payload)
      })
      .addCase(addNewPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(hidePost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(hidePost.pending, (state, action) => {
        state.status = 'loading'
      })
  }
})


export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return await new JSONBinService().getData()
  })

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (payload, { getState }) => {
    const state = getState().posts.posts

    let maxId = 1
    if (state.length) {
      maxId = state.reduce((prev, cur) => (prev.id > cur.id ? prev : cur)).id
      maxId++
    }
    const newPost = {
      id: maxId,
      body: payload.body,
      create: Date.now(),
      remove: "",
      timeleft: "",
      deadline: payload.deadline,
      visible: true
    }
    const newPosts = [...state, newPost]
    await new JSONBinService().updateData(newPosts).then(() => {
      console.log("GOOO")
    })
    return newPost
  })

  export const hidePost = createAsyncThunk(
    'posts/hidePost',
    async (payload, { getState }) => {
      console.log(payload)
      const state = getState().posts.posts
      const index = state.data.findIndex((post) => post.id === payload)
          const newData = [...state.data]
          newData[index].visible = !state.data[index].visible
  
      await new JSONBinService().updateData(newData).then(() => {
        console.log("GOOO")
      })
      return newData
    })











export default postSlice.reducer
























// const SET_POSTS = "SET_POSTS";
// const CREATE_POST = "CREATE_POST";
// const ADD_POST = "ADD_POST";
// const CHANGE_BODY = "CHANGE_BODY";
// const CHANGE_DEADLINE = "CHANGE_DEADLINE";
// const HIDE_POST = "HIDE_POST";
// const REMOVE_POST = "REMOVE_POST";
// const IS_LOADING_DATA = "IS_LOADING_DATA";
// const SORT_DATA = "SORT_DATA";
// const IS_ADDING_POST = "IS_ADDING_POST";
// const IS_REMOVING_POST = "IS_REMOVING_POST";

// const initialState1 = {
//   data: [],
//   body: "",
//   deadline: "",
//   isShowModal: false,
//   isLoadingData: false,
//   isAddingPost: false,
//   isRemovingPost: [],
// };
// const PostListReducer = (state = initialState1, action) => {
//   let newState = {};
//   switch (action.type) {
//     case IS_LOADING_DATA:
//       newState = { ...state };
//       newState.isLoadingData = !newState.isLoadingData;
//       return newState;

//     case SORT_DATA:
//       newState = { ...state };
//       newState.data = state.data.sort((item1, item2) =>
//         new Date(item1.deadline) >= new Date(item2.deadline) ? 1 : -1
//       );
//       return newState;

//     case IS_ADDING_POST:
//       newState = { ...state };
//       newState.isAddingPost = !newState.isAddingPost;
//       return newState;

//     case IS_REMOVING_POST:
//       console.log(state.isRemovingPost);
//       const test = action.isFetching
//         ? [...state.isRemovingPost, action.postId]
//         : state.isRemovingPost.filter((id) => id !== action.postId);
//       console.log(state.isRemovingPost);
//       return {
//         ...state,
//         isRemovingPost: test,
//       };

//     case SET_POSTS:
//       newState = { ...state, data: action.data };
//       return newState;

//     case CREATE_POST:
//       newState = { ...state };
//       newState.isShowModal = !newState.isShowModal;
//       newState.body = '';
//       newState.deadline = '';
//       return newState;

//     case ADD_POST:
//       newState = { ...state, data: action.data };
//       return newState;

//     case CHANGE_BODY:
//       newState = { ...state };
//       newState.body = action.body;
//       return newState;

//     case CHANGE_DEADLINE:
//       newState = { ...state };
//       newState.deadline = action.deadline;
//       return newState;

//     case HIDE_POST:
//       newState = { ...state };
//       newState.data = action.data;
//       return newState;

//     case REMOVE_POST:
//       newState = { ...state };
//       newState.data = action.data;
//       return newState;

//     default:
//       return state;
//   }
// };

// export const sortDataAC = () => ({ type: SORT_DATA });
// export const loadingDataAC = () => ({ type: IS_LOADING_DATA });
// export const addingPostAC = () => ({ type: IS_ADDING_POST });
// export const removingPostAC = (postId, isFetching) => ({
//   type: IS_REMOVING_POST,
//   postId,
//   isFetching,
// });
// export const setPostAC = (data) => ({ type: SET_POSTS, data });
// export const addPostAC = (data) => ({ type: ADD_POST, data });
// export const createPostAC = () => ({ type: CREATE_POST });
// export const changeBodyAC = (body) => ({ type: CHANGE_BODY, body: body });
// export const changeDeadlineAC = (deadline) => ({
//   type: CHANGE_DEADLINE,
//   deadline: deadline,
// });
// export const hidePostAC = (data) => ({ type: HIDE_POST, data });
// export const removePostAC = (data) => ({ type: REMOVE_POST, data });

// export const setDataTC = () => {
//   return (dispatch) => {
//     dispatch(loadingDataAC());
//     new JSONBinService().getData().then((response) => {
//       dispatch(setPostAC(response));
//       dispatch(sortDataAC());
//       dispatch(loadingDataAC());
//     });
//   };
// };

// export const addPostTC = () => {
//   return (dispatch, getState) => {
//     dispatch(addingPostAC());
//     let maxId = 1;
//     const state = getState().postList;
//     if (state.data.length) {
//       maxId = state.data.reduce((prev, cur) => (prev.id > cur.id ? prev : cur))
//         .id++;
//     }
//     const newPost = {
//       id: maxId,
//       body: state.body,
//       create: Date.now(),
//       remove: "",
//       timeleft: "",
//       deadline: state.deadline,
//       visible: true,
//     };
//     const newData = [...state.data, newPost];

//     new JSONBinService().updateData(newData).then(() => {
//       dispatch(addPostAC(newData));
//       dispatch(addingPostAC());
//       dispatch(createPostAC());
//       dispatch(sortDataAC());
//     });
//   };
// };

// export const hidePostTC = (postId) => {
//   return (dispatch, getState) => {
//     const state = getState().postList;
//     dispatch(removingPostAC(postId, true));
//     const index = state.data.findIndex((post) => post.id === postId);
//     const newData = [...state.data];
//     newData[index].visible = !state.data[index].visible;
//     new JSONBinService().updateData(newData).then(() => {
//       dispatch(hidePostAC(newData));
//       dispatch(removingPostAC(postId, false));
//     });
//   };
// };

// export const removePostTC = (postId) => {
//   return (dispatch, getState) => {
//     const state = getState().postList;

//     dispatch(removingPostAC(postId, true));
//     const newData = state.data.filter((post) => post.id !== postId);
//     new JSONBinService().updateData(newData).then(() => {
//       dispatch(removePostAC(newData));
//       dispatch(removingPostAC(postId, false));
//     });
//   };
// };

// export default PostListReducer;
