const mongoose = require('mongoose');

const BeverageSchema = mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String
}, {
  timestamps: true
});

const Beverage = mongoose.model('Beverage', BeverageSchema);

const find = async function (query, limit, offset) {
  const data = await Beverage
  .find(query)
  .limit(limit)
  .skip(offset)
  .exec();

  const total = await Beverage.count(query);

  return {
    data,
    total
  }
}

const findById = function (id, cb) {
  Beverage.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newBeverage = new Beverage(inputs);

  return newBeverage.save();
}

const update = function (id, newObject, cb) {
  Beverage.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Beverage.deleteOne({ _id: id }, function() {
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