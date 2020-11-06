"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PubAddressController = void 0;

var _express = require("express");

var _get = require("../functions/pubAddress/get");

var _create = require("../functions/pubAddress/create");

var _update = require("../functions/pubAddress/update");

var _delete = require("../functions/pubAddress/delete");

const router = (0, _express.Router)();
router.get('/:pubAddressId', (req, res) => {
  (0, _get.getPubAddressById)(req, res);
});
router.get('/', (req, res) => {
  (0, _get.getAllPubAdresses)(req, res);
});
router.post('/', (req, res) => {
  (0, _create.createPubAddress)(req, res);
});
router.put('/:pubAddressId', (req, res) => {
  (0, _update.updatePubAddress)(req, res);
});
router.delete('/:pubAddressId', (req, res) => {
  (0, _delete.deletePubAddress)(req, res);
});
const PubAddressController = router;
exports.PubAddressController = PubAddressController;