import React from 'react';
const stats = [
  { label: 'Total', value: '20', color: '#3b82f6' }, { label: 'Active', value: '17', color: '#22c55e' },
  { label: 'On Leave', value: '2', color: '#f59e0b' }, { label: 'Intern', value: '2', color: '#8b5cf6' },
];
const depts = [
  { name: 'Technology', count: 12, budget: 'â‚º2,500K' }, { name: 'Content', count: 3, budget: 'â‚º600K' },
  { name: 'Marketing', count: 2, budget: 'â‚º800K' }, { name: 'HR', count: 2, budget: 'â‚º400K' },
  { name: 'Finance', count: 2, budget: 'â‚º350K' }, { name: 'Operations', count: 1, budget: 'â‚º300K' },
];
export default function HROverview() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 24 }}>ðŸ‘¥ HR Module</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: '#1e293b', borderRadius: 12, padding: 16, borderLeft: `4px solid ${s.color}` }}>
            <p style={{ color: '#94a3b8', fontSize: 13 }}>{s.label}</p>
            <p style={{ color: 'white', fontSize: 28, fontWeight: 700 }}>{s.value}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#1e293b', borderRadius: 16, padding: 20, border: '1px solid #334155' }}>
        <h2 style={{ color: 'white', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Department Distribution</h2>
        {depts.map(d => (
          <div key={d.name} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #334155' }}>
            <span style={{ color: 'white', fontWeight: 600, flex: 1 }}>{d.name}</span>
            <span style={{ color: '#94a3b8', marginRight: 16 }}>{d.count} employees</span>
            <span style={{ color: '#64748b', fontSize: 13 }}>{d.budget}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
