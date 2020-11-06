"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserAddress = void 0;

var _UserAddress = _interopRequireDefault(require("../../models/UserAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deleteUserAddress = async (req, res) => {
  const {
    userAddressId
  } = req.params;
  await _UserAddress.default.findByIdAndDelete(userAddressId, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }

    return res.status(200).send();
  });
};

exports.deleteUserAddress = deleteUserAddress;