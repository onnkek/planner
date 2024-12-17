import React, { MouseEvent, useState } from "react"
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
  // const [position, setPosition] = useState({ x: 0, y: 0 })
  // const [select, setSelect] = useState<EventTarget | undefined>(undefined)

  // const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
  //   setSelect(e.currentTarget)
  // }
  // const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
  //   if (select) {
  //     setPosition({ x: e.clientX - 100, y: e.clientY - 100 })
  //   }
  // }
  // const mouseUpHandler = (e: MouseEvent<HTMLDivElement>) => {
  //   setSelect(undefined)
  // }

  return (
    <div className="widget calendarWidget"
      // onMouseDown={mouseDownHandler}
      // onMouseMove={mouseMoveHandler}
      // onMouseUp={mouseUpHandler}
      // style={{ top: position.y, left: position.x }}
    >
      <div className="calendarWidget__header">{getMonthName(month)}</div>
      <div className="calendarWidget__grid">
        {getNumberOfEmpty(month, year)! > 0 ? (new Array(getNumberOfEmpty(month, year))).fill(1).map(x => <div key={Math.random()} />) : <></>}
        {new Array(getDaysInMonth(year, month)).fill(1).map((e, i) => i + 1).map(day => <div className={`${getCalendarClasses(dateSettings, `${year}-${month}-${day}`)}`} key={Math.random()}><div>{day}</div></div>)}
      </div>
    </div>
  )
})

export default CalendarWidget