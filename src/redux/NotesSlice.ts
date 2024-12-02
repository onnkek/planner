import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBadge } from "../models/Badge"
import { RootState } from "./store"
import JSONBinService from "../services/JSONBinService"
import { Status } from "../models/Status"
import { INote } from "../models/Note"
import IFolder from "../models/Folder"
import { isFolder } from "../components/TreeViewItem/TreeViewItem"


interface INotes {
  notes: IFolder
  status: Status
  removing: number[]
  addStatus: Status
  statusSavePost: Status
  contextMenu: boolean
  contextMenuPosition: { x: number, y: number }
  selectItem: INote | IFolder | undefined
}

const initialState: INotes = {
  notes: {
    uid: 1,
    create: "01.01.2024",
    label: "root",
    children: []
  },
  status: Status.Idle,
  removing: [],
  addStatus: Status.Idle,
  statusSavePost: Status.Idle,
  contextMenu: false,
  contextMenuPosition: { x: 0, y: 0 },
  selectItem: undefined
}

const getItem = (folder: IFolder, select: IFolder): IFolder | undefined => {
  let result = undefined
  if (select && select.uid === folder.uid) {
    result = folder
  } else {
    for (let i = 0; i < folder.children.length; i++) {
      const child = folder.children[i]
      if (isFolder(child)) {
        result = getItem(child, select)
        if (result) {
          break
        }
      }
    }
  }
  return result
}

const NotesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    openContextMenu(state, action: PayloadAction<{ position: { x: number, y: number }, item: INote | IFolder }>) {
      state.contextMenu = true
      state.contextMenuPosition = action.payload.position
      state.selectItem = action.payload.item
    },
    closeContextMenu(state) {
      state.contextMenu = false
      state.contextMenuPosition = { x: 0, y: 0 }
    }
  },
  extraReducers(builder) {
    builder

      .addCase(getNotes.pending, (state: INotes) => {
        state.status = Status.Loading
      })
      .addCase(getNotes.fulfilled, (state: INotes, action) => {
        state.status = Status.Succeeded
        state.notes = action.payload
      })
      .addCase(getNotes.rejected, (state: INotes, action) => {
        state.status = Status.Failed
      })


      // .addCase(saveNote.fulfilled, (state: INotes, action) => {
      //   state.statusSavePost = Status.Succeeded
      //   state.notes = action.payload
      // })
      // .addCase(saveNote.pending, (state: INotes, action) => {
      //   state.statusSavePost = Status.Loading
      // })
      // .addCase(saveNote.rejected, (state: INotes, action) => {
      //   //state.statusSavePost = Status.Failed
      // })

      .addCase(addItem.fulfilled, (state: INotes, action) => {
        console.log("fulfilled")
        // state.statusSavePost = Status.Succeeded
        state.notes = action.payload
      })
      .addCase(addItem.pending, (state: INotes, action) => {
        console.log("pending")
        state.statusSavePost = Status.Loading
      })
      .addCase(addItem.rejected, (state: INotes, action) => {
        console.log("rejected")
        //state.statusSavePost = Status.Failed
      })
  }
})
type PayloadType = {
  body: string
  create: string
  name: string
  icon: string
}

export const getNotes = createAsyncThunk(
  'notes/getNotes',
  async () => {
    return await new JSONBinService().getNotes()
  })



type AddPayloadType = {
  type: "note" | "folder"
}
export const addItem = createAsyncThunk<IFolder, AddPayloadType, { state: RootState, rejectValue: string }>(
  'posts/addItem',
  async (payload, { rejectWithValue, getState }) => {

    const notes = getState().notes.notes
    const select = getState().notes.selectItem
    const newNotes = JSON.parse(JSON.stringify(notes))

    if (isFolder(select)) {
      if (payload.type === "note") {
        const uid = Math.random()
        const newNote: INote = {
          uid: uid,
          body: "123",
          create: Date.now().toString(),
          icon: "test",
          label: "New " + uid
        }
        const item = getItem(newNotes, select)
        console.log(item)
        if (item) {
          item.children.push(newNote)
        }

      } else {
        const uid = Math.random()
        const newFolder: IFolder = {
          uid: uid,
          label: "New " + uid,
          create: Date.now().toString(),
          children: []
        }
        const item = getItem(newNotes, select)
        console.log(item)
        if (item) {
          item.children.push(newFolder)
        }

      }

    }


    // const index = state.children.findIndex((note) => note.uid === payload.uid)
    // const editedPost = { ...state.children[index] }
    // editedPost.body = payload.body
    // const newData = [...state.children.slice(0, index), editedPost, ...state.children.slice(index + 1)]
    // const response = await new JSONBinService().getNotes()
    // if (!response.ok) {
    //   return rejectWithValue('Can\'t delete post! Server error!')
    // }
    return newNotes
  })



// export const saveNote = createAsyncThunk<IFolder, SavePayloadType, { state: RootState, rejectValue: string }>(
//   'posts/saveNote',
//   async (payload, { rejectWithValue, getState }) => {

//     const state = getState().notes.notes
//     const index = state.children.findIndex((note) => note.uid === payload.uid)
//     const editedPost = { ...state.children[index] }
//     editedPost.body = payload.body
//     const newData = [...state.children.slice(0, index), editedPost, ...state.children.slice(index + 1)]
//     const response = await new JSONBinService().updateNote(payload.uid, { body: payload.body })
//     if (!response.ok) {
//       return rejectWithValue('Can\'t delete post! Server error!')
//     }
//     return newData
//   })

type RemovePayloadType = {
  id: number
}
export const { openContextMenu, closeContextMenu } = NotesSlice.actions
export default NotesSlice.reducer