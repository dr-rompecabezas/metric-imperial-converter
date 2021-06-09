function ConvertHandler() {

  this.getNum = function (input) {
    let result;

    return result;
  };

  this.getUnit = function (input) {
    const regEx = /[a-z]+/i;
    let result = input.match(regEx)
    result = result[0]
    return result;
  };

  // units: lbs, kg, mi, km, gal, L
  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case 'lbs':
        result = 'kg'
        break;
      case 'kg':
        result = 'lbs'
        break;
      case 'mi':
        result = 'km'
        break;
      case 'km':
        result = 'mi'
        break;
      case 'gal':
        result = 'L'
        break;
      case 'L':
        result = 'gal'
        break;
      
        default:
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = ''
    result = result + this.getUnit

    return result;
  };

}

module.exports = ConvertHandler;
