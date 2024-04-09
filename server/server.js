const express = require('express');
const cors = require("cors");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Array to store submitted data
const submittedData = [];

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API endpoint for form submission
app.post('/post', (req, res) => {
    const formData = req.body;
    console.log(formData);
    submittedData.push(formData);
    res.json(formData);
});

// Serve your frontend build files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle all other routes
app.get('*', (req, res) => {
    res.json(submittedData);
});

app.listen(PORT, (res, err) => {
    if (err) {
        console.log("Server failed");
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
