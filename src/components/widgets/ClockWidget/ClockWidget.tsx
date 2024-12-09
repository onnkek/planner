import React, { useEffect, useState } from "react"
import "./ClockWidget.sass"

interface TextType {
  number: number
  x: number
  y: number
}

const ClockWidget = React.memo(() => {
  const startX = 150;
  const startY = 150;
  const [hourPosition, setHourPosition] = useState({ x: startX, y: startY })
  const [minutePosition, setMinutePosition] = useState({ x: startX, y: startY })
  const [secondPosition, setSecondPosition] = useState({ x: startX, y: startY })
  const x = 80;
  const y = 80;

  const lenHour = 90;
  const lenMin = 130;
  const lenSec = 150;
  const texts: TextType[] = []
  let ang = (-135 / 180) * Math.PI;
  for (let i = 1; i <= 12; i++) {
    ang += (30 / 180) * Math.PI;
    let newX = 0
    let newY = 0
    if (i < 10) {
      newX = x * Math.cos(ang) - y * Math.sin(ang) + startX - 7
      newY = x * Math.sin(ang) + y * Math.cos(ang) + startY + 7
    } else {
      newX = x * Math.cos(ang) - y * Math.sin(ang) + startX - 14
      newY = x * Math.sin(ang) + y * Math.cos(ang) + startY + 14
    }
    texts.push({ number: i, x: newX, y: newY })
  }
  useEffect(() => {

    let sah = 0;
    const time = new Date();
    if (time.getHours() > 12) {
      sah =
        ((-90 +
          (time.getHours() - 12) * 30 +
          (time.getMinutes() * 30) / 60 +
          (time.getSeconds() * 30) / 3600) /
          180) *
        Math.PI;
    } else {
      sah =
        ((-90 +
          time.getHours() * 30 +
          (time.getMinutes() * 30) / 60 +
          (time.getSeconds() * 30) / 3600) /
          180) *
        Math.PI;
    }
    let sam =
      ((-90 + time.getMinutes() * 6 + (time.getSeconds() * 6) / 60) / 180) *
      Math.PI;
    let sas = ((-90 + time.getSeconds() * 6) / 180) * Math.PI;
    const xh = startX + lenHour - 5 - startX;
    const yh = startY - startY;
    const xm = startX + lenMin - 5 - startX;
    const ym = startY - startY;
    const xs = startX + lenSec - 10 - startX;
    const ys = startY - startY;

    const dxh = (6 / 3600 / 180) * Math.PI;
    const dxm = (6 / 60 / 180) * Math.PI;
    const dxs = (6 / 180) * Math.PI;

    sah += dxh;
    sam += dxm;
    sas += dxs;

    setHourPosition({
      x: xh * Math.cos(sah) - yh * Math.sin(sah) + startX,
      y: xh * Math.sin(sah) + yh * Math.cos(sah) + startY
    })
    setMinutePosition({
      x: xm * Math.cos(sam) - ym * Math.sin(sam) + startX,
      y: xm * Math.sin(sam) + ym * Math.cos(sam) + startY
    })
    setSecondPosition({
      x: xs * Math.cos(sas) - ys * Math.sin(sas) + startX,
      y: xs * Math.sin(sas) + ys * Math.cos(sas) + startY
    })
    setInterval(() => {

      const dxh = (6 / 3600 / 180) * Math.PI;
      const dxm = (6 / 60 / 180) * Math.PI;
      const dxs = (6 / 180) * Math.PI;

      sah += dxh;
      sam += dxm;
      sas += dxs;

      setHourPosition({
        x: xh * Math.cos(sah) - yh * Math.sin(sah) + startX,
        y: xh * Math.sin(sah) + yh * Math.cos(sah) + startY
      })
      setMinutePosition({
        x: xm * Math.cos(sam) - ym * Math.sin(sam) + startX,
        y: xm * Math.sin(sam) + ym * Math.cos(sam) + startY
      })
      setSecondPosition({
        x: xs * Math.cos(sas) - ys * Math.sin(sas) + startX,
        y: xs * Math.sin(sas) + ys * Math.cos(sas) + startY
      })
    }, 1000);
  }, [])

  return (
    <div className="clockWidget">
      <svg width={300} height={300}>
        {texts.map(text => <text fill="white" key={text.number} x={text.x} y={text.y} >{text.number}</text>)}
        <line x1={startX} y1={startY} x2={hourPosition.x} y2={hourPosition.y} stroke="white" strokeWidth={4}></line>
        <line x1={startX} y1={startY} x2={minutePosition.x} y2={minutePosition.y} stroke="white" strokeWidth={2}></line>
        <line x1={startX} y1={startY} x2={secondPosition.x} y2={secondPosition.y} stroke="red" strokeWidth={1}></line>
        <circle cx={startX} cy={startY} r="140" stroke="#475569" strokeWidth="5" fill="none"></circle>
        <circle cx={startX} cy={startY} r="2" stroke="white" fill="white" strokeWidth="5" ></circle>

      </svg>
    </div>
  )
})

export default ClockWidget