import config from "../config.json"

export default class JSONBinService {
  constructor() {
    this._apiBase = "https://jsonbin.org/me/demo1"
    this._apiKey = config.apiKey
  }

  getData = async () => {
    const response = await fetch(this._apiBase, {
      method: "GET",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
    })
    return await response.json()
  }

  // getData = async () => {
  //   const response = await fetch(this._apiBase, {
  //     method: "POST",
  //     headers: {
  //       authorization: `token ${this._apiKey}`,
  //     },
  //     body: JSON.stringify([{
  //       "id": 117,
  //       "body": "Отчет за день",
  //       "create": 1687847127638,
  //       "remove": "",
  //       "timeleft": "",
  //       "deadline": "2023-06-27T15:30",
  //       "visible": false
  //     }])
  //   })
  //   return response
  // }

  updateData = async (data) => {
    const response = await fetch(this._apiBase, {
      method: "POST",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
      body: JSON.stringify(data)
    })
    return response
  }
}
