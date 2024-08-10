const express = require('express');
const app = express();
const routes = require('./routes');
const config = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});