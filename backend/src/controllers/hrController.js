const { query } = require('../config/database');
class HRController {
  static async overview(req, res, next) {
    try {
      const [headcount, byDept, recentHires] = await Promise.all([
        query(`SELECT employment_status, employment_type, COUNT(*) AS count FROM employees WHERE deleted_at IS NULL GROUP BY employment_status, employment_type`),
        query(`SELECT d.name, COUNT(e.id) AS count FROM departments d LEFT JOIN employees e ON d.id = e.department_id AND e.deleted_at IS NULL WHERE d.is_active = true GROUP BY d.name ORDER BY count DESC`),
        query(`SELECT first_name, last_name, employee_number, hire_date FROM employees WHERE deleted_at IS NULL ORDER BY hire_date DESC LIMIT 5`),
      ]);
      res.json({ success: true, data: { headcount: headcount.rows, byDepartment: byDept.rows, recentHires: recentHires.rows } });
    } catch (err) { next(err); }
  }
}
module.exports = HRController;
