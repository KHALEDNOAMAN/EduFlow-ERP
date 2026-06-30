<div align="center">

# 🏗️ EduFlow ERP

**Enterprise Resource Planning System for Educational Technology**

[![Node.js](https://img.shields.io/badge/Node.js-20_LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A unified ERP platform integrating HR, Finance, and Operations modules for an educational technology company. Features a centralized dashboard with cross-module analytics, unified authentication, and comprehensive reporting across all business functions.

</div>

---

## ✨ Features

- 📊 **Unified Dashboard** - Cross-module KPIs: revenue, headcount, expenses, fund utilization in one view
- 👥 **HR Module** - Employee count, department distribution, attendance rates, leave utilization
- 💰 **Finance Module** - Income tracking, expense management, P&L summary, cash flow overview
- 🏦 **Fund Management** - Budget allocation, fund utilization, pending approvals, variance analysis
- 📈 **Cross-Module Reports** - Revenue per employee, cost per department, budget vs actual analysis
- 🔐 **Unified Authentication** - Single JWT auth across all modules with role-based access
- 🔗 **Module Integration** - Cross-references between HR, Finance, and Operations data
- 📱 **Responsive Design** - Mobile-first dashboard optimized for all screen sizes

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────┐
│              EduFlow ERP Dashboard                │
├──────────┬──────────┬──────────┬─────────────────┤
│ HR Module│ Finance  │ Funds    │ Operations      │
│ (EMS)    │ (Income+ │ (Alloc)  │ (Cross-module)  │
│          │ Expense) │          │                  │
├──────────┴──────────┴──────────┴─────────────────┤
│           Unified Express.js API                  │
├──────────────────────────────────────────────────┤
│              PostgreSQL Database                  │
└──────────────────────────────────────────────────┘
```

## 📡 API Endpoints

### Dashboard (Cross-Module)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard/summary` | Unified KPIs across all modules |
| GET | `/api/dashboard/hr` | HR module summary |
| GET | `/api/dashboard/finance` | Finance module summary |
| GET | `/api/dashboard/funds` | Fund module summary |

### Integration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/integration/revenue-per-employee` | Revenue / headcount ratio |
| GET | `/api/integration/cost-by-department` | Total cost per department |
| GET | `/api/integration/budget-vs-actual` | Budget variance analysis |

## 🚀 Getting Started

```bash
git clone https://github.com/KHALEDNOAMAN/EduFlow-ERP.git
cd EduFlow-ERP/backend
npm install && cp .env.example .env
npx knex migrate:latest && npx knex seed:run
npm run dev
```

## 📝 License
MIT License - see [LICENSE](LICENSE) file.

---
<div align="center">Built with ❤️ during internship at EduTech Yazilim A.S. - Istanbul, Turkey</div>
