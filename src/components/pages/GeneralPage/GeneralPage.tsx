import React, { useEffect } from "react"
import "./GeneralPage.sass"
import CalendarWidget from "../../widgets/CalendarWidget/CalendarWidget"
import { IMonth } from "../CalendarPage/CalendarPage"
import ClockWidget from "../../widgets/ClockWidget/ClockWidget"

const GeneralPage = () => {

  const month: IMonth = {
    name: 'Dec',
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
      { number: 12, type: 'normal', position: 17 },
      { number: 13, type: 'normal', position: 18 },
      { number: 14, type: 'weekend', position: 19 },
      { number: 15, type: 'weekend', position: 20 },
      { number: 16, type: 'normal', position: 21 },
      { number: 17, type: 'normal', position: 22 },
      { number: 18, type: 'normal', position: 23 },
      { number: 19, type: 'normal', position: 24 },
      { number: 20, type: 'normal', position: 25 },
      { number: 21, type: 'weekend', position: 26 },
      { number: 22, type: 'weekend', position: 27 },
      { number: 23, type: 'holiday', position: 28 },
      { number: 24, type: 'holiday', position: 29 },
      { number: 25, type: 'holiday', position: 30 },
      { number: 26, type: 'holiday', position: 31 },
      { number: 27, type: 'holiday', position: 32 },
      { number: 28, type: 'holiday', position: 33 },
      { number: 29, type: 'weekend', position: 34 },
      { number: 30, type: 'normal', position: 35 },
      { number: 31, type: 'normal', position: 36 }
    ]
  }


  return (
    <div className="general-page">
      {/* <div className="main">
        <div className="initial-snow">
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
        </div>
      </div> */}
      <CalendarWidget month={month} />
      <ClockWidget />
    </div >
  )
}
export default GeneralPage