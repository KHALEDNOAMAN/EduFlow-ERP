const express = require('express'); const r = express.Router();
const c = require('../controllers/integrationController');
r.get('/revenue-per-employee', c.revenuePerEmployee);
r.get('/cost-by-department', c.costByDepartment);
r.get('/budget-vs-actual', c.budgetVsActual);
module.exports = r;
