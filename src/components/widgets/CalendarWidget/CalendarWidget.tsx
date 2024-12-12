import React, { useEffect } from "react"
import "./CalendarWidget.sass"
import { calendarDB, getCalendarClasses, getMonthName, getNumberOfEmpty, IDay, IMonth } from "../../pages/CalendarPage/CalendarPage"
import { getDaysInMonth } from "../../../utils/date"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import { getSettings } from "../../../redux/SettingsSlice"
import { Status } from "../../../models/Status"


export const getCurrent = (day: IDay) => {
  return day.number === (new Date()).getDate() ? "current-day" : ""
}

const CalendarWidget = React.memo(() => {

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.settings.status)
  const date = useAppSelector(state => state.settings.date)

  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getSettings())
    }
  }, [status, dispatch])

  return (
    <div className="calendarWidget">
      <div className="calendarWidget" key={Math.random()}>
        <div className="calendarWidget__header">{getMonthName(currentMonth + 1)}</div>
        <div className="calendarWidget__grid">
          {getNumberOfEmpty(12, currentYear)! > 0 ? (new Array(getNumberOfEmpty(12, currentYear))).fill(1).map(x => <div key={Math.random()} />) : <></>}
          {new Array(getDaysInMonth(currentYear, 12)).fill(1).map((e, i) => i + 1).map(day => <div className={`${getCalendarClasses(date, `${currentYear}-${12}-${day}`)}`} key={Math.random()}><div>{day}</div></div>)}
        </div>
      </div>
    </div>
  )
})

export default CalendarWidget