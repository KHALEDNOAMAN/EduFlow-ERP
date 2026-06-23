const { query } = require('../config/database');
class FundController {
  static async overview(req, res, next) {
    try {
      const result = await query(
        `SELECT f.*, (f.allocated_amount / NULLIF(f.total_budget, 0) * 100) AS utilization_pct
         FROM erp_funds f WHERE f.is_active = true ORDER BY f.total_budget DESC`
      );
      const totals = await query(`SELECT SUM(total_budget) AS budget, SUM(allocated_amount) AS allocated, SUM(available_balance) AS available FROM erp_funds WHERE is_active = true`);
      res.json({ success: true, data: { funds: result.rows, totals: totals.rows[0] } });
    } catch (err) { next(err); }
  }
}
module.exports = FundController;
