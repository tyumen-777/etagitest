class Api {
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getCard() {
        return fetch(`${this._baseUrl}/Flats`, {headers: this._headers})
            .then(response => this._checkRequestResult(response));
    }
    getCardById(id) {

        return this.getCard().then(response => response.find(item => item.id === +id)
        )
    }

    // Parsing JSON on successful request
    _checkRequestResult(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Возникла ошибка: ${response.status}`);
    }
}

// Instantiating class
const api = new Api({
    baseUrl: 'https://610f8e44c848c900171b3915.mockapi.io',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;