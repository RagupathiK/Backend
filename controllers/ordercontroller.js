const ordermodel = require('../models/ordermodel')
const productmodel = require('../models/productmodel')

// Create order - /api/v1/order
exports.createorder = async (req,res,next) => {
    const cartitems = req.body;
    const amount = Number(cartitems.reduce((acc, item) =>(acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
   const order = await ordermodel.create(cartitems,amount,status)

   // updating product stock
        cartitems.forEach(async (item) => {
            const product = await productmodel.findById(item.product._id);
            product.stock = product.stock - item.qty;
            await product.save();
        });


    res.json(
        {
            success:true,
            order
        }
    )
}