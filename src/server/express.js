const path = require('express');
const express = require('express');

const server = express();

server.listen(8080, () => {
  console.log('Dev listening on 8080');
});
