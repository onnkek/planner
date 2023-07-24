import config from "../config.json"

export default class JSONBinService {
  constructor() {
    this._apiBase = "https://jsonbin.org/me"
    this._apiPosts = "demo1"
    this._apiBadges = "badges"
    this._apiKey = config.apiKey
  }

  getPosts = async () => {
    const response = await fetch(`${this._apiBase}/${this._apiPosts}`, {
      method: "GET",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
    })
    return await response.json()
  }

  // getPosts = async () => {
  //   const response = await fetch(`${this._apiBase}/${this._apiBadges}`, {
  //     method: "POST",
  //     headers: {
  //       authorization: `token ${this._apiKey}`,
  //     },
  //     body: JSON.stringify([{
  //       "test": true
  //     }])
  //   })
  //   return response
  // }

  // getPosts = async () => {
  //   const response = await fetch(`${this._apiBase}/${this._apiPosts}`, {
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
  //       "visible": false,
  //       "badges": []
  //     }])
  //   })
  //   return response
  // }

  updatePosts = async (data) => {
    const response = await fetch(`${this._apiBase}/${this._apiPosts}`, {
      method: "POST",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
      body: JSON.stringify(data)
    })
    return response
  }

  getBadges = async () => {
    const response = await fetch(`${this._apiBase}/${this._apiBadges}`, {
      method: "GET",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
    })
    return await response.json()
  }
  updateBadges = async (data) => {
    const response = await fetch(`${this._apiBase}/${this._apiBadges}`, {
      method: "POST",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
      body: JSON.stringify(data)
    })
    return response
  }

}
