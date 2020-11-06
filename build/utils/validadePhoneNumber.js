"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// (0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b
const validadePhoneNumber = phoneNumber => {
  const reg = /(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b/g;
  if (reg.test(phoneNumber) === true) return true;
  return false;
};

var _default = validadePhoneNumber;
exports.default = _default;