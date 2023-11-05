class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=94542c4e409fb632749d9feb479de4d3'

    getResours = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharecters = () => {
        return this.getResours(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharecter = (id) => {
        return this.getResours(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;