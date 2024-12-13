import React, { useEffect } from "react"
import "./GeneralPage.sass"
import CalendarWidget from "../../widgets/CalendarWidget/CalendarWidget"
import ClockWidget from "../../widgets/ClockWidget/ClockWidget"
import NewYearWidget from "../../widgets/NewYearWidget/NewYearWidget"
import TasksWidget from "../../widgets/TasksWidget/TasksWidget"
import WeatherWidget from "../../widgets/WeatherWidget/WeatherWidget"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import { Status } from "../../../models/Status"
import { getSettings } from "../../../redux/SettingsSlice"
import { getWeather } from "../../../redux/WeatherSlice"

const GeneralPage = () => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.settings.status)
  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getSettings())
      dispatch(getWeather())
    }
  }, [status, dispatch])

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
      <CalendarWidget date={new Date().toDateString()} />
      <ClockWidget />
      <NewYearWidget />
      <TasksWidget />
      <WeatherWidget />
    </div >
  )
}
export default GeneralPage