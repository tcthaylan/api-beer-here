"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserById = exports.getAllUsers = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllUsers = async (req, res) => {
  const users = await _User.default.find();
  return res.send(users);
};

exports.getAllUsers = getAllUsers;

const getUserById = async (req, res) => {
  const {
    userId
  } = req.params;
  const user = await _User.default.findById(userId, err => {
    if (err) {
      return res.status(400).send({
        error: 'User not found'
      });
    }
  }).populate('address');
  return res.send(user);
};

exports.getUserById = getUserById;