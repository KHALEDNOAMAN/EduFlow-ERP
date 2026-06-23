<div align="center">

# ðŸ—ï¸ EduFlow ERP

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

## âœ¨ Features

- ðŸ“Š **Unified Dashboard** - Cross-module KPIs: revenue, headcount, expenses, fund utilization in one view
- ðŸ‘¥ **HR Module** - Employee count, department distribution, attendance rates, leave utilization
- ðŸ’° **Finance Module** - Income tracking, expense management, P&L summary, cash flow overview
- ðŸ¦ **Fund Management** - Budget allocation, fund utilization, pending approvals, variance analysis
- ðŸ“ˆ **Cross-Module Reports** - Revenue per employee, cost per department, budget vs actual analysis
- ðŸ” **Unified Authentication** - Single JWT auth across all modules with role-based access
- ðŸ”— **Module Integration** - Cross-references between HR, Finance, and Operations data
- ðŸ“± **Responsive Design** - Mobile-first dashboard optimized for all screen sizes

## ðŸ—ï¸ Architecture

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚              EduFlow ERP Dashboard                â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ HR Moduleâ”‚ Finance  â”‚ Funds    â”‚ Operations      â”‚
â”‚ (EMS)    â”‚ (Income+ â”‚ (Alloc)  â”‚ (Cross-module)  â”‚
â”‚          â”‚ Expense) â”‚          â”‚                  â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚           Unified Express.js API                  â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚              PostgreSQL Database                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

## ðŸ“ Project Structure

```
EduFlow-ERP/
â”œâ”€â”€ backend/
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ app.js                  # Express with all module routes
â”‚   â”‚   â”œâ”€â”€ config/                 # Database, constants
â”‚   â”‚   â”œâ”€â”€ controllers/
â”‚   â”‚   â”‚   â”œâ”€â”€ dashboardController.js  # Cross-module analytics
â”‚   â”‚   â”‚   â”œâ”€â”€ hrController.js         # HR module endpoints
â”‚   â”‚   â”‚   â”œâ”€â”€ financeController.js    # Finance module endpoints
â”‚   â”‚   â”‚   â”œâ”€â”€ fundController.js       # Fund management endpoints
â”‚   â”‚   â”‚   â””â”€â”€ integrationController.js # Cross-module queries
â”‚   â”‚   â”œâ”€â”€ middleware/             # Auth, error handling
â”‚   â”‚   â”œâ”€â”€ routes/                 # Module-based routing
â”‚   â”‚   â”œâ”€â”€ services/               # Business logic
â”‚   â”‚   â””â”€â”€ utils/                  # Helpers, formatters
â”‚   â”œâ”€â”€ migrations/                 # Unified schema
â”‚   â””â”€â”€ seeds/                      # Sample data
â”œâ”€â”€ frontend/
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”œâ”€â”€ ERPDashboard.jsx    # Main ERP dashboard
â”‚   â”‚   â”‚   â”œâ”€â”€ HROverview.jsx      # HR module view
â”‚   â”‚   â”‚   â”œâ”€â”€ FinanceOverview.jsx  # Finance module view
â”‚   â”‚   â”‚   â”œâ”€â”€ FundOverview.jsx     # Fund module view
â”‚   â”‚   â”‚   â”œâ”€â”€ ModuleNav.jsx        # Module navigation
â”‚   â”‚   â”‚   â””â”€â”€ ReportsPanel.jsx     # Cross-module reports
â”‚   â”‚   â””â”€â”€ services/api.js
â”‚   â””â”€â”€ package.json
â””â”€â”€ README.md
```

## ðŸ› ï¸ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js 20 | Runtime environment |
| Express.js 4 | Unified API gateway |
| PostgreSQL 15 | Relational database |
| React 18 | Frontend framework |
| Chart.js 4 | Data visualization |
| JWT | Cross-module authentication |
| Knex.js | Query builder + migrations |

## ðŸš€ Getting Started

```bash
git clone https://github.com/KHALEDNOAMAN/EduFlow-ERP.git
cd EduFlow-ERP/backend
npm install && cp .env.example .env
npx knex migrate:latest && npx knex seed:run
npm run dev
```

## ðŸ“¡ API Endpoints

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

## ðŸ“ License

MIT License - see [LICENSE](LICENSE) file.

---

<div align="center">
  Built with â¤ï¸ during internship at EduTech Yazilim A.S. - Istanbul, Turkey
</div>
