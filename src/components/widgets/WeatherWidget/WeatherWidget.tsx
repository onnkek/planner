import React, { useEffect } from "react"
import "./WeatherWidget.sass"
import { Status } from "../../../models/Status"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import { getWeather } from "../../../redux/WeatherSlice"
import Spinner from "../../UI/Spinner/Spinner"


const WeatherWidget = React.memo(() => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.posts.statusFetchPosts)
  const weather = useAppSelector(state => state.weather.weather)

  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getWeather())
    }
  }, [status, dispatch])

  return (
    <div className="weatherWidget">
      {status === Status.Loading && <Spinner />}
      {status === Status.Succeeded && (
        <>
          {weather.main && weather.main.temp && <div>Temp: {Math.round(weather.main.temp)} ℃</div>}
          {weather.main && weather.main.feels_like && <div>Feels like: {Math.round(weather.main.feels_like)} ℃</div>}
          {weather.wind && weather.wind.speed && <div>Wind speed: {weather.wind.speed} m/s</div>}
          {weather.clouds && weather.clouds.all && <div>Clouds: {weather.clouds.all} %</div>}
          {weather.rain && <div>Rain: {weather.rain["1h"]} mm</div>}
          {weather.snow && <div>Snow: {weather.snow["1h"]} mm</div>}
          {weather.weather && weather.weather[0].icon && <img className="weatherWidget__icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />}
        </>

      )}
    </div>
  )
})

export default WeatherWidget