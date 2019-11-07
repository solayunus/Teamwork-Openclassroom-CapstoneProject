const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');




router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUserById);
router.post('/', userCtrl.createUser);

module.exports = router;