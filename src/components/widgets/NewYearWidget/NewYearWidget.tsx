import React from "react"
import "./NewYearWidget.sass"


const NewYearWidget = React.memo(() => {

  const beforeNewYear = 31 - (new Date()).getDate()
  return (
    <div className="widget newYearWidget">
      {beforeNewYear > 0 ? (
        <>
          <div className="newYearWidget__header">Дней до нового года</div>
          <div className="newYearWidget__number">{beforeNewYear}</div>
        </>
      ) : (
        <>
          <div className="newYearWidget__header newYearWidget__header_2025">Happy New Year</div>
          <div className="newYearWidget__number">2025</div>
        </>
      )}
    </div>
  )
})

export default NewYearWidget