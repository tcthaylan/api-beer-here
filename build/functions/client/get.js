"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = exports.getAllClients = void 0;

var _Client = _interopRequireDefault(require("../../models/Client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllClients = async (req, res) => {
  const clients = await _Client.default.find();
  return res.send(clients);
};

exports.getAllClients = getAllClients;

const getClient = async (req, res) => {
  const {
    clientId
  } = req.params;
  const client = await _Client.default.findById(clientId, err => {
    if (err) {
      return res.status(400).send({
        error: 'Client não encontrado'
      });
    }
  });
  return res.send(client);
};

exports.getClient = getClient;