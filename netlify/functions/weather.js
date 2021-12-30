import fetch from "node_modules/node-fetch/@types/index.d.ts";

const API_KEY = process.env.API_KEY
export async function handler(event, context) {
    const lat = event.queryStringParameters.lat;
    const lon = event.queryStringParameters.lon;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    return await fetch(url).then(response => response.json()).then(data => ({
        headers: {
            "content-type": "application/json; charset=utf-8",
        },
        statusCode: 200,
        body: JSON.stringify(data),
    }));
}

  