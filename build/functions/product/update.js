"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = void 0;

var _Product = _interopRequireDefault(require("../../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateProduct = async (req, res) => {
  const {
    productId
  } = req.params;
  const product = await _Product.default.findByIdAndUpdate(productId, req.body, {
    new: true
  }, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }
  });
  return res.send(product);
};

exports.updateProduct = updateProduct;