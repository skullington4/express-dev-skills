const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Skill Details'
    });
}

function create(req, res) {
    // Models are responible for CRUD'ing the data
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
  }
  
  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  }
  
  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skill Details'
    });
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }