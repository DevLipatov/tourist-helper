export default class DataService {

    _apiBase = 'http://localhost:8000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res;
    }

    async getAllT() {
        const res = await this.getResource(`/hh`);
        console.log(res);
        return res.results;
    }

    async getByCategory(category) {
        let info = [];

        switch (category) {
            case "Hot":
                info = [
                    {
                        id: "1",
                        title: "Египет",
                        img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/08/egipet5-800x400.jpg",
                        temperature: "+21 - +31",
                        category: "Hot"
                    }
                ];
                break;
            case "Mild":
                info = [
                    {
                        id: "2",
                        title: "Израиль",
                        img: "https://photos.smugmug.com/Asia/Israel/Tel-Aviv-Jaffa/i-zbQZ5ts/0/37d817e5/800x400!/IMG_9367-800x400!.jpg",
                        temperature: "+6 - +37",
                        category: "Mild"
                    }
                ];
                break;
            case "Cold":
                info = [
                    {
                        id: "3",
                        title: "Монголия",
                        img: "https://hurai-hobok.ru/wp-content/uploads/2018/08/2018_07_29_18-800x400.jpeg",
                        temperature: "+25 - +35",
                        category: "Cold"
                    }
                ];
                break;
            default:
                return info
        }
        return new Promise((resolve) => {setTimeout(()=> resolve(info), 1700)})
    }

    async getPopular() {
        const popularInfo = [
            {
                id: "9",
                title: "США",
                img: "http://www.osiyogroup.com/wp-content/uploads/2013/03/landscape-7-800x400.jpg",
            },
            {
                id: "21",
                title: "Норвегия",
                img: "https://www.sleepzone.ie/uploads/images/PanelImages800x400/TheBurren/General/sleepzone_hostels_burren_800x400_14.jpg"
            },
            {
                id: "16",
                title: "Новая зеландия",
                img: "https://princessyachtcharter.com/wp-content/uploads/2014/11/shutterstock_56456779-800x400.jpg"
            }
        ];
        return new Promise((resolve) => resolve(popularInfo))
    }
}