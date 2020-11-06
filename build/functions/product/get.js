"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductById = exports.getAllProducts = void 0;

var _Product = _interopRequireDefault(require("../../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllProducts = async (req, res) => {
  const procuct = await _Product.default.find();
  return res.send(procuct);
};

exports.getAllProducts = getAllProducts;

const getProductById = async (req, res) => {
  const {
    productId
  } = req.params;
  const product = await _Product.default.findById(productId, err => {
    if (err) {
      return res.status(400).send({
        error: 'Address not found'
      });
    }
  });
  return res.send(product);
};

exports.getProductById = getProductById;