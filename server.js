// import { runApp, closeApp } from "./app.js"
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

//const app = runApp();

const app = express()
const mongoose = require('mongoose')

const dotenv = require('dotenv');

dotenv.config({path: '.env'});

/// For prod, later on
if (process.env.NODE_ENV !== "production") {
    dotenv.config({
        path: ".env",
    });
}

const PORT = process.env.PORT || 3010;

const DATABASE_URI = process.env.DATABASE_URI;

/////////////////////////////////////////////////////////////////
////////////////// Database Setup ///////////////////////////////
/////////////////////////////////////////////////////////////////

mongoose.connect(DATABASE_URI, { useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

/////////////////////////////////////////////////////////////////
////////////////// Database Setup End ///////////////////////////
/////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
////////////////// Middleware Setup Start /////////////////////////
///////////////////////////////////////////////////////////////////

app.use(
    cors({
        origin: "*",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",

}))

// Advanced Logging
app.use(morgan("combined"));

// In case users are creative about json payload sizes
app.use(express.json(({limit: "100mb"})))

/////////////////////////////////////////////////////////////////
////////////////// Middleware Setup End /////////////////////////
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
////////////////// Router Setup Start ///////////////////////////
/////////////////////////////////////////////////////////////////

// Routes
const sentenceRouter = require('./src/routes/sentences')
const wordsRouter = require('./src/routes/words')
const adjectiveRouter = require('./src/routes/adjectives')
const adverbRouter = require('./src/routes/adverbs')
const conjunctionRouter = require('./src/routes/conjunctions')
const determinerRouter = require('./src/routes/determiners')
const exclamationRouter = require('./src/routes/exclamations')
const nounsRouter = require('./src/routes/nouns')
const prepositionRouter = require('./src/routes/prepositions')
const verbRouter = require('./src/routes/verbs')





app.use('/words', wordsRouter)
app.use('/sentences', sentenceRouter)
app.use('/adverbs', adverbRouter)
app.use('/conjunctions', conjunctionRouter)
app.use('/determiners', determinerRouter)
app.use('/ecxclamations', exclamationRouter)
app.use('/nouns', nounsRouter)
app.use('/prepositions', prepositionRouter)
app.use('/verbs', verbRouter)
app.use('/adjectives', adjectiveRouter)

/////////////////////////////////////////////////////////////////
////////////////// Router Setup END /////////////////////////////
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
////////////////// Server Start /////////////////////////////////
/////////////////////////////////////////////////////////////////

// Server INIT
app.listen(PORT, () => console.log('The server is running on port: ' + PORT))