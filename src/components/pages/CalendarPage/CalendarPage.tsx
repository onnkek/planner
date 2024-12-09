import React, { Component, useState } from "react"
import "./CalendarPage.sass"

export interface ICalendarDB {
  months: IMonth[]
}

export interface IDay {
  number: number
  type: string
  position: number
}

export interface IMonth {
  name: string
  days: IDay[]
}
const CalendarPage = () => {



  const calendarDB: ICalendarDB = {
    months: [
      {
        name: 'jan',
        days: [
          { number: 1, type: 'holiday', position: 2 },
          { number: 2, type: 'holiday', position: 3 },
          { number: 3, type: 'holiday', position: 4 },
          { number: 4, type: 'weekend', position: 5 },
          { number: 5, type: 'weekend', position: 6 },
          { number: 6, type: 'holiday', position: 7 },
          { number: 7, type: 'holiday', position: 8 },
          { number: 8, type: 'holiday', position: 9 },
          { number: 9, type: 'normal', position: 10 },
          { number: 10, type: 'normal', position: 11 },
          { number: 11, type: 'weekend', position: 12 },
          { number: 12, type: 'weekend', position: 13 },
          { number: 13, type: 'normal', position: 14 },
          { number: 14, type: 'normal', position: 15 },
          { number: 15, type: 'normal', position: 16 },
          { number: 16, type: 'normal', position: 17 },
          { number: 17, type: 'normal', position: 18 },
          { number: 18, type: 'weekend', position: 19 },
          { number: 19, type: 'weekend', position: 20 },
          { number: 20, type: 'normal', position: 21 },
          { number: 21, type: 'normal', position: 22 },
          { number: 22, type: 'normal', position: 23 },
          { number: 23, type: 'normal', position: 24 },
          { number: 24, type: 'normal', position: 25 },
          { number: 25, type: 'weekend', position: 26 },
          { number: 26, type: 'weekend', position: 27 },
          { number: 27, type: 'normal', position: 28 },
          { number: 28, type: 'normal', position: 29 },
          { number: 29, type: 'normal', position: 30 },
          { number: 30, type: 'normal', position: 31 },
          { number: 31, type: 'normal', position: 32 }
        ]
      },
      {
        name: 'feb',
        days: [
          { number: 1, type: 'weekend', position: 5 },
          { number: 2, type: 'weekend', position: 6 },
          { number: 3, type: 'normal', position: 7 },
          { number: 4, type: 'normal', position: 8 },
          { number: 5, type: 'normal', position: 9 },
          { number: 6, type: 'normal', position: 10 },
          { number: 7, type: 'normal', position: 11 },
          { number: 8, type: 'weekend', position: 12 },
          { number: 9, type: 'weekend', position: 13 },
          { number: 10, type: 'normal', position: 14 },
          { number: 11, type: 'normal', position: 15 },
          { number: 12, type: 'normal', position: 16 },
          { number: 13, type: 'normal', position: 17 },
          { number: 14, type: 'normal', position: 18 },
          { number: 15, type: 'weekend', position: 19 },
          { number: 16, type: 'weekend', position: 20 },
          { number: 17, type: 'normal', position: 21 },
          { number: 18, type: 'normal', position: 22 },
          { number: 19, type: 'normal', position: 23 },
          { number: 20, type: 'normal', position: 24 },
          { number: 21, type: 'normal', position: 25 },
          { number: 22, type: 'weekend', position: 26 },
          { number: 23, type: 'weekend', position: 27 },
          { number: 24, type: 'normal', position: 28 },
          { number: 25, type: 'normal', position: 29 },
          { number: 26, type: 'normal', position: 30 },
          { number: 27, type: 'normal', position: 31 },
          { number: 28, type: 'normal', position: 32 }
        ]
      },
      {
        name: 'mar',
        days: [
          { number: 1, type: 'weekend', position: 5 },
          { number: 2, type: 'weekend', position: 6 },
          { number: 3, type: 'normal', position: 7 },
          { number: 4, type: 'normal', position: 8 },
          { number: 5, type: 'normal', position: 9 },
          { number: 6, type: 'normal', position: 10 },
          { number: 7, type: 'normal', position: 11 },
          { number: 8, type: 'weekend', position: 12 },
          { number: 9, type: 'weekend', position: 13 },
          { number: 10, type: 'normal', position: 14 },
          { number: 11, type: 'normal', position: 15 },
          { number: 12, type: 'normal', position: 16 },
          { number: 13, type: 'normal', position: 17 },
          { number: 14, type: 'normal', position: 18 },
          { number: 15, type: 'weekend', position: 19 },
          { number: 16, type: 'weekend', position: 20 },
          { number: 17, type: 'normal', position: 21 },
          { number: 18, type: 'normal', position: 22 },
          { number: 19, type: 'normal', position: 23 },
          { number: 20, type: 'normal', position: 24 },
          { number: 21, type: 'normal', position: 25 },
          { number: 22, type: 'weekend', position: 26 },
          { number: 23, type: 'weekend', position: 27 },
          { number: 24, type: 'normal', position: 28 },
          { number: 25, type: 'normal', position: 29 },
          { number: 26, type: 'normal', position: 30 },
          { number: 27, type: 'normal', position: 31 },
          { number: 28, type: 'normal', position: 32 },
          { number: 29, type: 'weekend', position: 33 },
          { number: 30, type: 'weekend', position: 34 },
          { number: 31, type: 'normal', position: 35 }
        ]
      },
      {
        name: 'apr',
        days: [
          { number: 1, type: 'normal', position: 1 },
          { number: 2, type: 'normal', position: 2 },
          { number: 3, type: 'normal', position: 3 },
          { number: 4, type: 'normal', position: 4 },
          { number: 5, type: 'weekend', position: 5 },
          { number: 6, type: 'weekend', position: 6 },
          { number: 7, type: 'vacation', position: 7 },
          { number: 8, type: 'vacation', position: 8 },
          { number: 9, type: 'vacation', position: 9 },
          { number: 10, type: 'vacation', position: 10 },
          { number: 11, type: 'vacation', position: 11 },
          { number: 12, type: 'vacation', position: 12 },
          { number: 13, type: 'vacation', position: 13 },
          { number: 14, type: 'normal', position: 14 },
          { number: 15, type: 'normal', position: 15 },
          { number: 16, type: 'normal', position: 16 },
          { number: 17, type: 'normal', position: 17 },
          { number: 18, type: 'normal', position: 18 },
          { number: 19, type: 'weekend', position: 19 },
          { number: 20, type: 'weekend', position: 20 },
          { number: 21, type: 'normal', position: 21 },
          { number: 22, type: 'normal', position: 22 },
          { number: 23, type: 'normal', position: 23 },
          { number: 24, type: 'normal', position: 24 },
          { number: 25, type: 'normal', position: 25 },
          { number: 26, type: 'weekend', position: 26 },
          { number: 27, type: 'weekend', position: 27 },
          { number: 28, type: 'normal', position: 28 },
          { number: 29, type: 'normal', position: 29 },
          { number: 30, type: 'normal', position: 30 }
        ]
      },
      {
        name: 'may',
        days: [
          { number: 1, type: 'holiday', position: 3 },
          { number: 2, type: 'holiday', position: 4 },
          { number: 3, type: 'weekend', position: 5 },
          { number: 4, type: 'weekend', position: 6 },
          { number: 5, type: 'normal', position: 7 },
          { number: 6, type: 'normal', position: 8 },
          { number: 7, type: 'normal', position: 9 },
          { number: 8, type: 'holiday', position: 10 },
          { number: 9, type: 'holiday', position: 11 },
          { number: 10, type: 'weekend', position: 12 },
          { number: 11, type: 'weekend', position: 13 },
          { number: 12, type: 'normal', position: 14 },
          { number: 13, type: 'normal', position: 15 },
          { number: 14, type: 'normal', position: 16 },
          { number: 15, type: 'normal', position: 17 },
          { number: 16, type: 'normal', position: 18 },
          { number: 17, type: 'weekend', position: 19 },
          { number: 18, type: 'weekend', position: 20 },
          { number: 19, type: 'normal', position: 21 },
          { number: 20, type: 'normal', position: 22 },
          { number: 21, type: 'normal', position: 23 },
          { number: 22, type: 'normal', position: 24 },
          { number: 23, type: 'normal', position: 25 },
          { number: 24, type: 'weekend', position: 26 },
          { number: 25, type: 'weekend', position: 27 },
          { number: 26, type: 'normal', position: 28 },
          { number: 27, type: 'normal', position: 29 },
          { number: 28, type: 'normal', position: 30 },
          { number: 29, type: 'normal', position: 31 },
          { number: 30, type: 'normal', position: 32 },
          { number: 31, type: 'weekend', position: 33 }
        ]
      },
      {
        name: 'jun',
        days: [
          { number: 1, type: 'weekend', position: 6 },
          { number: 2, type: 'normal', position: 7 },
          { number: 3, type: 'normal', position: 8 },
          { number: 4, type: 'normal', position: 9 },
          { number: 5, type: 'normal', position: 10 },
          { number: 6, type: 'normal', position: 11 },
          { number: 7, type: 'weekend', position: 12 },
          { number: 8, type: 'weekend', position: 13 },
          { number: 9, type: 'normal', position: 14 },
          { number: 10, type: 'normal', position: 15 },
          { number: 11, type: 'normal', position: 16 },
          { number: 12, type: 'holiday', position: 17 },
          { number: 13, type: 'holiday', position: 18 },
          { number: 14, type: 'weekend', position: 19 },
          { number: 15, type: 'weekend', position: 20 },
          { number: 16, type: 'normal', position: 21 },
          { number: 17, type: 'normal', position: 22 },
          { number: 18, type: 'normal', position: 23 },
          { number: 19, type: 'normal', position: 24 },
          { number: 20, type: 'normal', position: 25 },
          { number: 21, type: 'weekend', position: 26 },
          { number: 22, type: 'weekend', position: 27 },
          { number: 23, type: 'normal', position: 28 },
          { number: 24, type: 'normal', position: 29 },
          { number: 25, type: 'normal', position: 30 },
          { number: 26, type: 'normal', position: 31 },
          { number: 27, type: 'normal', position: 32 },
          { number: 28, type: 'weekend', position: 33 },
          { number: 29, type: 'weekend', position: 34 },
          { number: 30, type: 'normal', position: 35 }
        ]
      },
      {
        name: 'jul',
        days: [
          { number: 1, type: 'normal', position: 1 },
          { number: 2, type: 'normal', position: 2 },
          { number: 3, type: 'normal', position: 3 },
          { number: 4, type: 'normal', position: 4 },
          { number: 5, type: 'weekend', position: 5 },
          { number: 6, type: 'weekend', position: 6 },
          { number: 7, type: 'vacation', position: 7 },
          { number: 8, type: 'vacation', position: 8 },
          { number: 9, type: 'vacation', position: 9 },
          { number: 10, type: 'vacation', position: 10 },
          { number: 11, type: 'vacation', position: 11 },
          { number: 12, type: 'vacation', position: 12 },
          { number: 13, type: 'vacation', position: 13 },
          { number: 14, type: 'normal', position: 14 },
          { number: 15, type: 'normal', position: 15 },
          { number: 16, type: 'normal', position: 16 },
          { number: 17, type: 'normal', position: 17 },
          { number: 18, type: 'normal', position: 18 },
          { number: 19, type: 'weekend', position: 19 },
          { number: 20, type: 'weekend', position: 20 },
          { number: 21, type: 'normal', position: 21 },
          { number: 22, type: 'normal', position: 22 },
          { number: 23, type: 'normal', position: 23 },
          { number: 24, type: 'normal', position: 24 },
          { number: 25, type: 'normal', position: 25 },
          { number: 26, type: 'weekend', position: 26 },
          { number: 27, type: 'weekend', position: 27 },
          { number: 28, type: 'normal', position: 28 },
          { number: 29, type: 'normal', position: 29 },
          { number: 30, type: 'normal', position: 30 },
          { number: 31, type: 'normal', position: 31 }
        ]
      },
      {
        name: 'aug',
        days: [
          { number: 1, type: 'normal', position: 4 },
          { number: 2, type: 'weekend', position: 5 },
          { number: 3, type: 'weekend', position: 6 },
          { number: 4, type: 'normal', position: 7 },
          { number: 5, type: 'normal', position: 8 },
          { number: 6, type: 'normal', position: 9 },
          { number: 7, type: 'normal', position: 10 },
          { number: 8, type: 'normal', position: 11 },
          { number: 9, type: 'weekend', position: 12 },
          { number: 10, type: 'weekend', position: 13 },
          { number: 11, type: 'normal', position: 14 },
          { number: 12, type: 'normal', position: 15 },
          { number: 13, type: 'normal', position: 16 },
          { number: 14, type: 'normal', position: 17 },
          { number: 15, type: 'normal', position: 18 },
          { number: 16, type: 'weekend', position: 19 },
          { number: 17, type: 'weekend', position: 20 },
          { number: 18, type: 'normal', position: 21 },
          { number: 19, type: 'normal', position: 22 },
          { number: 20, type: 'normal', position: 23 },
          { number: 21, type: 'normal', position: 24 },
          { number: 22, type: 'normal', position: 25 },
          { number: 23, type: 'weekend', position: 26 },
          { number: 24, type: 'weekend', position: 27 },
          { number: 25, type: 'normal', position: 28 },
          { number: 26, type: 'normal', position: 29 },
          { number: 27, type: 'normal', position: 30 },
          { number: 28, type: 'normal', position: 31 },
          { number: 29, type: 'normal', position: 32 },
          { number: 30, type: 'weekend', position: 33 },
          { number: 31, type: 'weekend', position: 34 }
        ]
      },
      {
        name: 'sep',
        days: [
          { number: 1, type: 'normal', position: 0 },
          { number: 2, type: 'normal', position: 1 },
          { number: 3, type: 'normal', position: 2 },
          { number: 4, type: 'normal', position: 3 },
          { number: 5, type: 'normal', position: 4 },
          { number: 6, type: 'weekend', position: 5 },
          { number: 7, type: 'weekend', position: 6 },
          { number: 8, type: 'normal', position: 7 },
          { number: 9, type: 'normal', position: 8 },
          { number: 10, type: 'normal', position: 9 },
          { number: 11, type: 'normal', position: 10 },
          { number: 12, type: 'normal', position: 11 },
          { number: 13, type: 'weekend', position: 12 },
          { number: 14, type: 'weekend', position: 13 },
          { number: 15, type: 'normal', position: 14 },
          { number: 16, type: 'normal', position: 15 },
          { number: 17, type: 'normal', position: 16 },
          { number: 18, type: 'normal', position: 17 },
          { number: 19, type: 'normal', position: 18 },
          { number: 20, type: 'weekend', position: 19 },
          { number: 21, type: 'weekend', position: 20 },
          { number: 22, type: 'vacation', position: 21 },
          { number: 23, type: 'vacation', position: 22 },
          { number: 24, type: 'vacation', position: 23 },
          { number: 25, type: 'vacation', position: 24 },
          { number: 26, type: 'vacation', position: 25 },
          { number: 27, type: 'vacation', position: 26 },
          { number: 28, type: 'vacation', position: 27 },
          { number: 29, type: 'vacation', position: 28 },
          { number: 30, type: 'vacation', position: 29 }
        ]
      },
      {
        name: 'oct',
        days: [
          { number: 1, type: 'vacation', position: 2 },
          { number: 2, type: 'vacation', position: 3 },
          { number: 3, type: 'vacation', position: 4 },
          { number: 4, type: 'vacation', position: 5 },
          { number: 5, type: 'vacation', position: 6 },
          { number: 6, type: 'normal', position: 7 },
          { number: 7, type: 'normal', position: 8 },
          { number: 8, type: 'normal', position: 9 },
          { number: 9, type: 'normal', position: 10 },
          { number: 10, type: 'normal', position: 11 },
          { number: 11, type: 'weekend', position: 12 },
          { number: 12, type: 'weekend', position: 13 },
          { number: 13, type: 'normal', position: 14 },
          { number: 14, type: 'normal', position: 15 },
          { number: 15, type: 'normal', position: 16 },
          { number: 16, type: 'normal', position: 17 },
          { number: 17, type: 'normal', position: 18 },
          { number: 18, type: 'weekend', position: 19 },
          { number: 19, type: 'weekend', position: 20 },
          { number: 20, type: 'normal', position: 21 },
          { number: 21, type: 'normal', position: 22 },
          { number: 22, type: 'normal', position: 23 },
          { number: 23, type: 'normal', position: 24 },
          { number: 24, type: 'normal', position: 25 },
          { number: 25, type: 'weekend', position: 26 },
          { number: 26, type: 'weekend', position: 27 },
          { number: 27, type: 'normal', position: 28 },
          { number: 28, type: 'normal', position: 29 },
          { number: 29, type: 'normal', position: 30 },
          { number: 30, type: 'normal', position: 31 },
          { number: 31, type: 'normal', position: 32 }
        ]
      },
      {
        name: 'nov',
        days: [
          { number: 1, type: 'normal', position: 5 },
          { number: 2, type: 'weekend', position: 6 },
          { number: 3, type: 'holiday', position: 7 },
          { number: 4, type: 'holiday', position: 8 },
          { number: 5, type: 'normal', position: 9 },
          { number: 6, type: 'normal', position: 10 },
          { number: 7, type: 'normal', position: 11 },
          { number: 8, type: 'weekend', position: 12 },
          { number: 9, type: 'weekend', position: 13 },
          { number: 10, type: 'normal', position: 14 },
          { number: 11, type: 'normal', position: 15 },
          { number: 12, type: 'normal', position: 16 },
          { number: 13, type: 'normal', position: 17 },
          { number: 14, type: 'normal', position: 18 },
          { number: 15, type: 'weekend', position: 19 },
          { number: 16, type: 'weekend', position: 20 },
          { number: 17, type: 'normal', position: 21 },
          { number: 18, type: 'normal', position: 22 },
          { number: 19, type: 'normal', position: 23 },
          { number: 20, type: 'normal', position: 24 },
          { number: 21, type: 'normal', position: 25 },
          { number: 22, type: 'weekend', position: 26 },
          { number: 23, type: 'weekend', position: 27 },
          { number: 24, type: 'normal', position: 28 },
          { number: 25, type: 'normal', position: 29 },
          { number: 26, type: 'normal', position: 30 },
          { number: 27, type: 'normal', position: 31 },
          { number: 28, type: 'normal', position: 32 },
          { number: 29, type: 'weekend', position: 33 },
          { number: 30, type: 'weekend', position: 34 }
        ]
      },
      {
        name: 'dec',
        days: [
          { number: 1, type: 'normal', position: 0 },
          { number: 2, type: 'normal', position: 1 },
          { number: 3, type: 'normal', position: 2 },
          { number: 4, type: 'normal', position: 3 },
          { number: 5, type: 'normal', position: 4 },
          { number: 6, type: 'weekend', position: 5 },
          { number: 7, type: 'weekend', position: 6 },
          { number: 8, type: 'normal', position: 7 },
          { number: 9, type: 'normal', position: 8 },
          { number: 10, type: 'normal', position: 9 },
          { number: 11, type: 'normal', position: 10 },
          { number: 12, type: 'normal', position: 11 },
          { number: 13, type: 'weekend', position: 12 },
          { number: 14, type: 'weekend', position: 13 },
          { number: 15, type: 'normal', position: 14 },
          { number: 16, type: 'normal', position: 15 },
          { number: 17, type: 'normal', position: 16 },
          { number: 18, type: 'normal', position: 17 },
          { number: 19, type: 'normal', position: 18 },
          { number: 20, type: 'weekend', position: 19 },
          { number: 21, type: 'weekend', position: 20 },
          { number: 22, type: 'normal', position: 21 },
          { number: 23, type: 'normal', position: 22 },
          { number: 24, type: 'normal', position: 23 },
          { number: 25, type: 'normal', position: 24 },
          { number: 26, type: 'normal', position: 25 },
          { number: 27, type: 'weekend', position: 26 },
          { number: 28, type: 'weekend', position: 27 },
          { number: 29, type: 'normal', position: 28 },
          { number: 30, type: 'normal', position: 29 },
          { number: 31, type: 'holiday', position: 30 }
        ]
      },
    ]

  }
  // const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  // const offsets = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0]

  // const calendar = months
  //   .map((month, ind) => <div className="grid" key={Math.random()}>
  //     {
  //       (new Array(offsets[ind])).fill(1)
  //         .map(x => <div key={Math.random()}></div>)
  //     }
  //     {
  //       (new Array(month)).fill(1)
  //         .map((a, i) => i + 1)
  //         .map(value => <div key={Math.random()}>{value}</div>)

  //     }
  //   </div>)



  const calendar = calendarDB.months.map(month =>
    <div className="grid" key={Math.random()}>
      {(new Array(month.days[0].position)).fill(1).map(x => <div key={Math.random()} />)}
      {month.days.map(day => <div className={`${day.type}`} key={Math.random()}>{day.number}</div>)}
    </div>)

  return (
    <div className="app-container">
      <div className="container">
        <div className="grid-container">
          {calendar}
        </div>
      </div>
    </div >
  )
}
export default CalendarPage