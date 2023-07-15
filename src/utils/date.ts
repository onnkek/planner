const getNumber = (number: number) => (number < 10 ? `0${number}` : number)

export const getDeadline = (deadlineDate: string) => {
    const date = new Date(deadlineDate),
        day = date.getDate(),
        month = String(date.getMonth() + 1).padStart(2, "0"),
        year = date.getFullYear(),
        hour = getNumber(date.getHours()),
        minute = getNumber(date.getMinutes())
    return `${day}.${month}.${year} ${hour}:${minute}`
}

export const getDate = (deadlineDate: string) => {
    const deadline = Date.parse(deadlineDate)
    const currentTime = deadline - Date.now()
    let result = ""
    const hours = getNumber(Math.floor(currentTime / (1000 * 60 * 60))),
        minutes = getNumber(Math.floor((currentTime / (1000 * 60)) % 60)),
        seconds = getNumber(Math.floor((currentTime / 1000) % 60))
    result += Number(hours) > 0 ? `${hours}:` : "00:"
    result += Number(minutes) > 0 ? `${minutes}:` : "00:"
    result += Number(seconds) > 0 ? seconds : "00"
    return result
}

export const getProgress = (deadlineDate: string, createDate: string) => {
    const deadline = Date.parse(deadlineDate)
    const fullTime = deadline - Number(createDate)
    const currentTime = deadline - Date.now()
    if (currentTime < 0) {
       return 0
    }
    return (currentTime / fullTime) * 100
}