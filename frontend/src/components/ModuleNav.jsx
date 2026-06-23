import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const links = [
  { to: '/erp/dashboard', label: 'ðŸ“Š Dashboard', color: '#3b82f6' },
  { to: '/erp/hr', label: 'ðŸ‘¥ HR', color: '#22c55e' },
  { to: '/erp/finance', label: 'ðŸ’° Finance', color: '#f59e0b' },
  { to: '/erp/funds', label: 'ðŸ¦ Funds', color: '#8b5cf6' },
];
export default function ModuleNav() {
  const { pathname } = useLocation();
  return (
    <nav style={{ background: '#1e293b', borderBottom: '1px solid #334155', padding: '0 24px', display: 'flex', alignItems: 'center', height: 56 }}>
      <span style={{ color: 'white', fontWeight: 800, fontSize: 18, marginRight: 32, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>EduFlow ERP</span>
      <div style={{ display: 'flex', gap: 4 }}>
        {links.map(l => (
          <Link key={l.to} to={l.to} style={{ padding: '8px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 600, color: pathname === l.to ? 'white' : '#94a3b8', background: pathname === l.to ? l.color + '20' : 'transparent', borderBottom: pathname === l.to ? `2px solid ${l.color}` : 'none' }}>{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}
