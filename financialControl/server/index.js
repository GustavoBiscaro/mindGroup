const express = require('express');
const cors = require('cors');
const app = express();

// ROUTES
const UserRoutes = require('../server/ROUTES/UserRoutes');
// JSON RESPONSE
app.use(express.json());

// CORS
app.use(cors({credentials: true, origin: 'http://localhost:3001'}));

// PUBLIC FOLDER - IMAGES
app.use(express.static('public'));

// ROUTES
app.use('/users', UserRoutes)

port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

