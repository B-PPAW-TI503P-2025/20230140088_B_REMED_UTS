const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/borrow', require('./routes/borrowRoutes'));

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
  });
});
