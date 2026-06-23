exports.up = function(knex) {
  return knex.schema
    .createTable('erp_transactions', (t) => {
      t.increments('id').primary(); t.string('transaction_number', 50).unique().notNullable();
      t.string('type', 20).notNullable().checkIn(['income', 'expense']);
      t.string('module', 20).notNullable(); t.date('transaction_date').notNullable();
      t.integer('fiscal_year').notNullable(); t.decimal('amount', 15, 2).notNullable();
      t.string('currency', 3).defaultTo('TRY'); t.text('description');
      t.integer('department_id'); t.integer('category_id'); t.string('reference_number', 100);
      t.string('status', 20).defaultTo('posted').checkIn(['draft', 'posted', 'reversed']);
      t.integer('created_by').notNullable(); t.timestamps(true, true);
    })
    .createTable('erp_funds', (t) => {
      t.increments('id').primary(); t.string('fund_code', 20).unique().notNullable();
      t.string('fund_name', 200).notNullable();
      t.string('fund_type', 20).notNullable().checkIn(['operating', 'capital', 'project', 'reserve', 'emergency']);
      t.decimal('total_budget', 15, 2).notNullable(); t.decimal('allocated_amount', 15, 2).defaultTo(0);
      t.decimal('available_balance', 15, 2); t.integer('fiscal_year').notNullable();
      t.integer('department_id'); t.text('description'); t.boolean('is_active').defaultTo(true);
      t.timestamps(true, true);
    })
    .createTable('erp_approvals', (t) => {
      t.increments('id').primary(); t.string('module', 20).notNullable();
      t.string('reference_type', 50).notNullable(); t.integer('reference_id').notNullable();
      t.string('status', 20).defaultTo('pending').checkIn(['pending', 'approved', 'rejected']);
      t.integer('requested_by').notNullable(); t.integer('approved_by');
      t.text('notes'); t.timestamps(true, true);
    });
};
exports.down = function(knex) {
  return knex.schema.dropTable('erp_approvals').dropTable('erp_funds').dropTable('erp_transactions');
};
