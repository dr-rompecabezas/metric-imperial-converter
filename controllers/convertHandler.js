function ConvertHandler() {

  this.getNum = function (input) {
    const regEx = /^[^\.\/]\d?(\.|\/|\.\d+\/)?\d?/
    let result;
    input = input.match(regEx)
    if (!input) return result

    result = parseFloat(input[0])
    result = result.toFixed(5)
    result = parseFloat(result)

    return result;
  };

  this.getUnit = function (input) {
    const regEx = /[a-z]+$/i;
    let result;
    input = input.match(regEx)

    if (!input) return result

    input = input[0].toLowerCase()

    switch (input) {
      case 'lbs':
        result = 'lbs'
        break;
      case 'kg':
        result = 'kg'
        break;
      case 'mi':
        result = 'mi'
        break;
      case 'km':
        result = 'km'
        break;
      case 'gal':
        result = 'gal'
        break;
      case 'l':
        result = 'L'
        break;

      default:
        break;
    }

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
    switch (unit) {
      case 'lbs':
        result = 'pounds'
        break;
      case 'kg':
        result = 'kilograms'
        break;
      case 'mi':
        result = 'miles'
        break;
      case 'km':
        result = 'kilograms'
        break;
      case 'gal':
        result = 'gallons'
        break;
      case 'L':
        result = 'liters'
        break;

      default:
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case 'lbs':
        result = initNum * lbsToKg
        break;
      case 'kg':
        result = initNum * 1 / lbsToKg
        break;
      case 'mi':
        result = initNum * miToKm
        break;
      case 'km':
        result = initNum * 1 / miToKm
        break;
      case 'gal':
        result = initNum * galToL
        break;
      case 'L':
        result = initNum * 1 / galToL
        break;

      default:
        break;
    }
    
    result = result.toFixed(5)
    result = parseFloat(result)
    return result;
  };

  // input: 89/2lbs => output: 44.5 pounds converts to 20.18484 kilograms
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };

}

module.exports = ConvertHandler;
