"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientController = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var _get = require("../functions/client/get");

var _create = require("../functions/client/create");

var _update = require("../functions/client/update");

var _delete = require("../functions/client/delete");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  (0, _get.getAllClients)(req, res);
});
router.get('/:clientId', (req, res) => {
  (0, _get.getClient)(req, res);
});
router.post('/', (req, res) => {
  (0, _create.createClient)(req, res);
});
router.put('/:clientId', (req, res) => {
  (0, _update.updateClient)(req, res);
});
router.delete('/:clientId', (req, res) => {
  (0, _delete.deleteClient)(req, res);
});
const ClientController = router;
exports.ClientController = ClientController;