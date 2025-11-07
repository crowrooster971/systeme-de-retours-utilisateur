const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let feedbacks = [];

// Route to submit feedback
app.post('/api/feedback', (req, res) => {
    const { username, message } = req.body;
    if (!username || !message) {
        return res.status(400).send({ message: 'Username and message are required.' });
    }
    const timestamp = new Date().toISOString();
    const feedback = { username, message, timestamp };
    feedbacks.push(feedback);
    res.status(201).send({ message: 'Feedback submitted successfully', feedback });
});

// Route to retrieve feedback
app.get('/api/feedback', (req, res) => {
    res.status(200).send(feedbacks);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});