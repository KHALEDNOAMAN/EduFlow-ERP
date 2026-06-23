const { query } = require('../config/database');
class DashboardController {
  static async summary(req, res, next) {
    try {
      const [hr, finance, funds, modules] = await Promise.all([
        query(`SELECT COUNT(*) AS total_employees, COUNT(*) FILTER (WHERE employment_status = 'active') AS active_employees FROM employees WHERE deleted_at IS NULL`),
        query(`SELECT COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END), 0) AS total_income, COALESCE(SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END), 0) AS total_expenses FROM erp_transactions WHERE fiscal_year = 2026 AND status = 'posted'`),
        query(`SELECT COUNT(*) AS total_funds, COALESCE(SUM(total_budget), 0) AS total_budget, COALESCE(SUM(allocated_amount), 0) AS allocated, COALESCE(SUM(available_balance), 0) AS available FROM erp_funds WHERE is_active = true`),
        query(`SELECT module, COUNT(*) AS pending FROM erp_approvals WHERE status = 'pending' GROUP BY module`),
      ]);
      res.json({
        success: true, data: {
          hr: { totalEmployees: parseInt(hr.rows[0]?.total_employees || 0), activeEmployees: parseInt(hr.rows[0]?.active_employees || 0) },
          finance: { totalIncome: parseFloat(finance.rows[0]?.total_income || 0), totalExpenses: parseFloat(finance.rows[0]?.total_expenses || 0), netIncome: parseFloat(finance.rows[0]?.total_income || 0) - parseFloat(finance.rows[0]?.total_expenses || 0) },
          funds: { totalFunds: parseInt(funds.rows[0]?.total_funds || 0), totalBudget: parseFloat(funds.rows[0]?.total_budget || 0), allocated: parseFloat(funds.rows[0]?.allocated || 0), available: parseFloat(funds.rows[0]?.available || 0) },
          pendingApprovals: modules.rows,
        },
      });
    } catch (err) { next(err); }
  }
}
module.exports = DashboardController;
