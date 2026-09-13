# School Management Website

A modern, responsive full-stack School Management Website built with React, FastAPI, and PostgreSQL.

## Features
- Fully responsive modern UI
- React Router for seamless navigation
- Interactive pages (Home, About, Academics, Admissions, Facilities, Gallery, Events, Contact)
- Working Contact form with REST API integration
- PostgreSQL database to store contact messages
- Tailwind CSS for styling

## Tech Stack
**Frontend:** React, Vite, Tailwind CSS, Axios, React Router Dom, Lucide React
**Backend:** FastAPI, Python, SQLAlchemy, Pydantic, psycopg2
**Database:** PostgreSQL

---

## Prerequisites
- Node.js (v18+)
- Python (3.9+)
- PostgreSQL (running locally)

---

## 1. Database Setup

1. Install and start PostgreSQL.
2. Open your PostgreSQL terminal (psql) or use a tool like pgAdmin.
3. Create a new database named `school_db`:
   ```sql
   CREATE DATABASE school_db;
   ```
4. Update the database credentials in the backend environment variables if necessary (the default assumes user `postgres` and password `password` on `localhost:5432`).

---

## 2. Backend Setup (FastAPI)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # Mac/Linux:
   source venv/bin/activate
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Verify the `.env` file contains your correct database URL:
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/school_db
   ```
5. Run the FastAPI development server:
   ```bash
   uvicorn main:app --reload
   ```
   The backend will start at `http://localhost:8000`. The database tables will be automatically created on startup.

   **API Endpoints:**
   - Health Check: `GET http://localhost:8000/api/health`
   - Create Contact Message: `POST http://localhost:8000/api/contact`
   - Get Contact Messages: `GET http://localhost:8000/api/contact`

---

## 3. Frontend Setup (React + Vite)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. The frontend will be available at `http://localhost:5173`.

---

## Testing the Flow
1. Open the frontend in your browser (`http://localhost:5173`).
2. Navigate to the **Contact** page.
3. Fill out the form and submit it.
4. You should see a success message.
5. You can verify the data was stored by navigating to `http://localhost:8000/api/contact` in your browser.
