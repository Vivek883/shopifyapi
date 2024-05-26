// https://ce5ef30c1e4768394af59456800262b3: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@messold101.myshopify.com/admin/api/2024-04/products.json
const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let apikey = 'ce5ef30c1e4768394af59456800262b3';
let pass = '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';
let endpoint = 'products';

let options = {
    'method' : 'GET',
    'url': `https://${apikey}:${pass}@messold101.myshopify.com/admin/api/2024-04/${endpoint}.json`,
    'headers': {
        'X-Shopify-Access-Token': pass
    }
};

app.get("/getdata", (req, resp)=>{
    request(options, function(error, response ){
        if(error) throw new Error(error);
        resp.send(response.body);
        console.log(response.body);
    });
});

app.listen(3400);

