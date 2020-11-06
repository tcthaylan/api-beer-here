"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserAddress = void 0;

var _UserAddress = _interopRequireDefault(require("../../models/UserAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateUserAddress = async (req, res) => {
  const {
    userAddressId
  } = req.params;
  const userAddress = await _UserAddress.default.findByIdAndUpdate(userAddressId, req.body, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }
  });
  return res.send(userAddress);
};

exports.updateUserAddress = updateUserAddress;