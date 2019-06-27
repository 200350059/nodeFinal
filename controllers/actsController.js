const Act = require('../models/act');

exports.index = (req, res) => {
  Act.find()
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
  Act.findById(req.params.id)
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
  res.render('acts/new', {
    title: 'New Act Post'
  });
};

exports.edit = (req, res) => {
  Act.findById(req.params.id)
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
  Act.updateOne({
    _id: req.body.id
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
  Act.deleteOne({
    _id: req.body.id
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
  Act.find().pendings()
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
  Act.find().accomplished()
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