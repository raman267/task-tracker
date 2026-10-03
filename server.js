const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Allows your webpage to talk to this server
app.use(express.json()); // Allows the server to read incoming text data

// This is our temporary storage (database) for tasks
let tasks = [
    { id: 1, text: "Successfully set up VS Code!" },
    { id: 2, text: "Started my first Node.js server!" }
];

// Route 1: Send the list of tasks back to the webpage when requested
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Start the server and tell it to listen for requests
app.listen(PORT, () => {
    console.log(`🚀 SERVER RUNNING! The server kitchen is open on http://localhost:${PORT}`);
});
