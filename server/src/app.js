const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const{ Kpirouter, ProductRoute } = require("./routes")
// const {KPI, Product} = require("./models")

// config 
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"})),
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


app.use("/kpi", Kpirouter )
app.use("/product",  ProductRoute)




module.exports = {app};