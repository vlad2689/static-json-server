const fs = require('fs');
const express = require('express');

const app = express();
const port = 8080;

app.get('/api/model', (req, res) => {
    fs.readFile('./web_model/model.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))