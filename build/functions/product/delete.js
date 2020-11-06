"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProduct = void 0;

var _Product = _interopRequireDefault(require("../../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deleteProduct = async (req, res) => {
  const {
    productId
  } = req.params;
  await _Product.default.findByIdAndDelete(productId, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }

    return res.status(200).send();
  });
};

exports.deleteProduct = deleteProduct;