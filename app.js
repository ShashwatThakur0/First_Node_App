const express = require('express');
const router = require('./routes/pages');

const app = express();
const port = 3000;


// implement routes
app.use(router);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
