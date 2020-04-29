const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Api running'));

//Define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));



//Port
const PORT = process.env.PORT || 2020;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));