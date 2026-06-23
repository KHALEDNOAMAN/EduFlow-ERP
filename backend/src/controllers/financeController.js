const { query } = require('../config/database');
class FinanceController {
  static async overview(req, res, next) {
    try {
      const [income, expenses, monthly] = await Promise.all([
        query(`SELECT COALESCE(SUM(amount), 0) AS total FROM erp_transactions WHERE type = 'income' AND status = 'posted' AND fiscal_year = 2026`),
        query(`SELECT COALESCE(SUM(amount), 0) AS total FROM erp_transactions WHERE type = 'expense' AND status = 'posted' AND fiscal_year = 2026`),
        query(`SELECT to_char(transaction_date, 'YYYY-MM') AS month, type, SUM(amount) AS total FROM erp_transactions WHERE status = 'posted' AND transaction_date >= CURRENT_DATE - INTERVAL '6 months' GROUP BY month, type ORDER BY month`),
      ]);
      res.json({
        success: true, data: {
          totalIncome: parseFloat(income.rows[0].total),
          totalExpenses: parseFloat(expenses.rows[0].total),
          netIncome: parseFloat(income.rows[0].total) - parseFloat(expenses.rows[0].total),
          monthlyBreakdown: monthly.rows,
        },
      });
    } catch (err) { next(err); }
  }
}
module.exports = FinanceController;
