exports.seed = async function(knex) {
  await knex('erp_approvals').del();
  await knex('erp_funds').del();
  await knex('erp_transactions').del();

  await knex('erp_funds').insert([
    { fund_code: 'OP-2026', fund_name: 'Operating Fund 2026', fund_type: 'operating', total_budget: 5000000, allocated_amount: 3200000, available_balance: 1800000, fiscal_year: 2026 },
    { fund_code: 'CAP-2026', fund_name: 'Capital Expenditure Fund', fund_type: 'capital', total_budget: 2000000, allocated_amount: 850000, available_balance: 1150000, fiscal_year: 2026 },
    { fund_code: 'PRJ-PLAT', fund_name: 'Platform Development Project', fund_type: 'project', total_budget: 1500000, allocated_amount: 1100000, available_balance: 400000, fiscal_year: 2026 },
    { fund_code: 'RSV-2026', fund_name: 'Reserve Fund', fund_type: 'reserve', total_budget: 800000, allocated_amount: 0, available_balance: 800000, fiscal_year: 2026 },
    { fund_code: 'EMR-2026', fund_name: 'Emergency Fund', fund_type: 'emergency', total_budget: 500000, allocated_amount: 50000, available_balance: 450000, fiscal_year: 2026 },
    { fund_code: 'PRJ-AI', fund_name: 'AI/ML Research Project', fund_type: 'project', total_budget: 1200000, allocated_amount: 300000, available_balance: 900000, fiscal_year: 2026 },
  ]);

  const incomeRecords = [];
  const categories = ['Tuition', 'Course Sales', 'Subscriptions', 'Corporate Training', 'Workshops'];
  for (let m = 1; m <= 6; m++) {
    categories.forEach((cat, i) => {
      incomeRecords.push({
        transaction_number: `INC-2026-${String(incomeRecords.length + 1).padStart(4, '0')}`,
        type: 'income', module: 'finance',
        transaction_date: `2026-${String(m).padStart(2, '0')}-${String(10 + i).padStart(2, '0')}`,
        fiscal_year: 2026, amount: 20000 + Math.floor(Math.random() * 80000),
        description: `${cat} revenue - Month ${m}`, status: 'posted', created_by: 1,
      });
    });
  }
  await knex('erp_transactions').insert(incomeRecords);

  await knex('erp_approvals').insert([
    { module: 'finance', reference_type: 'expense', reference_id: 1, status: 'pending', requested_by: 2, notes: 'Q3 marketing campaign budget' },
    { module: 'funds', reference_type: 'allocation', reference_id: 1, status: 'pending', requested_by: 3, notes: 'Server infrastructure upgrade' },
    { module: 'hr', reference_type: 'leave_request', reference_id: 1, status: 'pending', requested_by: 5, notes: 'Annual leave - 2 weeks' },
  ]);
};
