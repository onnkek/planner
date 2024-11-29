import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IBadge } from "../models/Badge"
import { RootState } from "./store"
import JSONBinService from "../services/JSONBinService"
import { Status } from "../models/Status"
import { INote } from "../models/Note"


interface INotes {
  notes: INote
  status: Status
  removing: number[]
  addStatus: Status
}

const initialState: INotes = {
  "notes": {
    "uid": 1,
    "type": "folder",
    "body": "",
    "label": "Root",
    "icon": "folder.svg",
    "create": "12.12.1233",
    "children": [

    ]
  }
  ,
  status: Status.Idle,
  removing: [],
  addStatus: Status.Idle
}

const NotesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {

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


    // .addCase(addNote.fulfilled, (state: INotes, action) => {
    //   state.addStatus = Status.Succeeded
    //   state.notes.push(action.payload)
    // })
    // .addCase(addNote.pending, (state: INotes, action) => {
    //   state.addStatus = Status.Loading
    // })

    // .addCase(removeNote.fulfilled, (state: INotes, action) => {
    //   state.removing.splice(action.meta.arg.id, 1)
    //   state.notes = action.payload
    // })
    // .addCase(removeNote.pending, (state: INotes, action) => {
    //   state.removing.push(action.meta.arg.id)
    // })
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


// export const addNote = createAsyncThunk<INote, PayloadType, { state: RootState }>(

//   'notes/addNote',
//   async (payload: PayloadType, { getState }) => {

//     const notes = getState().notes.notes
//     let maxId = 1
//     if (notes.length) {
//       maxId = notes.reduce((prev, cur) => (prev.uid > cur.uid ? prev : cur)).uid
//       maxId++
//     }
//     const newNote = {
//       uid: maxId,
//       label: payload.name,
//       body: payload.body,
//       create: payload.create,
//       icon: "",
//       children: []
//     }

//     const newNotes = [...notes, newNote]
//     await new JSONBinService().addBadge(newNote)
//     return newNote

//   }
// )
type RemovePayloadType = {
  id: number
}
// export const removeNote = createAsyncThunk<INote[], RemovePayloadType, { state: RootState, rejectValue: string }>(

//   'badges/removeBadge',
//   async (payload: RemovePayloadType, { rejectWithValue, getState }) => {


//     const state = getState().notes.notes
//     const index = state.findIndex((note) => note.uid === payload.id)
//     const newData = [...state.slice(0, index), ...state.slice(index + 1)]
//     const response = await new JSONBinService().removeBadge(payload.id)
//     if (!response.ok) {
//       return rejectWithValue('Can\'t delete badge! Server error!')
//     }
//     return newData
//   }
// )

export default NotesSlice.reducer