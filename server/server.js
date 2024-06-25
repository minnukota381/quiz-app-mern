const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define routes here (e.g., app.use('/api/quizzes', require('./routes/quizzes')));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
