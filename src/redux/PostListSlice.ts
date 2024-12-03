import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import JSONBinService from "../services/JSONBinService"
import IPost from '../models/Post'
import { RootState } from "./store"
import { IBadge } from "../models/Badge"
import { Status } from "../models/Status"

interface IStore {
  posts: IPost[]
  savePosts: IPost[]
  statusFetchPosts: Status
  errorFetchPosts: string | undefined
  statusAddPost: Status
  errorAddPost: string | undefined
  removing: number[],
  statusSavePost: Status,
  badges: IBadge[]
}

const initialState: IStore = {
  posts: [],
  savePosts: [],
  statusFetchPosts: Status.Idle,
  errorFetchPosts: '',
  statusAddPost: Status.Idle,
  errorAddPost: '',
  removing: [],
  statusSavePost: Status.Idle,
  badges: []
}
const PostListSlice = createSlice({
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
      .addCase(addNewPost.rejected, (state: IStore, action) => {
        state.statusAddPost = Status.Idle
      })


      .addCase(hidePost.fulfilled, (state: IStore, action) => {
        const index = state.removing.findIndex(id => id === action.meta.arg.id)
        state.removing.splice(index, 1)
        state.posts = action.payload
      })
      .addCase(hidePost.pending, (state: IStore, action) => {
        state.removing.push(action.meta.arg.id)
      })
      .addCase(hidePost.rejected, (state: IStore, action) => {
        //state.statusRemovePost = 'failed'
      })


      .addCase(removePost.fulfilled, (state: IStore, action) => {
        const index = state.removing.findIndex(id => id === action.meta.arg.id)
        state.removing.splice(index, 1)
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
        //state.statusSavePost = Status.Failed
      })
  }
})

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return await new JSONBinService().getPosts()
  })


type PayloadType = {
  body: string
  deadline: string
  link: string
  badges: IBadge[]
}

export const addNewPost = createAsyncThunk<IPost, PayloadType, { state: RootState }>(
  'posts/addNewPost',
  async (payload, { rejectWithValue, getState }) => {
    const state = getState().posts

    let maxId = 1
    if (state.posts.length) {
      maxId = state.posts.reduce((prev, cur) => (prev.id > cur.id ? prev : cur)).id
      maxId++
    }
    const newPost: IPost = {
      id: maxId,
      body: payload.body,
      create: String(Date.now()),
      remove: "",
      timeleft: "",
      deadline: payload.deadline,
      link: payload.link,
      visible: true,
      badges: payload.badges
    }
    const newPosts = [...state.posts, newPost]
    const response = await new JSONBinService().addTask(newPost)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
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
    const response = await new JSONBinService().updatePosts(newData[index].id, { "visible": false })
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newData
  })

export const removePost = createAsyncThunk<IPost[], HidePayloadType, { state: RootState, rejectValue: string }>(
  'posts/removePost',
  async (payload: HidePayloadType, { rejectWithValue, getState }) => {

    const state = getState().posts.posts
    const index = state.findIndex((post) => post.id === payload.id)
    const newData = [...state.slice(0, index), ...state.slice(index + 1)]
    const response = await new JSONBinService().removePost(payload.id)
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
    const response = await new JSONBinService().updatePosts(payload.id, { "body": payload.body, "deadline": payload.deadline })
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newData
  })

export const { sortPosts, filterPosts } = PostListSlice.actions
export default PostListSlice.reducer