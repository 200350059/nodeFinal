const Act = require('../models/act');

exports.index = (req, res) => {
  Act.find()
  .populate('user')
    .then(acts => res.json(acts))
    .catch(err => res.status(404).json(err));
};

exports.show = (req, res) => {
  
  Act.findOne({
    _id: req.params.id
  })
  .populate("user")
  .then(acts => res.json(acts))
    .catch(err => res.status(404).json(err));
};

exports.edit = (req, res) => {
  if (!req.isAuthenticated()) return res.status(404).send({ error: "Not authenticated" });

  Act.findOne({
    _id: req.params.id,
    user: req.session.userId
  })
  .then(act => res.send(act))
  .catch(err => res.status(404).send(err));
};

exports.create = (req, res) => {
  if (!req.isAuthenticated()) return res.status(404).send({ error: "Not authenticated" });

  req.body.act.user = req.session.userId;
  Act.create(req.body.act)
    .then(() => res.status(200).send({success: "Act created"}))
    .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
  if (!req.isAuthenticated()) return res.status(404).send({ error: "Not authenticated" });

  Act.updateOne({
    _id: req.body.id,
    user: req.session.userId
  }, req.body.act, {
    runValidators: true
  })
  .then(() => res.status(200).send({success: "Act updated succesfully."}))
  .catch(err => res.status(404).send(err));
};

exports.destroy = (req, res) => {
  if (!req.isAuthenticated()) return res.status(404).send({ error: "Not authenticated" });

  Act.deleteOne({
    _id: req.body.id,
    user: req.session.userId
  })
  .then(() => res.status(200).send({success: "Act deleted succesfully."}))
  .catch(err => res.status(404).send(err));
};

