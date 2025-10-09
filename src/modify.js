const wildlyBiasedReview = (location) => {
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  } 
  if(location !== 'NYC') {
    console.log('Yea that place is cool I guess');
  }
  
};
console.log(wildlyBiasedReview('NYC'))
console.log(wildlyBiasedReview('nc'))

const getWeatherReport = (temperature) => {
  if (temperature > 90) {
    const weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
    // console.log("And that's your report!");
  } else if (temperature > 70) {
    const weatherReport = "It's really nice!";
    console.log(weatherReport);
    // console.log("And that's your report!");
  } else if (temperature < 32) {
    const weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
    // console.log("And that's your report!");
  }
 console.log("And that's your report!");
};

getWeatherReport(9)
module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};
