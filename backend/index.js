const express = require('express');
const app = express();
const port = 8000;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const data = [
        {
            id: "1",
            title: "Египет",
            img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/08/egipet5-800x400.jpg",
            temperature: "+21 - +31",
            category: "Hot",
            cities: [
                {
                    id: "1",
                    title: "Каир",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cairo_Montage.png/290px-Cairo_Montage.png"
                    ],
                    middlePrices: "90",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                },
                {
                    id: "2",
                    title: "Александрия",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Abu_el-Abbas_el-Mursi_Mosque_in_Alexandria.jpg/265px-Abu_el-Abbas_el-Mursi_Mosque_in_Alexandria.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Alexandria_-_Montaza_Palace_-_front_view.JPG/265px-Alexandria_-_Montaza_Palace_-_front_view.JPG",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Kay%C4%B1tbay_Kalesi.jpg/265px-Kay%C4%B1tbay_Kalesi.jpg"
                    ],
                    middlePrices: "70",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                }],
            visits: "30",
            description: "Some description of country. Includes language, currency, some historical facts, the most interesting cities for travel",
            shortDescription: "Short description of the country for country cards on 1-3 lines"
        },
        {
            id: "4",
            title: "Мальта",
            img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/10/maldivy-pervoe-znakomstvo-800x400.jpg",
            temperature: "+25 - +31",
            category: "Hot",
            cities: [
                {
                    id: "3",
                    title: "Аттард",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Attardc.jpg/220px-Attardc.jpg"
                    ],
                    middlePrices: "60",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                },
                {
                    id: "4",
                    title: "Бирзеббуджа",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Birzebbuga_Church.JPG/240px-Birzebbuga_Church.JPG",
                        "https://web.archive.org/web/20110106224417im_/http://www.maltavista.ru/img/photo/images2/cs_01.jpg"
                    ],
                    middlePrices: "75",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                }
            ],
            visits: "21",
            description: "Some description of country. Includes language, currency, some historical facts, the most interesting cities for travel",
            shortDescription: "Short description of the country for country cards on 1-3 lines"
        },
        {
            id: "2",
            title: "Израиль",
            img: "https://photos.smugmug.com/Asia/Israel/Tel-Aviv-Jaffa/i-zbQZ5ts/0/37d817e5/800x400!/IMG_9367-800x400!.jpg",
            temperature: "+6 - +37",
            category: "Mild",
            cities: [
                {
                    id: "5",
                    title: "Акко",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Aerial_view_of_Acre_1.jpg/267px-Aerial_view_of_Acre_1.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/City_of_Acre%2C_Israel_%28aerial_view%2C_2005%29.jpg/250px-City_of_Acre%2C_Israel_%28aerial_view%2C_2005%29.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Amatsuliman01.JPG/250px-Amatsuliman01.JPG"
                    ],
                    middlePrices: "90",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                },
                {
                    id: "6",
                    title: "Ашкелон",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Honor_jewish_soldjer_WW2.jpg/220px-Honor_jewish_soldjer_WW2.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ashqelon_Railway.jpg/240px-Ashqelon_Railway.jpg"
                    ],
                    middlePrices: "100",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                }
            ],
            visits: "50",
            description: "Some description of country. Includes language, currency, some historical facts, the most interesting cities for travel",
            shortDescription: "Short description of the country for country cards on 1-3 lines"
        },
        {
            id: "5",
            title: "Австрия",
            img: "http://luchshij-otdyx.ru/wp-content/uploads/2014/10/otdyx-v-avstrii1-800x400.jpg",
            temperature: "-20 - +29",
            category: "Mild",
            cities: [
                {
                    id: "7",
                    title: "Вена",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Collage_von_Wien.jpg/290px-Collage_von_Wien.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Map_Vienna_1547.jpg/240px-Map_Vienna_1547.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Anonym_Entsatz_Wien_1683.jpg/240px-Anonym_Entsatz_Wien_1683.jpg"
                    ],
                    middlePrices: "45",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                },
                {
                    id: "8",
                    title: "Грац",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GrazerRathaus-edit.jpg/290px-GrazerRathaus-edit.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kunsthaus-Graz-Nacht-Medienfassade.jpg/220px-Kunsthaus-Graz-Nacht-Medienfassade.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Murinsel_nah.jpg/220px-Murinsel_nah.jpg"
                    ],
                    middlePrices: "80",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                }],
            visits: "69",
            description: "Some description of country. Includes language, currency, some historical facts, the most interesting cities for travel",
            shortDescription: "Short description of the country for country cards on 1-3 lines"
        },
        {
            id: "3",
            title: "Монголия",
            img: "https://hurai-hobok.ru/wp-content/uploads/2018/08/2018_07_29_18-800x400.jpeg",
            temperature: "+25 - +35",
            category: "Cold",
            cities: [
                {
                    id: "9",
                    title: "Эрдэнэт",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Erdenet_02.jpg/300px-Erdenet_02.jpg"
                    ],
                    middlePrices: "60",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                },
                {
                    id: "10",
                    title: "Чойбалсан",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kerulen.jpg/300px-Kerulen.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mongolia_location_map.svg/290px-Mongolia_location_map.svg.png"
                    ],
                    middlePrices: "87",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                }],
            visits: "15",
            description: "Some description of country. Includes language, currency, some historical facts, the most interesting cities for travel",
            shortDescription: "Short description of the country for country cards on 1-3 lines"
        },
        {
            id: "6",
            title: "Эстония",
            img: "https://bptrip.ru/wp-content/uploads/2014/08/estonia-tartu-800x400.jpg",
            temperature: "-20 - +31",
            category: "Cold",
            cities: [
                {
                    id: "11",
                    title: "Тарту",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tartu_university_christmas.jpg/220px-Tartu_university_christmas.jpg",
                        "https://upload.wikimedia.org/wikipedia/ru/thumb/c/cd/%D0%A2%D0%B0%D1%80%D1%82%D1%83_%D1%83%D0%BB%D0%B8%D1%86%D0%B0.jpg/220px-%D0%A2%D0%B0%D1%80%D1%82%D1%83_%D1%83%D0%BB%D0%B8%D1%86%D0%B0.jpg"
                    ],
                    middlePrices: "58",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                },
                {
                    id: "12",
                    title: "Пярну",
                    img: [
                        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sauga_river.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/0/04/Parnu_1989.jpg"
                    ],
                    middlePrices: "35",
                    description: "Description of the city. Includes showplaces, historical facts and other info",
                    shortDescription: "Short info about the city for city card on country page"
                }],
            visits: "25",
            description: "Some description of country. Includes language, currency, some historical facts, the most interesting cities for travel",
            shortDescription: "Short description of the country for country cards on 1-3 lines"
        }
    ]
