const express = require('express');
const router = express.Router();
const service = require('./book.service');

router.get('/', function(req, res) {
  service.find(function (data) {
    res.json(data);
  });
});

router.post('/', function(req, res) {
  service.create(req.body, function(data) {
    res.send("New book is added!");
  });
});

router.put('/:id', function(req, res) {
  service.update(req.params.id, req.body, function () {
    res.send("Update book success");
  });
});

router.delete('/:id', function (req, res) {
  service.remove(req.params.id, function () {
    res.send("Deleted!");
  });
})

module.exports = {
  router: router
};