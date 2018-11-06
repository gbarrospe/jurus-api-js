const express = require('express');
const app = express();
require('dotenv').config();

const httpRouter = require("./src/router/httpRouter");
app.use('/',httpRouter);

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
