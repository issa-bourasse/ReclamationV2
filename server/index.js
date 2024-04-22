const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// Handle POST requests to submit a reclamation
app.post('/reclamation-form', (req, res) => {
    // Extract reclamation data from the request body
    const { fullName, department, labNumber, postNumber, natureOfPannee, description } = req.body;

    // Prepare the reclamation object
    const reclamation = {
        id: uuidv4(),
        fullName,
        department,
        labNumber,
        postNumber,
        natureOfPannee,
        description,
        status: 'Pending' // Initial status when submitting the reclamation
    };

    // Read the existing data from the JSON file
    const existingData = JSON.parse(fs.readFileSync('reclamations.json', 'utf8'));

    // Append the new reclamation to the existing data
    existingData.reclamations.push(reclamation);

    // Write the updated data back to the JSON file
    fs.writeFileSync('reclamations.json', JSON.stringify(existingData, null, 2));

    // Send a response indicating successful submission
    res.status(200).json({ message: 'Reclamation submitted successfully' });
});

// Handle GET requests to fetch all reclamations
app.get('/reclamations', (req, res) => {
    // Read the existing data from the JSON file
    const existingData = JSON.parse(fs.readFileSync('reclamations.json', 'utf8'));

    // Send the existing data as the response
    res.status(200).json(existingData);
});

// Handle GET requests to fetch all history requests
app.get('/history', (req, res) => {
    // Read the history data from the JSON file
    const historyData = JSON.parse(fs.readFileSync('historyrequest.json', 'utf8'));

    // Send the history data as the response
    res.status(200).json(historyData);
});

// Handle POST requests to update reclamation status
app.post('/reclamations/:id/status', (req, res) => {
    const id = req.params.id;

    // Read the existing data from the JSON file
    const existingData = JSON.parse(fs.readFileSync('reclamations.json', 'utf8'));

    // Find the reclamation with the given ID and update its status
    const reclamation = existingData.reclamations.find(reclamation => reclamation.id === id);
    if (!reclamation) {
        return res.status(404).json({ message: 'Reclamation not found' });
    }

    reclamation.status = req.body.status;

    // Write the updated data back to the JSON file
    fs.writeFileSync('reclamations.json', JSON.stringify(existingData, null, 2));

    // Send a response indicating successful update
    res.status(200).json({ message: 'Status updated successfully' });
});

// Handle POST requests to complete a reclamation
app.post('/reclamations/:id/complete', (req, res) => {
    const id = req.params.id;

    // Read the existing data from the JSON files
    const reclamationsData = JSON.parse(fs.readFileSync('reclamations.json', 'utf8'));
    const historyData = JSON.parse(fs.readFileSync('historyrequest.json', 'utf8'));

    // Find the reclamation with the given ID and remove it from the reclamations data
    const index = reclamationsData.reclamations.findIndex(reclamation => reclamation.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Reclamation not found' });
    }
    const completedReclamation = reclamationsData.reclamations.splice(index, 1)[0];

    // Add the completed reclamation to the history data
    historyData.history.push(completedReclamation);

    // Write the updated data back to the JSON files
    fs.writeFileSync('reclamations.json', JSON.stringify(reclamationsData, null, 2));
    fs.writeFileSync('historyrequest.json', JSON.stringify(historyData, null, 2));

    // Send a response indicating successful completion
    res.status(200).json({ message: 'Reclamation completed successfully' });
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
