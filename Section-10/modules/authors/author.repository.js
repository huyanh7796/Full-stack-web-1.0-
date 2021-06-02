const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
  name: String,
  age: Number,
  genre: Array,
  books: String
});

const Author = mongoose.model('Author', AuthorSchema);

const find = function (cb) {
  Author.find({}).exec(function (err, data) {
    cb(data);
  });
}

const findById = function (id, cb) {
  Author.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newAuthor = new Author(inputs);
  newAuthor.save(function() {
    cb();
  });
}

const update = function (id, newObject, cb) {
  Author.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Author.deleteOne({ _id: id }, function() {
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