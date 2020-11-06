"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _express = require("express");

var _get = require("../functions/user/get");

var _create = require("../functions/user/create");

var _update = require("../functions/user/update");

var _delete = require("../functions/user/delete");

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  (0, _get.getAllUsers)(req, res);
});
router.get('/:userId', (req, res) => {
  (0, _get.getUserById)(req, res);
});
router.post('/', (req, res) => {
  (0, _create.createUser)(req, res);
});
router.put('/:userId', (req, res) => {
  (0, _update.updateUser)(req, res);
});
router.delete('/:userId', (req, res) => {
  (0, _delete.deleteUser)(req, res);
});
const UserController = router;
exports.UserController = UserController;