const Hobby = function(hobby) {
  this.name = hobby.name;
  this.selectedActivity = hobby.selectedActivity;
}

const Database = function() {
  this.hobbies = [];
}

Database.prototype.find = function() {
  return this.hobbies;
}

Database.prototype.save = function(hobby) {
  const newHobby = new Hobby(hobby);
  this.hobbies.push(newHobby);
  return newHobby;
}

module.exports = {
    DB: 'mongodb://localhost:27017/hobbiesDB'
}
