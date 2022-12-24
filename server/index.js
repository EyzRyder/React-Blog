require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const careerRoutes = require('./routes/careerRoutes');

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


mongoose.set("strictQuery", true);

const dbURI = process.env.dbURI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}/`));
        console.log("connect to db");
    })
    .catch((err) => console.log(err));



app.get('/', (req, res) => {
    res.send('hello world');
})

app.use('/blogs', blogRoutes)
app.use('/careers', careerRoutes)
