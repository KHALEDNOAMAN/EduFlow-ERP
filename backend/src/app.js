const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dashboardRoutes = require('./routes/dashboardRoutes');
const hrRoutes = require('./routes/hrRoutes');
const financeRoutes = require('./routes/financeRoutes');
const fundRoutes = require('./routes/fundRoutes');
const integrationRoutes = require('./routes/integrationRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }));
app.use(express.json());
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

app.get('/api/health', (req, res) => res.json({ success: true, service: 'EduFlow ERP', modules: ['HR', 'Finance', 'Funds', 'Integration'] }));
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/funds', fundRoutes);
app.use('/api/integration', integrationRoutes);
app.use((req, res) => res.status(404).json({ success: false, error: { message: 'Route not found' } }));
app.use(errorHandler);
module.exports = app;
