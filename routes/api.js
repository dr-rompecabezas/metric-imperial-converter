'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  // endpoint: api/convert?input
  // parser: req.query.input
  // { initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }

  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;
    const initUnit = convertHandler.getUnit(input)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const output = {
      initUnit,
      returnUnit
    }
    res.send(output);
  })

};
