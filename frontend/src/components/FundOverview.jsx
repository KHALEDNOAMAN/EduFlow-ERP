import React from 'react';
const funds = [
  { code: 'OP-2026', name: 'Operating Fund', type: 'Operating', budget: 5000000, allocated: 3200000, available: 1800000 },
  { code: 'CAP-2026', name: 'Capital Expenditure', type: 'Capital', budget: 2000000, allocated: 850000, available: 1150000 },
  { code: 'PRJ-PLAT', name: 'Platform Development', type: 'Project', budget: 1500000, allocated: 1100000, available: 400000 },
  { code: 'PRJ-AI', name: 'AI/ML Research', type: 'Project', budget: 1200000, allocated: 300000, available: 900000 },
  { code: 'RSV-2026', name: 'Reserve Fund', type: 'Reserve', budget: 800000, allocated: 0, available: 800000 },
  { code: 'EMR-2026', name: 'Emergency Fund', type: 'Emergency', budget: 500000, allocated: 50000, available: 450000 },
];
export default function FundOverview() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 24 }}>ðŸ¦ Fund Management</h1>
      <div style={{ background: '#1e293b', borderRadius: 16, overflow: 'hidden', border: '1px solid #334155' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ background: '#0f172a' }}>
            {['Code', 'Fund Name', 'Type', 'Budget', 'Allocated', 'Available', 'Utilization'].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: 12, fontSize: 12, color: '#64748b', fontWeight: 600 }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>{funds.map(f => {
            const pct = ((f.allocated / f.budget) * 100).toFixed(1);
            const pctColor = pct > 75 ? '#ef4444' : pct > 50 ? '#f59e0b' : '#22c55e';
            return (
              <tr key={f.code} style={{ borderTop: '1px solid #334155' }}>
                <td style={{ padding: 12, color: '#94a3b8', fontFamily: 'monospace', fontSize: 13 }}>{f.code}</td>
                <td style={{ padding: 12, color: 'white', fontWeight: 600 }}>{f.name}</td>
                <td style={{ padding: 12 }}><span style={{ background: '#334155', color: '#94a3b8', padding: '2px 8px', borderRadius: 8, fontSize: 12 }}>{f.type}</span></td>
                <td style={{ padding: 12, color: 'white' }}>â‚º{(f.budget/1000000).toFixed(1)}M</td>
                <td style={{ padding: 12, color: '#f59e0b' }}>â‚º{(f.allocated/1000000).toFixed(1)}M</td>
                <td style={{ padding: 12, color: '#22c55e' }}>â‚º{(f.available/1000000).toFixed(1)}M</td>
                <td style={{ padding: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 60, height: 6, background: '#334155', borderRadius: 3 }}><div style={{ height: 6, borderRadius: 3, background: pctColor, width: `${pct}%` }} /></div>
                    <span style={{ color: pctColor, fontSize: 12 }}>{pct}%</span>
                  </div>
                </td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}
