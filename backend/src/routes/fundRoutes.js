const express = require('express'); const r = express.Router();
const c = require('../controllers/fundController');
r.get('/overview', c.overview);
module.exports = r;
