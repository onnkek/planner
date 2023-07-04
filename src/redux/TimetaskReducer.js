import JSONBinService from "../services/JSONBinService"

const ADD_TIMETASK = 'ADD_TIMETASK'

const initialState = {
    data: []
}

const TimetaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TIMETASK:

            return
        default:
            return state
    }
}


export const createTimetask = () => ({ type: ADD_TIMETASK })

export const addTimetask = () => {
    return (dispatch, getState) => {

        const state = getState().timetaskList

        const newObj = {
            body: "",
            numbersOfPeriod: "",
            period: ""
        }
        const newData = [...state.data, newObj]
        new JSONBinService().updateData(newData).then(() => {
            dispatch(createTimetask())
        })
    }
}


export default TimetaskReducer