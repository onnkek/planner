import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Status } from "../models/Status"
import { INote } from "../models/Note"
import IFolder from "../models/Folder"
import JSONBinService from "../services/JSONBinService"
import { RootState } from "./store"

interface IVacation {
  id: number
  start: string
  end: string
}

interface IHoliday {
  id: number
  day: string
}

export interface IDate {
  holidays: IHoliday[]
  vacations: IVacation[]
}

interface ISettings {
  date: IDate
  status: Status
  removing: number[]
  addStatus: Status
  statusSavePost: Status
  contextMenu: boolean
  contextMenuPosition: { x: number, y: number }
  iconsMenu: boolean
  iconsMenuPosition: { x: number, y: number }
  selectItem: INote | IFolder | undefined
}

const initialState: ISettings = {
  date: {
    holidays: [],
    vacations: []
  },
  status: Status.Idle,
  removing: [],
  addStatus: Status.Idle,
  statusSavePost: Status.Idle,
  contextMenu: false,
  contextMenuPosition: { x: 0, y: 0 },
  iconsMenu: false,
  iconsMenuPosition: { x: 0, y: 0 },
  selectItem: undefined
}

const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder

      .addCase(getSettings.pending, (state: ISettings) => {
        state.status = Status.Loading
      })
      .addCase(getSettings.fulfilled, (state: ISettings, action) => {
        state.status = Status.Succeeded
        state.date = action.payload.date

      })
      .addCase(getSettings.rejected, (state: ISettings, action) => {
        state.status = Status.Failed
      })


      .addCase(addHoliday.pending, (state: ISettings) => {
        state.status = Status.Loading
      })
      .addCase(addHoliday.fulfilled, (state: ISettings, action) => {
        state.status = Status.Succeeded
        state.date.holidays.push(action.payload)
      })
      .addCase(addHoliday.rejected, (state: ISettings, action) => {
        state.status = Status.Failed
      })

      .addCase(removeHoliday.pending, (state: ISettings) => {
        state.status = Status.Loading
      })
      .addCase(removeHoliday.fulfilled, (state: ISettings, action) => {
        state.status = Status.Succeeded
        state.date.holidays = action.payload
      })
      .addCase(removeHoliday.rejected, (state: ISettings, action) => {
        state.status = Status.Failed
      })


      .addCase(addVacation.pending, (state: ISettings) => {
        state.status = Status.Loading
        console.log("addVacation.pending")
      })
      .addCase(addVacation.fulfilled, (state: ISettings, action) => {
        state.status = Status.Succeeded
        state.date.vacations.push(action.payload)
        console.log("addVacation.fulfilled")
      })
      .addCase(addVacation.rejected, (state: ISettings, action) => {
        state.status = Status.Failed
        console.log("addVacation.rejected")
      })

      .addCase(removeVacation.pending, (state: ISettings) => {
        state.status = Status.Loading
      })
      .addCase(removeVacation.fulfilled, (state: ISettings, action) => {
        state.status = Status.Succeeded
        state.date.vacations = action.payload
      })
      .addCase(removeVacation.rejected, (state: ISettings, action) => {
        state.status = Status.Failed
      })
  }
})

export const getSettings = createAsyncThunk(
  'settings/getSettings',

  async () => {
    return await new JSONBinService().getSettings()
  })



export const addHoliday = createAsyncThunk<IHoliday, string, { state: RootState }>(

  'settings/addHoliday',
  async (payload: string, { rejectWithValue, getState }) => {

    const newHoliday: IHoliday = {
      id: Math.random(),
      day: payload
    }
    const response = await new JSONBinService().addHoliday(newHoliday)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newHoliday

  }
)

export const removeHoliday = createAsyncThunk<IHoliday[], IHoliday, { state: RootState }>(

  'settings/removeHoliday',
  async (payload: IHoliday, { rejectWithValue, getState }) => {

    const state = getState().settings.date.holidays
    const index = state.findIndex((holiday) => holiday.id === payload.id)
    const newHolidays = [...state.slice(0, index), ...state.slice(index + 1)]

    const response = await new JSONBinService().removeHoliday(payload.id)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newHolidays
  }
)

type PayloadType = {
  start: string
  end: string
}

export const addVacation = createAsyncThunk<IVacation, PayloadType, { state: RootState }>(

  'settings/addVacation',
  async (payload: PayloadType, { rejectWithValue, getState }) => {

    const newVacation: IVacation = {
      id: Math.random(),
      start: payload.start,
      end: payload.end
    }

    const response = await new JSONBinService().addVacation(newVacation)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newVacation

  }
)

export const removeVacation = createAsyncThunk<IVacation[], IVacation, { state: RootState }>(

  'settings/removeVacation',
  async (payload: IVacation, { rejectWithValue, getState }) => {

    const state = getState().settings.date.vacations
    const index = state.findIndex((vacation) => vacation.id === payload.id)
    const newVacations = [...state.slice(0, index), ...state.slice(index + 1)]

    const response = await new JSONBinService().removeVacation(payload.id)
    if (!response.ok) {
      return rejectWithValue('Can\'t delete post! Server error!')
    }
    return newVacations
  }
)

export default SettingsSlice.reducer