"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = void 0;

var _Product = _interopRequireDefault(require("../../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createProduct = async (req, res) => {
  const product = new _Product.default(req.body);
  await product.save(err => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.send(product);
  });
};

exports.createProduct = createProduct;