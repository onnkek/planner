import React, { useEffect } from "react"
import "./WeatherWidget.sass"
import { Status } from "../../../models/Status"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import { getWeather } from "../../../redux/WeatherSlice"
import Spinner from "../../UI/Spinner/Spinner"
import { GeoAltFill } from "react-bootstrap-icons"


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
          <div className="weatherWidget__header">
            <div className="weatherWidget__header-city">{weather.name && weather.name}</div>
            <GeoAltFill className="weatherWidget__header-icon" />
          </div>
          <div className="weatherWidget__body">
            <div className="weatherWidget__left">
              {weather.weather && weather.weather[0].icon && <img className="weatherWidget__body-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} />}
            </div>
            <div className="weatherWidget__right">
              <div className="weatherWidget__temp-container">
                <div className="weatherWidget__temp">{weather.main && weather.main.temp && Math.round(weather.main.temp)}</div>
                <div className="weatherWidget__temp-meas">°C</div>
              </div>
              <div className="weatherWidget__feels">{weather.main && weather.main.feels_like && <div>Feels like: {Math.round(weather.main.feels_like)} ℃</div>}</div>
            </div>
          </div>
          <div className="weatherWidget__footer">
            <div className="weatherWidget__footer-left">
              {weather.wind && weather.wind.speed && <div>Wind speed</div>}
              {weather.clouds && weather.clouds.all && <div>Clouds</div>}
              {weather.rain && <div>Rain</div>}
              {weather.snow && <div>Snow</div>}
            </div>
            <div className="weatherWidget__footer-right">
              {weather.wind && weather.wind.speed && <div>{weather.wind.speed} m/s</div>}
              {weather.clouds && weather.clouds.all && <div>{weather.clouds.all} %</div>}
              {weather.rain && <div>{weather.rain["1h"]} mm</div>}
              {weather.snow && <div>{weather.snow["1h"]} mm</div>}
            </div>
          </div>
        </>

      )}
    </div>
  )
})

export default WeatherWidget