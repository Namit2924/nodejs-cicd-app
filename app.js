const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Route
app.get("/", (req, res) => {
    res.send("🚀 CI/CD Pipeline Working! Node.js App Deployed Successfully");
});

app.get("/api", (req, res) => {
    res.json({
        message: "API is working",
        status: "success"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});