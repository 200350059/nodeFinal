const Act = require('../models/act');

exports.index = (req, res) => {
  Act.find()
    .then(acts => {
      res.render('acts/index', {
        acts: acts,
        title: 'Archive'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
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
    console.error(`ERROR: ${err}`);
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
    console.error(`ERROR: ${err}`);
  });
};

exports.create = (req, res) => {
  Act.create(req.body.act)
    .then(() => {
      res.redirect('/acts');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.update = (req, res) => {
  Act.updateOne({
    _id: req.body.id
  }, req.body.act, {
    runValidators: true
  })
  .then(() => {
    res.redirect(`/acts/${req.body.id}`);
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.destroy = (req, res) => {
  Act.deleteOne({
    _id: req.body.id
  })
  .then(() => {
    res.redirect('/acts');
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};


// To fil in later
exports.drafts = (req, res) => {
  Act.find().drafts()
    .then(acts => {
      res.render('acts/index', {
        acts: acts,
        title: 'Drafts'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.published = (req, res) => {
  Act.find().published()
    .then(acts => {
      res.render('acts/index', {
        acts: acts,
        title: 'Published' 
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};