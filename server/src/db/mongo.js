const mongoose = require("mongoose")
// const {kpis,products, transactions } = require("../data/data")
// const {KPI, Product, Transaction} = require("../models/index")

const monogdb_connection = async () => {
    const URI = process.env.MONGO_URL;
    mongoose.connect(URI).then(() => {
        console.log(`DB connected successfully.`)
        // add data in one time 
        // KPI.insertMany(kpis);
        // Product.insertMany(products);
        // Transaction.insertMany(transactions);

    }).catch(err => {
        console.log(err);
        process.exit(1);
    })
}

module.exports =  {monogdb_connection }