const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Equality', function () {

    test('#equal, #notEqual', function () {
      assert.equal(convertHandler.getReturnUnit('gal'), 'L', 'convertHandler should correctly convert gal to L');
      assert.equal(convertHandler.getReturnUnit('L'), 'gal', 'convertHandler should correctly convert L to gal');
      assert.equal(convertHandler.getReturnUnit('mi'), 'km', 'convertHandler should correctly convert mi to km');
      assert.equal(convertHandler.getReturnUnit('km'), 'mi', 'convertHandler should correctly convert km to mi');
      assert.equal(convertHandler.getReturnUnit('lbs'), 'kg', 'convertHandler should correctly convert lbs to kg');
      assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'convertHandler should correctly convert kg to lbs');
    });  
  });
});
