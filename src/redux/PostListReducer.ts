import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import JSONBinService from "../services/JSONBinService"
import IPost from '../models/Post'
import { RootState } from "./store"

export enum Status {
  'Idle',
  'Loading',
  'Succeeded',
  'Failed'
}

interface IStore {
  posts: IPost[]
  savePosts: IPost[]
  statusFetchPosts: Status
  errorFetchPosts: string | undefined
  statusAddPost: Status
  errorAddPost: string | undefined
  removing: number[],
  statusSavePost: Status
}

const initialState: IStore = {
  posts: [],
  savePosts: [],
  statusFetchPosts: Status.Idle,
  errorFetchPosts: '',
  statusAddPost: Status.Idle,
  errorAddPost: '',
  removing: [],
  statusSavePost: Status.Idle
}
type ActionType = {
  meta: number
}
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    sortPosts: (state, action) => {
      switch (action.payload) {
        case 'Name':
          state.posts.sort((post1, post2) => post1.body > post2.body ? 1 : -1)
          return
        case 'Time':
          state.posts.sort((post1, post2) => post1.deadline > post2.deadline ? 1 : -1)
          return
        default:
          return
      }
    },
    filterPosts: (state, action) => {
      state.posts = state.savePosts
      state.posts = state.posts.filter(post => post.body.toLowerCase().includes(action.payload.toLowerCase()))
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state: IStore) => {
        state.statusFetchPosts = Status.Loading
      })
      .addCase(fetchPosts.fulfilled, (state: IStore, action) => {
        state.statusFetchPosts = Status.Succeeded
        state.posts = action.payload
        state.savePosts = action.payload
      })
      .addCase(fetchPosts.rejected, (state: IStore, action) => {
        state.statusFetchPosts = Status.Failed
        state.errorFetchPosts = action.error.message
      })

      .addCase(addNewPost.fulfilled, (state: IStore, action) => {
        state.statusAddPost = Status.Succeeded
        state.posts.push(action.payload)
      })
      .addCase(addNewPost.pending, (state: IStore, action) => {
        state.statusAddPost = Status.Loading
      })


      .addCase(hidePost.fulfilled, (state: IStore, action) => {
        state.removing.splice(action.meta.arg.id, 1)
        state.posts = action.payload
      })
      .addCase(hidePost.pending, (state: IStore, action) => {
        state.removing.push(action.meta.arg.id)
      })
      .addCase(hidePost.rejected, (state: IStore, action) => {
        //state.statusRemovePost = 'failed'
      })


      .addCase(removePost.fulfilled, (state: IStore, action) => {
        state.removing.splice(action.meta.arg.id, 1)
        state.posts = action.payload
      })
      .addCase(removePost.pending, (state: IStore, action) => {
        state.removing.push(action.meta.arg.id)
      })
      .addCase(removePost.rejected, (state: IStore, action) => {
        //state.statusRemovePost = 'failed'
      })

      .addCase(savePost.fulfilled, (state: IStore, action) => {
        state.statusSavePost = Status.Succeeded
        state.posts = action.payload
      })
      .addCase(savePost.pending, (state: IStore, action) => {
        state.statusSavePost = Status.Loading
      })
      .addCase(savePost.rejected, (state: IStore, action) => {
        state.statusSavePost = Status.Failed
      })
  }
})


export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return await new JSONBinService().getData()
  })


type PayloadType = {
  body: string
  deadline: string
}

export const addNewPost = createAsyncThunk<IPost, PayloadType, { state: RootState }>(
  'posts/addNewPost',
  async (payload: PayloadType, { getState }) => {
    const state: IPost[] = getState().posts.posts

    let maxId = 1
    if (state.length) {
      maxId = state.reduce((prev, cur) => (prev.id > cur.id ? prev : cur)).id
      maxId++
    }
    const newPost: IPost = {
      id: maxId,
      body: payload.body,
      create: String(Date.now()),
      remove: "",
      timeleft: "",
      deadline: payload.deadline,
      visible: true
    }
    const newPosts = [...state, newPost]
    await new JSONBinService().updateData(newPosts)
    return newPost
  })

type HidePayloadType = {
  id: number
}
export const hidePost = createAsyncThunk<IPost[], HidePayloadType, { state: RootState, rejectValue: string }>(
  'posts/hidePost',
  async (payload, { getState, rejectWithValue }) => {

    const state = getState().posts.posts
    const index = state.findIndex((post) => post.id === payload.id)
    const newData: IPost[] = [...state]
    newData[index] = { ...state[index] }
    newData[index].visible = false
    const response = await new JSONBinService().updateData(newData)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newData
  })

export const removePost = createAsyncThunk<IPost[], HidePayloadType, { state: RootState, rejectValue: string }>(
  'posts/removePost',
  async (payload: HidePayloadType, { rejectWithValue, getState }) => {

    const state = getState().posts.posts
    console.log(getState().posts.removing)
    const index = state.findIndex((post) => post.id === payload.id)
    const newData = [...state.slice(0, index), ...state.slice(index + 1)]
    const response = await new JSONBinService().updateData(newData)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newData
  })

type SavePayloadType = {
  id: number
  body: string
  deadline: string
}
export const savePost = createAsyncThunk<IPost[], SavePayloadType, { state: RootState, rejectValue: string }>(
  'posts/savePost',
  async (payload, { rejectWithValue, getState }) => {

    const state = getState().posts.posts
    const index = state.findIndex((post) => post.id === payload.id)
    const editedPost = { ...state[index] }
    editedPost.body = payload.body
    editedPost.deadline = payload.deadline

    const newData = [...state.slice(0, index), editedPost, ...state.slice(index + 1)]
    console.log(newData[index])
    console.log(newData)



    const response = await new JSONBinService().updateData(newData)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newData
  })

export const { sortPosts, filterPosts } = postSlice.actions


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
