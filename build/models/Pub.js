"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../database/index");

const schemaOptions = {
  timestamps: true
};
const PubSchema = new _index.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: _index.Schema.Types.ObjectId,
    ref: 'User'
  },
  address: {
    type: _index.Schema.Types.ObjectId,
    ref: 'PubAddress'
  },
  products: [{
    type: _index.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  image: String
}, schemaOptions);
const Pub = (0, _index.model)('Pub', PubSchema);
var _default = Pub;
exports.default = _default;