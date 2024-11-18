const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Razia-Hello World!Added Manual Review stage to code Pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
