const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let feedbacks = [];

// Route pour soumettre des retours
app.post('/api/feedback', (req, res) => {
    const { username, message } = req.body;
    feedbacks.push({ username, message });
    res.status(201).send({ message: 'Retour soumis avec succès' });
});

// Route pour récupérer les retours
app.get('/api/feedback', (req, res) => {
    res.status(200).send(feedbacks);
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
