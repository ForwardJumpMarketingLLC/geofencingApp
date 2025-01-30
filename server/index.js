require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Sample Route
app.get('/', (req, res) => {
    res.send('Geofencing API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
