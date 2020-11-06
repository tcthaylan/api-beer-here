"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAddressController = void 0;

var _express = require("express");

var _get = require("../functions/userAddress/get");

var _create = require("../functions/userAddress/create");

var _update = require("../functions/userAddress/update");

var _delete = require("../functions/userAddress/delete");

const router = (0, _express.Router)();
router.get('/:userAddressId', (req, res) => {
  (0, _get.getUserAddressById)(req, res);
});
router.get('/', (req, res) => {
  (0, _get.getAllUserAdresses)(req, res);
});
router.post('/', (req, res) => {
  (0, _create.createUserAddress)(req, res);
});
router.put('/:userAddressId', (req, res) => {
  (0, _update.updateUserAddress)(req, res);
});
router.delete('/:userAddressId', (req, res) => {
  (0, _delete.deleteUserAddress)(req, res);
});
const UserAddressController = router;
exports.UserAddressController = UserAddressController;