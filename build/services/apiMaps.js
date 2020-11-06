"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiMaps = _axios.default.create({
  baseURL: 'https://maps.googleapis.com/maps/api'
});

var _default = apiMaps;
exports.default = _default;