# AI Customer Management Portal

## Overview
AI Customer Management Portal is a hackathon project for a fictional networking hardware company. The system combines customer records, renewal tracking, account health signals, churn risk indicators, and AI-assisted insight workflows in one lightweight web app.

## Current Scope
- Frontend dashboard with sidebar navigation and premium SaaS-style UI
- Customer table with search, filters, badges, and detail view
- AI insights page with risk queue and recommended actions
- Renewals page for expiring accounts and reminder flow
- Reports page with revenue, region, plan mix, and risk summaries
- Backend customer API with synthetic data generation

## Tech Stack
- Frontend: React
- Backend: Flask (Python)
- Database: SQLite
- Synthetic Data: Faker + custom generator logic
- AI/ML direction: NL query flow, account health scoring, churn insights

## Data
- 200+ synthetic customer records
- Customer profile, region, plan tier, NPS, usage trends
- Renewal timing, device inventory, support ticket context
- Mock AI summaries for frontend demo flow

## Project Structure
- `backend/` Flask application, routes, database, and data generation
- `frontend/` React application for dashboard, customers, AI insights, renewals, and reports
- `README.md` project overview and setup notes

## Run The Backend
```bash
cd backend
python app.py
```

## Run The Frontend
```bash
cd frontend
npm install
npm start
```

## Frontend Demo Highlights
- Dashboard KPIs for customers, revenue, renewals, and activity
- Priority customer cards for fast risk review
- AI insights engine layout with follow-up recommendations
- Reports command center with revenue and churn-focused visuals

## Next Steps
- Connect frontend pages to expanded backend endpoints
- Add real churn scoring and account health APIs
- Improve README with screenshots and deployment link
- Add final demo video and architecture notes before submission
