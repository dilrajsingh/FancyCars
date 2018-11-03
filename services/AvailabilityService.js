const availabilities = require('../database/availabilities');

module.exports = {
  findAll: () => availabilities,
  findById: (id) => availabilities.find((a) => a.id === id) !== undefined ?
    availabilities.find((a) => a.id === id).available : "Does not exist"
};