const mongoose = require('mongoose');

const CakeSchema = mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String
}, {
  timestamps: true
});

const Cake = mongoose.model('Cake', CakeSchema);

const find = async function (query, limit, offset) {
  const data = await Cake
  .find(query)
  .limit(limit)
  .skip(offset)
  .exec();

  const total = await Cake.count(query);

  return {
    data,
    total
  }
}

const findById = function (id, cb) {
  Cake.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newCake = new Cake(inputs);

  return newCake.save();
}

const update = function (id, newObject, cb) {
  Cake.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Cake.deleteOne({ _id: id }, function() {
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