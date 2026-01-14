const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Create new task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  const newTask = {
    id: uuidv4(),
    title,
    description,
    status: "todo",
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task status
app.patch("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ["todo", "in-progress", "done"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.status = status;
  res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "Task deleted successfully" });
});

// Start server
app.listen(5001, () => {
  console.log("✅ Backend running on http://localhost:5001");
});
