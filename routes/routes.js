const CarsService = require('../services/CarsService');
const AvailabilityService = require('../services/AvailabilityService');

module.exports = app => {
  
  // e.g. localhost:5000/availability/id=1
  app.get('/api/availability', (req, res) => {

    const id = req.query.id;

    const availability = AvailabilityService.findById(+id);

    res.send(availability);
  });

  app.get('/api/cars', (req, res) => {

    const cars = CarsService.findAll();

    cars.forEach(car => {
      car.available = AvailabilityService.findById(car.id);
    });

    res.send(cars);
  });

};
