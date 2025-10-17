const wildlyBiasedReview = (location) => {

  if (location !== 'NYC') {
    console.log('Yea that place is cool I guess')
    return;
  }

  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');

 



  // if (location === 'NYC') {
  //   console.log('THE GREATEST CITY IN THE WORLD');
  //   console.log('THE CITY THAT NEVER SLEEPS');
  //   console.log('WOW WHAT A CITY');
  // } 
  // if(location !== 'NYC') {
  //   return 'Yea that place is cool I guess';
  // }
  
};


const getWeatherReport = (temperature) => {
  let weatherReport;
   if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
  } else if (temperature > 70) {
    weatherReport = "It's really nice!";
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
  } else {
    weatherReport = "Eh, it's okay outside.";
  }
   console.log(weatherReport);
  console.log("And that's your report!");
};

getWeatherReport(9)
module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};
