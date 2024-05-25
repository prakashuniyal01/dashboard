const {Router} = require('express');
const {KPI} = require("../models")


const router = Router();

router.get("/kpis", async(req, res) =>{
    try {
        const kpis = await KPI.find();
        res.status(200).json(kpis);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
} )



module.exports = router;