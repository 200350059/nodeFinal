const express = require('express');
const app = express();

// Import our Routes
const actRoutes = require('./routes/acts');
const userRoutes = require('./routes/users');
const sessionRoutes = require('./routes/sessions');

// Register our Routes with our app
app.use("/acts", actRoutes);
app.use("/users", userRoutes);
app.use("/", sessionRoutes);

// Export our changes
module.exports = app;