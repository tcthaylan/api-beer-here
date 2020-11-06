"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const validateEmail = email => {
  const reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9]+([\.][a-zA-Z0-9]+){1,5}$/;
  if (reg.test(email) === true) return true;
  return false;
};

var _default = validateEmail;
exports.default = _default;