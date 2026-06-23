import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3005/api' });
export const dashboardApi = { summary: () => api.get('/dashboard/summary') };
export const hrApi = { overview: () => api.get('/hr/overview') };
export const financeApi = { overview: () => api.get('/finance/overview') };
export const fundApi = { overview: () => api.get('/funds/overview') };
export const integrationApi = { revenuePerEmployee: () => api.get('/integration/revenue-per-employee'), costByDept: () => api.get('/integration/cost-by-department'), budgetVsActual: () => api.get('/integration/budget-vs-actual') };
export default api;
