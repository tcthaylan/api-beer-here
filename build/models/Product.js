"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../database/index");

const schemaOptions = {
  timestamps: true
};
const ProductSchema = new _index.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  user: {
    type: _index.Schema.Types.ObjectId,
    ref: 'Product'
  },
  pubs: [{
    type: _index.Schema.Types.ObjectId,
    ref: 'Pub'
  }],
  categories: [{
    type: _index.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  image: String
}, schemaOptions);
const Product = (0, _index.model)('Product', ProductSchema);
var _default = Product;
exports.default = _default;