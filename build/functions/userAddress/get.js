"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserAddressByUserId = exports.getUserAddressById = exports.getAllUserAdresses = void 0;

var _UserAddress = _interopRequireDefault(require("../../models/UserAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllUserAdresses = async (req, res) => {
  const userAddress = await _UserAddress.default.find();
  return res.send(userAddress);
};

exports.getAllUserAdresses = getAllUserAdresses;

const getUserAddressById = async (req, res) => {
  const {
    userAddressId
  } = req.params;
  const userAddress = await _UserAddress.default.findById(userAddressId, err => {
    if (err) {
      return res.status(400).send({
        error: 'User Address not found'
      });
    }
  });
  return res.send(userAddress);
};

exports.getUserAddressById = getUserAddressById;

const getUserAddressByUserId = async (req, res) => {};

exports.getUserAddressByUserId = getUserAddressByUserId;