;

/**
 * Transform full data array to short_info array for list of countries request
 * @param data array of objects
 * @returns {*} new array of short_info objects
 */
const transformDataToShortInfoArray = (data) => {
    return data.map(
        (el) => {
            return (
                {
                    id: el.id,
                    title: el.title,
                    img: el.img,
                    category: el.category,
                    shortDescription: el.shortDescription
                }
            )
        }
    )
};

const getPopularCountries = () => {
    const popularData =  data.sort((a, b) => b.visits - a.visits).slice(0, 3);
    return transformDataToShortInfoArray(popularData);
};

const getCountriesShortInfoByCategory = (category) => {
    const shortInfoArray = transformDataToShortInfoArray(data);
    return shortInfoArray.filter(
        (el) => el.category === category
    )
};

const getCountryById = (countryId) => {
    return data.find(
        (el)=> el.id === countryId
    )
};

/**
 * Return array of objects with countries
 */
app.get('/countries/:category', (request, response) => {
    const resp = getCountriesShortInfoByCategory(request.params.category);
    response.json(resp);
});

/**
 * Return json object including all country information
 */
app.get('/:country_id', (request, response) => {
    const resp = getCountryById(request.params.country_id);
    response.json(resp)
});

/**
 *  Return array of popular country objects
 */
app.get('/popular/:id', (request, response) => {
    const resp = getPopularCountries();
    response.json(resp)
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
