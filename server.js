const express = require('express');
const methodOverride = require('method-override')

const controllers = require('./controllers');

const app = express();

require('./config/db.connection')

const PORT = 4000;

app.get('/', (req, res) => {
    res.send(`Hello World!`)
})

app.listen(PORT, () => console.log(`This is running on ${PORT}`))