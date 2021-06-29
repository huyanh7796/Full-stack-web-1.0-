const mongoose = require('mongoose');

const BreadSchema = mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String
}, {
  timestamps: true
});

const Bread = mongoose.model('Bread', BreadSchema);

const find = async function (query, limit, offset) {
  const data = await Bread
  .find(query)
  .limit(limit)
  .skip(offset)
  .exec();

  const total = await Bread.count(query);

  return {
    data,
    total
  }
}

const findById = function (id, cb) {
  Bread.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newBread = new Bread(inputs);

  return newBread.save();
}

const update = function (id, newObject, cb) {
  Bread.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Bread.deleteOne({ _id: id }, function() {
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