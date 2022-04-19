const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');
const ensureLogin = require('../../config/ensureLogin.js');

router.post('/', usersController.create);

router.post('/login', usersController.login); // POST /api/users/login


router.get('/check-token', ensureLogin, usersController.checkToken); // GET /api/users/check-token


module.exports = router;
