const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  name: String,
  releaseYear: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
});

const Book = mongoose.model('Book', BookSchema);

const find = function (cb) {
  Book.
  find({}).
  populate({path: 'Author', select: 'name'}).
  populate({path: 'Category', select: 'label'}).
  exec(function (err, data) {
    cb(data);
  });
}

const findById = function (id, cb) {
  Book.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newBook = new Book(inputs);
  
  newBook.save(function() {
    cb();
  });
}

const update = function (id, newObject, cb) {
  Book.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Book.deleteOne({ _id: id }, function() {
    cb();
  });
}

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  remove: remove
};