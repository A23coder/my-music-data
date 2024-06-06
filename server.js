const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/my-music-data', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
            return;
        }
        res.header('Content-Type', 'application/json');
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
