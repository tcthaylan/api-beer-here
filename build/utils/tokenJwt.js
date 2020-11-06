"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateToken = (params = {}) => {
  return _jsonwebtoken.default.sign(params, process.env.SECRET, {
    expiresIn: 86400
  });
};

exports.generateToken = generateToken;