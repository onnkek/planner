import config from '../config.json';

export default class JSONBinService {

    
    constructor() {
        this._apiBase = 'https://api.jsonbin.io/v3/b';
        this._binId = config.binId;
        this._masterKey = config.masterKey;
    }

    getData = async () => {
        const response = await fetch(`${this._apiBase}/${this._binId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": this._masterKey
            },
        });
        const res = await response.json();
        // res.record.map(item => console.log(item));
        return res.record;
        
    }

    updateData = async (data) => {
        const response = await fetch(`${this._apiBase}/${this._binId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": this._masterKey
            },
            body: JSON.stringify(data)
        });
    }
}