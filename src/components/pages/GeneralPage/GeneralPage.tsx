import React, { MouseEvent, useEffect, useState } from "react"
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
import VacationWidget from "../../widgets/VacationWidget/VacationWidget"

const GeneralPage = () => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.settings.status)
  const [select, setSelect] = useState<EventTarget | undefined>(undefined)
  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getSettings())
      dispatch(getWeather())
    }
  }, [status, dispatch])

  // const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
  //   // setSelect(e.target)
  // }
  // const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
  //   // console.log(select)
  // }
  // const mouseUpHandler = (e: MouseEvent<HTMLDivElement>) => {
  //   // setSelect(undefined)
  // }

  return (
    <div
      className="general-page"
      // onMouseDown={mouseDownHandler}
      // onMouseMove={mouseMoveHandler}
      // onMouseUp={mouseUpHandler}
    >
      <CalendarWidget date={new Date().toDateString()} />
      <ClockWidget />
      <NewYearWidget />
      <VacationWidget />
      <TasksWidget />
      <WeatherWidget />
      <button className="general-page__edit">Edit</button>
    </div >
  )
}
export default GeneralPage