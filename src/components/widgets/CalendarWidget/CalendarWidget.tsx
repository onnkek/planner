import React from "react"
import "./CalendarWidget.sass"
import { IDay, IMonth } from "../../pages/CalendarPage/CalendarPage"

interface CalendarWidgetProps {
  month: IMonth
}



const CalendarWidget = React.memo(({ month }: CalendarWidgetProps) => {

  const getHolidayClass = (day: IDay) => {
    const resList = []
    for (let i = 1; i < month.days.length - 1; i++) {
      if (month.days[i - 1].type !== month.days[i].type) {
        if (i === 1) {
          resList.push(`${month.days[i - 1].type}-end`)
        }
        resList.push(`${month.days[i].type}-start`)
      } else if (month.days[i].type !== month.days[i + 1].type) {
        resList.push(`${month.days[i].type}-end`)
      } else if (month.days[i].type === month.days[i + 1].type && month.days[i - 1].type === month.days[i].type) {
        if (i === 1) {
          resList.push(`${month.days[i - 1].type}-start`)
        }
        resList.push(`${month.days[i].type}`)
      }
    }
    return resList[month.days.indexOf(day)]
  }

  const getCurrent = (day: IDay) => {
    return day.number === (new Date()).getDate() ? "current-day" : ""
  }

  const calendar = month.days.map(day => <div className={`${getHolidayClass(day)} ${getCurrent(day)}`} key={Math.random()}><div>{day.number}</div></div>)

  return (
    <div className="calendarWidget">
      <div className="calendarWidget__header">{month.name}</div>
      <div className="calendarWidget__grid" key={Math.random()}>
        {(new Array(month.days[0].position)).fill(1).map(x => <div key={Math.random()} />)}
        {calendar}
      </div>

    </div>
  )
})

export default CalendarWidget