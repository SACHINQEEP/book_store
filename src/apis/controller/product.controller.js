const { _response } = require("../../utils/util");
const _service = require("../service/services");


module.exports = {
    addUpdateProduct: async (req, res) => {
        try {
            let message = await _service.addUpdateProduct(req.body, req.user);

            return _response(res, 200, message);
        } catch (error) {
            return _response(res, 400, error.message)
        }
    }
}