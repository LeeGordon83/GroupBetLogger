const user = require('../models').user

module.exports = {
  create (req, res) {
    return user
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error))
  }
}
