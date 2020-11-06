"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteClient = void 0;

var _Client = _interopRequireDefault(require("../../models/Client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deleteClient = async (req, res) => {
  const {
    clientId
  } = req.params;
  await _Client.default.findByIdAndDelete(clientId, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }

    return res.status(200).send();
  });
};

exports.deleteClient = deleteClient;