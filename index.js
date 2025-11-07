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
    feedbacks.push({ username, message });
    res.status(201).send({ message: 'Return submitted successfully' });
});

// Route to retrieve feedback
app.get('/api/feedback', (req, res) => {
    res.status(200).send(feedbacks);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});