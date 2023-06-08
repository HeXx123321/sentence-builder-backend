const cors = require('cors')
const morgan = require('morgan')

const dotenv = require('dotenv');

dotenv.config({path: '.env'});

if (process.env.NODE_ENV !== "production") {
    dotenv.config({
        path: ".env",
    });
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3010;

const DATABASE_URI = process.env.DATABASE_URI;

// Debug Nonsense, CORS incoming!
console.log('this is fun')
console.log(PORT);
console.log(DATABASE_URI);

// Start DB Stuff
mongoose.connect(DATABASE_URI, { useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// END DB Stuff

// Middleware Setup
app.use(
    cors({
        origin: "*",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",

}))

app.use(morgan("combined"));

app.use(express.json(({limit: "100mb"})))

// Routes
const sentenceRouter = require('./src/routes/sentences')
const wordsRouter = require('./src/routes/words')

app.use('/words', wordsRouter)
app.use('/sentences', sentenceRouter)

// Server INIT
app.listen(PORT, () => console.log('The server has began...'))