const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Api running'));

//Port
const PORT = process.env.PORT || 2020;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));