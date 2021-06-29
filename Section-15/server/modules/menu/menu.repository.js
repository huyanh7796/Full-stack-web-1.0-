const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String
}, {
  timestamps: true
});

const Menu = mongoose.model('Menu', MenuSchema);

const find = async function (query, limit, offset) {
  const data = await Menu
  .find(query)
  .limit(limit)
  .skip(offset)
  .exec();

  const total = await Menu.count(query);

  return {
    data,
    total
  }
}

const findById = function (id, cb) {
  Menu.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newMenu = new Menu(inputs);

  return newMenu.save();
}

const update = function (id, newObject, cb) {
  Menu.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Menu.deleteOne({ _id: id }, function() {
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