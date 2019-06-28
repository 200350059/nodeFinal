const express = require('express');
const app = express();

// Import our Page Routes
const pageRoutes = require('./routes/pages');
const actsRoutes = require('./routes/acts');
const usersRoutes = require('./routes/users');
const sessionsRoutes = require('./routes/sessions');

// Register our Page Routes with our app
app.use('/', pageRoutes);
app.use('/acts', actsRoutes);
app.use('/users', usersRoutes);
app.use('/', sessionsRoutes);

// Export our changes
module.exports = app;