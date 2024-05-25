const {Router} = require('express');
const { Product} = require("../models")


const router = Router();

router.get("/products", async(req, res) =>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
} )



module.exports = router;