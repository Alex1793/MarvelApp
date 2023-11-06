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

    getAllCharecters = async () => {
        const res = await this.getResours(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);

        return res.data.results.map(this._transformCharacter)
    }

    getCharecter = async (id) => {
        const res = await this.getResours(`${this._apiBase}characters/${id}?${this._apiKey}`);

        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description,
            thumbnale: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService;