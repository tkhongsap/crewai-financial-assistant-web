const express = require('express');
const app = express();
const healthRouter = require('./routes/health');

// ... existing middleware
app.use('/api/health', healthRouter);
// ... rest of your routes

app.listen(3001, () => {
  console.log('Server is running on port 3001');
}); 