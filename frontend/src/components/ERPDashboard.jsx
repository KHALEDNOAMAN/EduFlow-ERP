import React from 'react';
const kpis = [
  { title: 'Total Revenue', value: 'â‚º2,847,000', change: '+12%', icon: 'ðŸ’°', color: '#22c55e', module: 'Finance' },
  { title: 'Active Employees', value: '20', change: '+3', icon: 'ðŸ‘¥', color: '#3b82f6', module: 'HR' },
  { title: 'Total Expenses', value: 'â‚º1,450,000', change: '-5%', icon: 'ðŸ’¸', color: '#ef4444', module: 'Finance' },
  { title: 'Fund Utilization', value: '52.7%', change: '+8%', icon: 'ðŸ¦', color: '#8b5cf6', module: 'Funds' },
  { title: 'Net Income', value: 'â‚º1,397,000', change: '+18%', icon: 'ðŸ“ˆ', color: '#f59e0b', module: 'P&L' },
  { title: 'Pending Approvals', value: '3', change: '2 urgent', icon: 'â³', color: '#f97316', module: 'Workflow' },
];
const modules = [
  { name: 'HR Module', status: 'Active', metric: '20 employees', health: 98 },
  { name: 'Finance Module', status: 'Active', metric: 'â‚º2.8M revenue', health: 100 },
  { name: 'Fund Management', status: 'Active', metric: '6 active funds', health: 95 },
  { name: 'Operations', status: 'Active', metric: '3 pending approvals', health: 92 },
];
export default function ERPDashboard() {
  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 4 }}>ðŸ—ï¸ ERP Command Center</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>Unified view across all business modules</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 32 }}>
        {kpis.map(k => (
          <div key={k.title} style={{ background: '#1e293b', borderRadius: 16, padding: 20, border: '1px solid #334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{k.icon}</span>
              <span style={{ color: k.color, fontSize: 12, fontWeight: 600 }}>{k.change}</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: 12 }}>{k.title}</p>
            <p style={{ color: 'white', fontSize: 24, fontWeight: 700, marginTop: 4 }}>{k.value}</p>
            <p style={{ color: '#475569', fontSize: 11, marginTop: 4 }}>{k.module}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#1e293b', borderRadius: 16, padding: 20, border: '1px solid #334155' }}>
        <h2 style={{ color: 'white', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>âš¡ Module Status</h2>
        {modules.map(m => (
          <div key={m.name} style={{ display: 'flex', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #334155' }}>
            <div style={{ flex: 1 }}><p style={{ color: 'white', fontWeight: 600 }}>{m.name}</p><p style={{ color: '#64748b', fontSize: 13 }}>{m.metric}</p></div>
            <div style={{ width: 120, marginRight: 16 }}>
              <div style={{ height: 6, background: '#334155', borderRadius: 3 }}><div style={{ height: 6, borderRadius: 3, background: m.health > 95 ? '#22c55e' : '#f59e0b', width: `${m.health}%` }} /></div>
            </div>
            <span style={{ color: '#22c55e', fontSize: 13 }}>{m.health}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
