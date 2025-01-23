const express = require('express');
const bodyParser = require('body-parser');

const placesRouter = require('./routes/places-routes');

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use('/api/places', placesRouter); // api/places

app.use((err, req, res) => {
    if(!res.headersSent) {
        res.status(err.status || 500);
        res.json({message: err.message || "An unknown error occurred"});
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
