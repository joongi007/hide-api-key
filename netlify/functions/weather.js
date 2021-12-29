const fetch = require("node-fetch");
const { json } = require("stream/consumers");

const { API_KEY } = process.env
exports.handler = async (event, context) => {
    const lat = event.queryStringParameters.lat;
    const lon = event.queryStringParameters.lon;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    return await fetch(url).then(response => response.json()).then(data => ({
            statusCode: 200,
            body: json.stringify(data),
    }));
  };

  