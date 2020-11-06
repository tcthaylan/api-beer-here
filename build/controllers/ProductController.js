"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductController = void 0;

var _express = require("express");

var _get = require("../functions/product/get");

var _create = require("../functions/product/create");

var _update = require("../functions/product/update");

var _delete = require("../functions/product/delete");

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  (0, _get.getAllProducts)(req, res);
});
router.get('/:productId', (req, res) => {
  (0, _get.getProductById)(req, res);
});
router.post('/', (req, res) => {
  (0, _create.createProduct)(req, res);
});
router.put('/:productId', (req, res) => {
  (0, _update.updateProduct)(req, res);
});
router.delete('/:productId', (req, res) => {
  (0, _delete.deleteProduct)(req, res);
});
const ProductController = router;
exports.ProductController = ProductController;