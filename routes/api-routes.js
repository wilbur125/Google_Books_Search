const db = require("../models");

module.exports = function (app) {

  app.get('/api/savedbooks', function (req, res, next) {
    db.SavedBooks.findAll()
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });

  app.get('/api/savedbooks/:id', function (req, res, next) {
    db.SavedBooks.findByPk(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });

    app.put("/api/savedbooks/update/:id", function (req, res, next) {
    db.SavedBooks.update(
      req.body
    )
      .then((result) => res.json(result))
      .catch((err) => next(err));
 });
}
