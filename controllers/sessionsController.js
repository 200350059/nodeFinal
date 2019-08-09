const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.authenticate = (req, res) => {
    User.findOne({
        email: req.body.email
      })
      .then(user => {
        user.authenticate(req.body.password, (err, isMatch) => {
          if (err) throw new Error(err);
  
          if (isMatch) {
            req.session.userId = user.id;
  
            const token = jwt.sign({ payload: req.body.email }, "workhardplayhard", { expiresIn: '1h' });
          res.cookie('token', token, { httpOnly: true }).status(201).send({ success: "Authenticated succesfully."});
          } else {
            res.status(401).json({ error: `ERROR: Your credentials do not match.` });
          }
        });
      })
      .catch(err => {
        res.json(err);
      });
  };

  exports.logout = (req, res) => {
    req.session.userId = null;
    req.flash('success', 'You are logged out');
    res.redirect('/');
  };