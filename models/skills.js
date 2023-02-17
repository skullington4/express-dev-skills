const skills = [
    {id: 123456, skill: 'Cooking'},
    {id: 128974, skill: 'Eating'},
    {id: 134287, skill: 'Running'}
];

module.exports = {
    getAll,
    deleteOne,
    create,
    getOne
}

function getAll() {
    return skills;
}

function deleteOne(id) {
    id = parseInt(id);
    console.log(id);
    // Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }