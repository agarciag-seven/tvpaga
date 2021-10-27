const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
const connectMongoDB = () => mongoose.connect('mongodb://localhost:27017/tvPaga', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => res.json({ message: 'Bienvenido al sistema de Tv de Paga' }));

// API Routes
app.use('/api', require('./handlers'));

connectMongoDB().then(() => {
  app.listen(3000, () => {
    console.log(`API TV de Paga en puerto 3000`);
  });
});