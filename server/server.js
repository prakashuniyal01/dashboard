// require('dotenv').config({path: "./env"})
require("dotenv").config();
const { app } = require("./src/app")
const { monogdb_connection } = require("./src/db/mongo")

const PORT = process.env.PORT || 8000;

// dotenv.config({
//     path: "./env"
// })

monogdb_connection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`app sahi se connect ho gya h http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`"mongo fat gaya h sahi kro !! " ${error}`)
    })