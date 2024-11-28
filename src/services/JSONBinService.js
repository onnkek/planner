import config from "../config.json"

export default class JSONBinService {
  constructor () {
    this._apiBase = "http://localhost:8000"
    this._apiPosts = "tasks"
    this._apiBadges = "badges"
    // this._apiKey = config.apiKey
  }

  getPosts = async () => {
    const response = await fetch(`${this._apiBase}/${this._apiPosts}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // authorization: `token ${this._apiKey}`,
      },
    })
    return await response.json()
  }

  updatePosts = async (id, data) => {
    const response = await fetch(`${this._apiBase}/${this._apiPosts}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    return response
  }

  removePost = async (id) => {
    const response = await fetch(`${this._apiBase}/${this._apiPosts}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(id)
    })
    return response
  }

  addTask = async (data) => {
    const response = await fetch(`${this._apiBase}/${this._apiPosts}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    return response
  }

  getBadges = async () => {
    const response = await fetch(`${this._apiBase}/${this._apiBadges}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // authorization: `token ${this._apiKey}`,
      },
    })
    return await response.json()
  }

  addBadge = async (data) => {
    const response = await fetch(`${this._apiBase}/${this._apiBadges}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    return response
  }

  removeBadge = async (id) => {
    const response = await fetch(`${this._apiBase}/${this._apiBadges}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(id)
    })
    return response
  }



}
