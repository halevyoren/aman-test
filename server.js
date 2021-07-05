require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const callLogRoutes = require('./routes/callLogRoutes');

const app = express();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((con) => console.log(`MongoDB connected to DB`));

app.use(express.json());

app.use('/logs', callLogRoutes);

app.listen(4000, () => console.log('Server online'));
