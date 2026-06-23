import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ERPDashboard from './components/ERPDashboard';
import HROverview from './components/HROverview';
import FinanceOverview from './components/FinanceOverview';
import FundOverview from './components/FundOverview';
import ModuleNav from './components/ModuleNav';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a' }}>
        <ModuleNav />
        <Routes>
          <Route path="/" element={<Navigate to="/erp/dashboard" />} />
          <Route path="/erp/dashboard" element={<ERPDashboard />} />
          <Route path="/erp/hr" element={<HROverview />} />
          <Route path="/erp/finance" element={<FinanceOverview />} />
          <Route path="/erp/funds" element={<FundOverview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
