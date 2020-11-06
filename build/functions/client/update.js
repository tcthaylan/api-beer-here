"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClient = void 0;

var _Client = _interopRequireDefault(require("../../models/Client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateClient = async (req, res) => {
  const {
    clientId
  } = req.params;
  const {
    name
  } = req.body;
  const client = await _Client.default.findByIdAndUpdate(clientId, {
    name
  }, {
    new: true
  }, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }
  });
  return res.send(client);
};

exports.updateClient = updateClient;