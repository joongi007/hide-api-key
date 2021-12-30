import fetch from "node-fetch";

exports.handler = async function(event, context){
    const API_KEY = process.env.API_KEY
    const lat = event.queryStringParameters.lat;
    const lon = event.queryStringParameters.lon;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    const response = await fetch(url)
    const data = await response.json()

    return {
        headers: {
            "content-type": "application/json; charset=utf-8",
        },
        statusCode: 200,
        body: JSON.stringify([url, response, data]),
    }
}
  