const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('We have created a AWS Pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
