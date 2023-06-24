import config from "../config.json";

export default class JSONBinService {
  constructor() {
    this._apiBase = "https://api.jsonbin.io/v3/b";
    this._binId = config.binId;
    this._masterKey = config.masterKey;
  }

  getData = async () => {
    const response = await fetch(`${this._apiBase}/${this._binId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": this._masterKey,
      },
    });
    return await response.json();
  };

  updateData = async (data) => {
    // console.log('request')
    // console.log(data);
    const response = await fetch(`${this._apiBase}/${this._binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": this._masterKey,
      },
      body: JSON.stringify(data),
    });
  };
}
