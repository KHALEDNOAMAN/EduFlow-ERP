const { query } = require('../config/database');
class IntegrationController {
  static async revenuePerEmployee(req, res, next) {
    try {
      const [income, headcount] = await Promise.all([
        query(`SELECT COALESCE(SUM(amount), 0) AS total FROM erp_transactions WHERE type = 'income' AND status = 'posted' AND fiscal_year = 2026`),
        query(`SELECT COUNT(*) AS total FROM employees WHERE deleted_at IS NULL AND employment_status = 'active'`),
      ]);
      const rev = parseFloat(income.rows[0].total);
      const emp = parseInt(headcount.rows[0].total) || 1;
      res.json({ success: true, data: { totalRevenue: rev, totalEmployees: emp, revenuePerEmployee: (rev / emp).toFixed(2) } });
    } catch (err) { next(err); }
  }
  static async costByDepartment(req, res, next) {
    try {
      const result = await query(
        `SELECT d.name AS department, COUNT(e.id) AS employees, COALESCE(SUM(e.salary), 0) AS total_salary, d.budget AS dept_budget
         FROM departments d LEFT JOIN employees e ON d.id = e.department_id AND e.deleted_at IS NULL
         WHERE d.is_active = true GROUP BY d.id ORDER BY total_salary DESC`
      );
      res.json({ success: true, data: result.rows });
    } catch (err) { next(err); }
  }
  static async budgetVsActual(req, res, next) {
    try {
      const result = await query(
        `SELECT f.fund_name, f.total_budget AS budgeted, f.allocated_amount AS actual,
          (f.total_budget - f.allocated_amount) AS variance,
          ROUND((f.allocated_amount / NULLIF(f.total_budget, 0)) * 100, 1) AS utilization_pct
         FROM erp_funds f WHERE f.is_active = true ORDER BY f.total_budget DESC`
      );
      res.json({ success: true, data: result.rows });
    } catch (err) { next(err); }
  }
}
module.exports = IntegrationController;
