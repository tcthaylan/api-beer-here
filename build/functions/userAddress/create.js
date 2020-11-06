"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserAddress = void 0;

var _UserAddress = _interopRequireDefault(require("../../models/UserAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createUserAddress = async (req, res) => {
  const userAddress = new _UserAddress.default(req.body);
  await userAddress.save(err => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.send(userAddress);
  });
};

exports.createUserAddress = createUserAddress;