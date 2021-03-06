const express = require('express');
const app = express();
const mongoose = require('mongoose');
const configs = require('./config/index.js');
const authorRouter = require('./modules/authors/author.router');
const bookRouter = require('./modules/books/book.router');
const categoryRouter = require('./modules/categories/category.router');

mongoose.connect(configs.MONGO_CONNECTION_URL);

app.use(express.json());
app.use('/api/authors', authorRouter.router);
app.use('/api/books', bookRouter.router);
app.use('/api/categories', categoryRouter.router);

app.listen(configs.PORT, function () {
  console.log(`Server listening on port ${configs.PORT}`);
});