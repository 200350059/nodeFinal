const Act = require('../models/act');

exports.index = (req, res) => {
  req.isAuthenticated();

  Act.find({
    user: req.session.userId
  })
  .populate('user')
    .then(acts => {
      res.render('acts/index', {
        acts: acts,
        title: 'TO DO List'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.show = (req, res) => {
  req.isAuthenticated();

  Act.findOne({
    _id: req.params.id,
    user: req.session.userId
  })
  .then(act => {
    res.render('acts/show', {
      act: act,
      title: act.title,
    });
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect('/');
  });
};

exports.new = (req, res) => {
  req.isAuthenticated();

  res.render('acts/new', {
    title: 'New Act Post'
  });
};

exports.edit = (req, res) => {
  req.isAuthenticated();

  Act.findOne({
    _id: req.params.id,
    user: req.session.userId
  })
  .then(act => {
    res.render('acts/edit', {
      act: act,
      title: act.title,
    });
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect('/');
  });
};

exports.create = (req, res) => {
  req.isAuthenticated();

  req.body.act.user = req.session.userId;
  Act.create(req.body.act)
    .then(() => {
      req.flash('success', 'New activity was added successfully.');
      res.redirect('/acts');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/acts/new');
    });
};

exports.update = (req, res) => {
  req.isAuthenticated();

  Act.updateOne({
    _id: req.body.id,
    user: req.session.userId
  }, req.body.act, {
    runValidators: true
  })
  .then(() => {
    req.flash('success', 'The activity was updated successfully.');
    res.redirect(`/acts/${req.body.id}`);
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect(`/acts/${req.body.id}/edit`);
  });
};

exports.destroy = (req, res) => {
  req.isAuthenticated();

  Act.deleteOne({
    _id: req.body.id,
    user: req.session.userId
  })
  .then(() => {
    req.flash('success', 'The activity was deleted successfully.');
    res.redirect('/acts');
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect(`/acts`);
  });
};


// To fil in later
exports.pendings = (req, res) => {
  req.isAuthenticated();

  Act.find({
    user: req.session.userId
  }).pendings()
  .populate('user')
    .then(acts => {
      res.render('acts/index', {
        acts: acts,
        title: 'Pendings'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.accomplished = (req, res) => {
  req.isAuthenticated();
  
  Act.find({
    user: req.session.userId
  }).accomplished()
  .populate('user')
    .then(acts => {
      res.render('acts/index', {
        acts: acts,
        title: 'Accomplished' 
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};