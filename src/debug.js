const coolnessGauge = (numOfFridges) => {

};
console.log(coolnessGauge(4))

const funkoPopAddictionLevel = (numOfFunkoPops) => {
    if (numOfFunkoPops === 0) {
    return 'No pops? Maybe try one.';
  } else if (numOfFunkoPops > 20) {
    return 'You need an intervention!!!';
  } else if (numOfFunkoPops > 10) {
    return 'You need help!';
  } else if (numOfFunkoPops >= 1) {
    return 'Only a few? Keep having fun!';
  } else {
    return 'Invalid number of pops.';
  }

  };


const returnPositiveNegativeZero = (num) => {
 return num === 0 ? 'Zero' : num > 0 ? 'Positive' : 'Negative';
};

module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};
