const { Product } = require("../../../models/index");

module.exports = {
    addProduct: async (request) => {
        try {
            let product = await Product.create(request);

            product = JSON.parse(JSON.stringify(product));

            return product;
        } catch (error) {
            throw new Error(error.message)
        }
    },

    updateProduct: async (body, product_id) => {
        console.log("product_id", product_id)
        try {
            return await Product.update(body, {
                where: {
                    product_id
                }
            })
        } catch (error) {
            throw new Error(error.message)
        }
    },

    inactiveProduct: async (status, product_id) => {
        try {
            return await Product.update({ status }, {
                where: { product_id }
            })
        } catch (error) {
            throw new Error(error.message)
        }
    },

    deleteProduct: async (product_id) => {
        try {
            return await Product.destroy({
                where: product_id
            })
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getProductById: async (product_id) => {
        try {
            let product = await Product.findOne({
                where: product_id
            })

            product = JSON.parse(JSON.stringify(product));

            return product;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}