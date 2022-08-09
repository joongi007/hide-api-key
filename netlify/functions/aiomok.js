const axios = require('axios');

exports.handler = async function(event, context){
    const API_KEY = process.env.API_KEY;
    const target = event.queryStringParameters.target;
    const data = require(`./model/${target}/model.json`);

    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json; charset=utf-8",
        },
        statusCode: 200,
        body: data,
    };
}
