function produceDrivingRange (range) {
  return function (starting, ending) {
    const startLocation = parseInt(starting.replace('th', ''));
    const endLocation = parseInt(ending.replace('th', ''));
    const tripDistance = Math.abs(startLocation - endLocation);
    if (range >= tripDistance) {
      return `within range by ${range - tripDistance}`
    } else {
      return `${tripDistance - range} blocks out of range`
    }
  }
}

function produceTipCalculator (percentage) {
  return function (bill) {
    return bill * percentage;
  }
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor (name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
