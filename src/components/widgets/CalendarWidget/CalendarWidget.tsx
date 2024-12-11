import React from "react"
import "./CalendarWidget.sass"
import { calendarDB, IDay, IMonth } from "../../pages/CalendarPage/CalendarPage"

// interface CalendarWidgetProps {
//   month: IMonth
// }

export const getHolidayClass = (month: IMonth, day: IDay) => {
  const resList = []
  for (let i = 1; i < month.days.length - 1; i++) {
    if (i === 1) {
      if (month.days[i - 1].type === month.days[i].type) {
        resList.push(`${month.days[i - 1].type}-start`)
      } else {
        resList.push(`${month.days[i - 1].type}-solo`)
      }
    }
    if (month.days[i - 1].type === month.days[i].type) {
      if (month.days[i + 1].type === month.days[i].type) {
        resList.push(`${month.days[i].type}`)
      } else {
        resList.push(`${month.days[i].type}-end`)
      }

    }
    else {
      if (month.days[i + 1].type === month.days[i].type) {
        resList.push(`${month.days[i].type}-start`)
      } else {
        resList.push(`${month.days[i].type}-solo`)
      }
    }
    if (i + 2 === month.days.length) {
      if (month.days[i + 1].type === month.days[i].type) {
        resList.push(`${month.days[i + 1].type}-end`)
      } else {
        resList.push(`${month.days[i + 1].type}-solo`)
      }
    }
  }
  return resList[month.days.indexOf(day)]
}

export const getCurrent = (day: IDay) => {
  return day.number === (new Date()).getDate() ? "current-day" : ""
}

const CalendarWidget = React.memo(() => {


  const currentMonth = calendarDB.months.find(x => x.year === (new Date()).getFullYear() && x.number === (new Date()).getMonth() + 1)
  const calendar = currentMonth && currentMonth.days.map(day => <div className={`${getHolidayClass(currentMonth!, day)} ${getCurrent(day)}`} key={Math.random()}><div>{day.number}</div></div>)

  return (
    <div className="calendarWidget">
      {currentMonth ? <>
        <div className="calendarWidget__header">{currentMonth!.name}</div>
        <div className="calendarWidget__grid" key={Math.random()}>
          {(new Array(currentMonth!.days[0].position)).fill(1).map(x => <div key={Math.random()} />)}
          {calendar}
        </div>
      </> : <>Календарь не найден</>}
    </div>
  )
})

export default CalendarWidget