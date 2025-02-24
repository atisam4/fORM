const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { customerName, phoneNumber, centerName, agentName, date, month, year, option } = req.body;
    res.send(`
        <h1>Form Submission Successful</h1>
        <p>Customer Name: ${customerName}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Center Name: ${centerName}</p>
        <p>Agent Name: ${agentName}</p>
        <p>Date of Birth: ${month} ${date}, ${year}</p>
        <p>Preset: ${option}</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
