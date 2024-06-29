const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URL_DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
