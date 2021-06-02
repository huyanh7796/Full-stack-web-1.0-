const repository = require('./author.repository');

const find = function (cb) {
  repository.find(cb);
}

const create = function (inputs, cb) {
  // Data validation

  // Persist data
  repository.create(inputs, cb);
}

const update = function (id, newObject, cb) {
  repository.update(id, newObject, cb);
}

const remove = function (id, cb) {
  repository.remove(id, cb);
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove
};