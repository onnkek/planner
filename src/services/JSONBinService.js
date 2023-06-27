import config from "../config.json";

export default class JSONBinService {
  constructor() {
    this._apiBase = "https://jsonbin.org/me/main";
    this._apiKey = config.apiKey;
  }

  getData = async () => {
    const response = await fetch(this._apiBase, {
      method: "GET",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
    });
    return await response.json();
  };

  updateData = async (data) => {
    const response = await fetch(this._apiBase, {
      method: "POST",
      headers: {
        authorization: `token ${this._apiKey}`,
      },
      body: JSON.stringify(data),
    });
  };
}
