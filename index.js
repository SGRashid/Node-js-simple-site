const express = require('express');

const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
  response.sendFile('./static/index.html');
});

app.listen('3000', () => console.log('Server started 3000'));