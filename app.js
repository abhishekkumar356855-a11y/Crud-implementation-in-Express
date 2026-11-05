const express = require("express");
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Use Express Router for modular routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// Custom 404 Not Found handler for invalid routes
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

