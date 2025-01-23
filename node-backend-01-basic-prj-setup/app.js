const express = require('express');
const bodyParser = require('body-parser');

const placesRouter = require('./routes/places-routes');

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(placesRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
