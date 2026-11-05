const express = require("express");
const router = express.Router();

// Demo data for students
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// GET /students - List all students
router.get("/", (req, res) => {
  const names = students.map((s) => s.name).join(", ");
  res.send(`Students: ${names}`);
});

// GET /students/:id - Fetch a student by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.send("Student not found");
  }

  res.send(`Student: ${student.name}`);
});

module.exports = router;

