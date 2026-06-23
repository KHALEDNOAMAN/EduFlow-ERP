const express = require('express'); const r = express.Router();
const c = require('../controllers/financeController');
r.get('/overview', c.overview);
module.exports = r;
