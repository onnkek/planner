import React from "react"
import "./CalendarWidget.sass"
import { getCalendarClasses, getDaysInMonth, getMonthName, getNumberOfEmpty } from "../../../utils/date"
import { useAppSelector } from "../../../models/Hook"

interface CalendarWidgetProps {
  date: string
}

const CalendarWidget = React.memo(({ date }: CalendarWidgetProps) => {

  const dateSettings = useAppSelector(state => state.settings.date)
  const month = new Date(date).getMonth() + 1
  const year = new Date(date).getFullYear()

  return (
    <div className="calendarWidget">
      <div className="calendarWidget" key={Math.random()}>
        <div className="calendarWidget__header">{getMonthName(month)}</div>
        <div className="calendarWidget__grid">
          {getNumberOfEmpty(month, year)! > 0 ? (new Array(getNumberOfEmpty(month, year))).fill(1).map(x => <div key={Math.random()} />) : <></>}
          {new Array(getDaysInMonth(year, month)).fill(1).map((e, i) => i + 1).map(day => <div className={`${getCalendarClasses(dateSettings, `${year}-${month}-${day}`)}`} key={Math.random()}><div>{day}</div></div>)}
        </div>
      </div>
    </div>
  )
})

export default CalendarWidget