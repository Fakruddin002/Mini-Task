# Mini Task Management System

A simple full-stack task management application built using **React** (frontend) and **Node.js + Express** (backend).
The project focuses on clean logic, clear structure, and proper frontend–backend integration rather than complex UI.

---

## Prerequisites

Ensure the following are installed on your system:

- Node.js (v16 or later)
- npm
- Git

Verify installations:
```bash
node -v
npm -v
git --version
```

---

## Project Setup (Step-by-Step)

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/mini-task-management-system.git
cd mini-task-management-system
```

---

### 2. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

---

### 3. Environment Configuration (Optional)

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
```

> `.env` is ignored by Git for security reasons.

---

### 4. Run Frontend & Backend Together

From the **project root directory**:

```bash
npm run dev
```

This single command:
- Starts the backend on **http://localhost:5001**
- Starts the frontend on **http://localhost:3000**

---

### 5. Open in Browser

- Frontend UI → http://localhost:3000
- Backend API → http://localhost:5001/tasks

---

## API Endpoints

### Get all tasks
```
GET /tasks
```

### Create a task
```
POST /tasks
```
```json
{
  "title": "Task title",
  "description": "Task description"
}
```

### Update task status
```
PATCH /tasks/:id
```
```json
{
  "status": "done"
}
```

### Delete a task
```
DELETE /tasks/:id
```

---

## Features

- Create, view, update, and delete tasks
- Task status management (Todo / In-Progress / Done)
- Filter tasks by status
- Loading and error handling
- Single-command startup using `concurrently`

---

## Project Structure

```
mini-task-management-system/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── node_modules/
│
├── .gitignore
├── package.json
└── README.md
```

---

## Notes

- Task data is stored in memory (no database).
- Restarting the backend clears all tasks.
- `node_modules` are excluded from GitHub using `.gitignore`.
- This project is intended for learning and assessment purposes.

---

## Author

**Fakruddin**
MCA Student | Full-Stack Development Enthusiast
