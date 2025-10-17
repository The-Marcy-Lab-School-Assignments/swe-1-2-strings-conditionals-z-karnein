const measureRain = (inches) => {

  if (inches === 0){
  return `drought`
 } else if (inches < 2){
  return `dry`
 }else if (inches < 4){
  return `average`
 } else if (inches < 6){
  return `rainy`
 }else if (inches >= 6){
  return `flood`
 } 
};


const happyBirthdayPet = (breed, age) => {
  
  if (breed === 'snake'){
    return 'Hiss hiss!'
  } else if (breed === 'cat' && age < 5){
    return 'Mew mew!'
  } else if ( breed === 'cat' && age >= 5 ){
    return  'Meow meow!'
  } else if (breed === 'dog' && age < 5){
    return 'Arf arf!'
  } else if (breed === 'dog' && age >= 5 && age < 10){
    return  'Woof woof!'
  }else if(breed === 'dog' && age >= 10){
    return 'Boof!'
  } else {
    return  'Happy birthday!'
  }
};
       happyBirthdayPet('dog', 4)


const funTypes = (jsType) => {
  if (typeof jsType === "string") {
    return "That's just some text.";
  } else if (typeof jsType === "boolean") {
    return "To bool, or not to bool?";
  } else if (typeof jsType === "undefined") {
    return "Nothing, but I didn't set that.";
  } else if (jsType === null) { 
    return "Nothing, and I did set that.";
  } else if (typeof jsType === "object" && !Array.isArray(jsType)) {
    return "Anybody got the key?";
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed.";
  } else if (Number.isNaN(jsType)) {
    return "Well, now you're just showing off.";
  } else if (typeof jsType === "number") {
    return "That's a good number.";
  }
};






const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up'){
    return Math.ceil(float)
  } else if (roundingSetting === 'down'){
     return Math.floor(float)
  } else if( roundingSetting === 'honest' ){
    return Math.round(float)
  }

};




const formatName = (first, last) => {
   let formattedFirst = '';
  let formattedLast = '';

  
  for (let i = 0; i < first.length; i++) {
    if (i === 0) {
      formattedFirst += first[i].toUpperCase();
    } else {
      formattedFirst += first[i].toLowerCase();
    }
  }

  
  for (let i = 0; i < last.length; i++) {
    if (i === 0) {
      formattedLast += last[i].toUpperCase();
    } else {
      formattedLast += last[i].toLowerCase();
    }
  }
   return `${formattedFirst} ${formattedLast}`;
};




const extractDomain = (email) => {
  return email.split("@")[1]
};



const startsWithVowel = (str) => {
   if (!str) return false; 
  const firstChar = str[0].toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(firstChar);
};



const rotate = (str, num) => {
   const len = str.length;
  const n = num % len; 
  let rotated = "";

  
  for (let i = len - n; i < len; i++) {
    rotated += str[i];
  }

  
  for (let i = 0; i < len - n; i++) {
    rotated += str[i];
  }

  return rotated;
};



module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
