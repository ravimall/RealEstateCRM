const express = require('express');
const allocationRoutes = require('./api/allocationRoutes');
// ... other imports

const app = express();
app.use(express.json());

app.use('/api', allocationRoutes);

// ... other middleware/routes

module.exports = app;
