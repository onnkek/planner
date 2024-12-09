
export default class JSONBinService {
  constructor () {
    this._apiBase = "http://zavgorodinir.oduur.so:8000"
    this._apiPosts = "tasks"
    this._apiBadges = "badges"
    this._apiNotes = "notes"
    this._apiSettings = "settings"
  }

  getPosts = async () => {
    const response = await fetch(`${this._apiBase}/${this._apiPosts}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
    })
    return response
  }

  getNotes = async () => {
    const response = await fetch(`${this._apiBase}/${this._apiNotes}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await response.json()
  }
  updateNote = async (data) => {
    const response = await fetch(`${this._apiBase}/${this._apiNotes}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    return response
  }

  getSettings = async () => {
    const response = await fetch(`${this._apiBase}/${this._apiSettings}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await response.json()
  }

  addVacation = async (data) => {
    const response = await fetch(`${this._apiBase}/${this._apiSettings}/vacations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    return response
  }

  addHoliday = async (data) => {
    const response = await fetch(`${this._apiBase}/${this._apiSettings}/holidays`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    return response
  }

  removeVacation = async (id) => {
    const response = await fetch(`${this._apiBase}/${this._apiSettings}/vacations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    return response
  }

  removeHoliday = async (id) => {
    const response = await fetch(`${this._apiBase}/${this._apiSettings}/holidays/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    return response
  }

}
