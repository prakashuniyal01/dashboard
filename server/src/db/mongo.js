const mongoose = require("mongoose")

const monogdb_connection = async () => {
    const URI = process.env.MONGO_URL;
    mongoose.connect(URI).then(() => {
        console.log(`DB connected successfully.`)
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })
}

module.exports =  {monogdb_connection }