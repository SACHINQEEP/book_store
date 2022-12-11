const _repos = require("../repositories/repository");

module.exports = {
    addUpdateProduct: async (request, user) => {
        try {
            let { status, product_id } = request;
            let { user_id, user_type } = user;
            let message = "";

            if (user_type == 1) throw new Error("Invalid Request");

            request['user_id'] = user_id;

            if (status == 1) {
                await _repos.addProduct(request);

                message = "Product Succesfully Added";
            }

            if (status == 2) {
                await _repos.updateProduct(request, product_id);

                message = "Product Updated Successfully";
            }

            if (status == 3) {
                await _repos.inactiveProduct(status, product_id);

                message = "Product Inactivated Successfully";
            }

            if (status == 4) {
                await _repos.deleteProduct({ product_id });

                message = "Product deleted Successfully";
            }

            return message;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}