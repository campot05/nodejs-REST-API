const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();
const { DB_HOST } = process.env;
// mongoose.set('stringQuery', false);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log('Server running. Use our API on port: 3000');
// });
