const productModel = require('../models/productmodel');
const ProductModel = require('../models/productmodel');

// Get Products API - /api/v1/products
exports.getproducts = async (req,res,next) => {
   const query= req.query.keyword?{ name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}   

    const products = await ProductModel.find(query);

    res.json({
        success:true,
        products
    })
}

// Get Single Products API - /api/v1/product/:id
exports.getsingleproduct = async (req,res,next) => {
    try {
        const product= await productModel.findById(req.params.id)
        res.json({
            success:true,
            message:'Get single product working',
            product
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
    
}