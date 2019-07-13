export default class DataService {

    _apiBase = 'http://localhost:8000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }

        return await res.json();
    }

    getCountriesByCategory = async (category) => {
        return await this.getResource(`/countries/${category}`);
    };

    getShortInfoByName = async (countryName) => {
        return await this.getResource(`/country/short/${countryName}`);
    };

    getFullInfoByName = async (countryName) => {
        return await this.getResource(`/country/full/${countryName}`);
    };

    getCountryByName = async (countryName) => {
        return await this.getResource(`/country/${countryName}`);
    };

    getPopular = async () => {
        return await this.getResource(`/popular`);
    };
}