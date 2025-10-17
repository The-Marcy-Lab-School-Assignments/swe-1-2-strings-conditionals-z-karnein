const coolnessGauge = (numOfFridges) => {
if (numOfFridges <= 3) {
    return 'You need more fridges.';
  } else if (numOfFridges >= 4 && numOfFridges <= 6) {
    return 'You are downright chilly!';
  }
};


const funkoPopAddictionLevel = (numOfFunkoPops) => {
    if (numOfFunkoPops === 0) {
    return 'No pops? Maybe try one.';
  } else if (numOfFunkoPops > 30) {
    return 'You need an intervention!!!';
  } else if (numOfFunkoPops > 20) {
    return 'You need help!';
  } else if (numOfFunkoPops > 10) {
    return 'You have a problem.';
  } else if (numOfFunkoPops >= 1) {
    return 'Only a few? Keep having fun!';
  }

  };


const returnPositiveNegativeZero = (num) => {
 if (num === 0) {
  return 'Zero';
} else if (num > 0) {
  return 'Positive';
} else {
  return 'Negative';
}
};

module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};
