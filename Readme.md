📝 Mini Task Management System

A simple full-stack task management application that allows users to create, view, update, delete, and filter tasks.
The focus of this project is clean logic, proper structure, and clear thinking, not heavy UI or complex libraries.

🎯 Objective

To build a minimal full-stack application that demonstrates:

REST API design

Frontend–backend integration

Component-based React architecture

Proper state handling and user interactions

🛠 Tech Stack
Frontend

React

Axios

CSS (basic styling)

Backend

Node.js

Express.js

UUID

CORS

✨ Features

➕ Create new tasks

📋 View all tasks

🔄 Update task status (Todo / In-Progress / Done)

🗑 Delete tasks

🔍 Filter tasks by status

⏳ Loading and error handling

▶️ Run backend & frontend with a single command

📂 Project Structure
mini-assessment/
├── backend/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.js
│   └── package.json
│
├── package.json   (root – for concurrently)
└── README.md

🔗 Backend API Endpoints
1️⃣ Get all tasks
GET /tasks

2️⃣ Create a task
POST /tasks


Request Body

{
  "title": "Task title",
  "description": "Task description"
}

3️⃣ Update task status
PATCH /tasks/:id


Request Body

{
  "status": "done"
}

4️⃣ Delete a task
DELETE /tasks/:id

▶️ How to Run the Project
🔹 Step 1: Install dependencies

Backend

cd backend
npm install


Frontend

cd frontend
npm install

🔹 Step 2: Run both backend & frontend together

From the root folder:

npm run dev

🔹 Step 3: Open in browser

Frontend → http://localhost:3000

Backend → http://localhost:5001/tasks

⚠️ Notes

Data is stored in memory (no database).

Restarting the backend will reset tasks.

Project is designed for assessment/demo purposes.

Emphasis is on logic and clarity, not UI libraries.

🧠 What This Project Demonstrates

RESTful API design

React component composition

State and effect management

Error handling and UX feedback

Full-stack integration

Development workflow optimization using concurrently

👤 Author

Fakruddin
MCA Student | Full-Stack Development Enthusiast