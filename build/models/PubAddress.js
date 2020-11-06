"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../database/index");

const schemaOptions = {
  timestamps: true
};
const PubAddressSchema = new _index.Schema({
  street: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  pub: {
    type: _index.Schema.Types.ObjectId,
    ref: 'Pub'
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
}, schemaOptions);
const PubAddress = (0, _index.model)('PubAddress', PubAddressSchema);
var _default = PubAddress;
exports.default = _default;