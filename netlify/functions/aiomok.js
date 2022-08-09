const axios = require('axios');

exports.handler = async function(event, context){
    const target = event.queryStringParameters.target;
    const url = `https://my-api-server.netlify.app/model/${target}/model.json`;
    const response = await axios.get(url);
    const data = await response.data;
    //
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json; charset=utf-8",
        },
        statusCode: 200,
        body: JSON.stringify(data),
    };
}
