import React from 'react';
const finance = [
  { title: 'Total Income', value: 'â‚º2,847,000', icon: 'ðŸ’°', color: '#22c55e' },
  { title: 'Total Expenses', value: 'â‚º1,450,000', icon: 'ðŸ’¸', color: '#ef4444' },
  { title: 'Net Income', value: 'â‚º1,397,000', icon: 'ðŸ“Š', color: '#3b82f6' },
  { title: 'Profit Margin', value: '49.1%', icon: 'ðŸ“ˆ', color: '#f59e0b' },
];
export default function FinanceOverview() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 24 }}>ðŸ’° Finance Module</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
        {finance.map(f => (
          <div key={f.title} style={{ background: '#1e293b', borderRadius: 16, padding: 20, border: '1px solid #334155' }}>
            <span style={{ fontSize: 24 }}>{f.icon}</span>
            <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 8 }}>{f.title}</p>
            <p style={{ color: 'white', fontSize: 28, fontWeight: 700, marginTop: 4 }}>{f.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
