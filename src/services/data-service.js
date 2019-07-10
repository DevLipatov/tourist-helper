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

    async getAll() {
        const res = await this.getResource(`/`);
        //TODO delete log
        console.log(`getAll response =`);
        console.log(res);
        return new Promise((resolve) => resolve(res.results));
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
                    },
                    {
                        id: "4",
                        title: "Мальдивы",
                        img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/10/maldivy-pervoe-znakomstvo-800x400.jpg",
                        temperature: "+25 - +31",
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
                    },
                    {
                        id: "5",
                        title: "Австрия",
                        img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/10/otdyx-v-avstrii1-800x400.jpg",
                        temperature: "-20 - +29",
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
                    },
                    {
                        id: "6",
                        title: "Эстония",
                        img: "https://bptrip.ru/wp-content/uploads/2014/08/estonia-tartu-800x400.jpg",
                        temperature: "-20 - +31",
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
                id: "6",
                title: "Эстония",
                img: "https://bptrip.ru/wp-content/uploads/2014/08/estonia-tartu-800x400.jpg",
                temperature: "-20 - +31",
                category: "Cold"
            },
            {
                id: "5",
                title: "Австрия",
                img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/10/otdyx-v-avstrii1-800x400.jpg",
                temperature: "-20 - +29",
                category: "Mild"
            },
            {
                id: "1",
                title: "Египет",
                img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/08/egipet5-800x400.jpg",
                temperature: "+21 - +31",
                category: "Hot"
            }
        ];
        return new Promise((resolve) => resolve(popularInfo))
    }
}