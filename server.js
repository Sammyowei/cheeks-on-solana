var express = require('express');
var app = express();

var cors = require('cors');


app.use(cors);

const port = 3000;

app.get('/', (_, res) => {
    res.send('Hello World samuelson here')
});

app.listen(port
);