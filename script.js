
"use strict";
// const numberOfFilms = prompt("How much films did you look at?", "");

// for (let i = 0; i < 2; i++) {
//     const latestFilms = prompt("What is one of your watched film?", ""),
//       evaluatedFilms = prompt("How are you evaluate that film?", "");
//       if (latestFilms != "" && evaluatedFilms != "" &&  evaluatedFilms != null && latestFilms != null && latestFilms.length < 50) {
//         console.log("done");
//         personalMovieDB.movies[latestFilms] = evaluatedFilms;
//       } else {
//         console.log("error");
//         i--;
//       }
// }
// if (numberOfFilms.count < 10) {
//   console.log("vi krassavchik")
// } else if (numberOfFilms >= 10 && numberOfFilms <= 20) {
//   console.log("heheh nu ti pocti botanik")
// } else {
//   console.log("poshel")
// }
// console.log(personalMovieDB);

// "use strict";
// let numberOfFilms;
// function start() {
//     let numberOfFilms = +prompt("How much films did you look at?", "");
//     while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("How much films did you look at?", "");
//     }
// }
// start();
// const personalMovieDB = {
//   count: 3,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// }
// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const latestFilms = prompt("What is one of your watched film?", "").trim(),
//       evaluatedFilms = prompt("How are you evaluate that film?", "");
//       if (latestFilms != "" && evaluatedFilms != "" &&  evaluatedFilms != null && latestFilms != null && latestFilms.length < 50) {
//         console.log("done");
//         personalMovieDB.movies[latestFilms] = evaluatedFilms;
//       } else {
//         console.log("error");
//         i--;
//       }
// }
// console.log(personalMovieDB)
// }
// rememberMyFilms();
// function detectPersonalLevel() {
//   if (numberOfFilms.count < 10) {
//     console.log("vi krassavchik")
//   } else if (numberOfFilms >= 10 && numberOfFilms <= 20) {
//     console.log("heheh nu ti pocti botanik")
//   } else {
//     console.log("poshel")
//   }
//   console.log(personalMovieDB);
  
// }
// detectPersonalLevel();

// function showMyGenres() {
//   for(let i = 1; i < 3; i++) {
//     const genre = +prompt(`vash lubimiy janr pod nomerom ${i}`)
//     personalMovieDB.genres[i - 1] = genre;
//   }
//   console.log(personalMovieDB)
// }
// showMyGenres();
// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB)
//   }
// }
// showMyDB(personalMovieDB.privat)
// hbjbjb
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`)
//     for(let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for(let k = 0; k < 3; k++){
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// function getTimeFromMinutes(minutes) {
//   if (typeof minutes !== "number" || minutes < 0 || !Number.isInteger(minutes)) {
//       return "Ошибка, проверьте данные";
//   }

//   const hour = Math.floor(minutes / 60);
//   const minutesOfRealTime = minutes - (hour * 60);
//      let hourText;
//      if (hour % 10 === 1 && hour % 100 !== 11) {
//          hourText = `${hour} час`;
//      } else if ([2, 3, 4].includes(hour % 10) && ![12, 13, 14].includes(hour % 100)) {
//          hourText = `${hour} часа`;
//      } else {
//          hourText = `${hour} часов`;
//      }
//     let minuteText;
//      if (minutesOfRealTime % 10 === 1 && minutesOfRealTime % 100 !== 11) {
//          minuteText = `${minutesOfRealTime} минута`;
//      } else if ([2, 3, 4].includes(minutesOfRealTime % 10) && ![12, 13, 14].includes(minutesOfRealTime % 100)) {
//          minuteText = `${minutesOfRealTime} минуты`;
//      } else {
//          minuteText = `${minutesOfRealTime} минут`;
//      }
 
//      // Возвращаем отформатированную строку
//      return `Это ${hourText} и ${minuteText}`;
  
//  }
//  console.log(getTimeFromMinutes(0));
 // Место для второй задачи
   
// }
// let length = 7;
// let result = '';

// for (let i = 1; i < length; i++) {
//     for(let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '/n';
// }
// function showFirstMessage(text) {
//   console.log(text);
//   let num = 20;
// } 
// showFirstMessage("A mne strashno");


// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(2, 4))
// function anotherNum () {
//   let num = 50;
//   return num;
// }
// let me = anotherNum();
// console.log(me);
// const call = (a, b) => {return a + b}
// let num = 20;

// (num === 10) ? console.log("okey") : console.log("failed!")

// switch(num) {
//     case 34:
//         console.log("ne pravilno");
//     case 20: 
//         console.log("nujno predotvratit");
//     case 21: 
//         console.log("nujno predotvratit iqru");
//         break;
//     default: 
//         console.log("vi nam ne nujni"); 
//         break;
// }
// const hamburger = 5,
// fries = 3
// cola = 0;
// nuggets = 2;
// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("vse siti");
// } else {
//     console.log("mi uxodim");
// }
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let num = 55;
// let num = 40;

// while (num < 50) {
//     console.log(num)
//     num++;
// }
// for (let i = 0; i < 10; i++) {
//     console.log(num++)
// }

// do {
//     console.log(num);
//     num++; 
// } while (num < 55);

// const usdCurr = 20; 
// const discount = 0.6;
// function convert(amount, curr) {
//   return amount + curr;
// } 
// function promotion(result) {
//    console.log(result * discount)
// }
// promotion(convert(23, usdCurr));

// const result = function() {
//   for(let i = 0; i < 5; i++) {
//     console.log(i)
//     if (i === 3) return
//   } 
//   console.log('DONE')
// }
// result();
// function doNothing() {
//   return;
// }
// doNothing();

// function learnJS(lang, callback) {
//   console.log(`Я учу ${lang}`)
//   callback();
// }
// function done() {
//   console.log("Я прошел этот урок уяяяяяяяяяяяяяя!!!")
// }
// learnJS("javascript", done)

// const myObject = new Object()
// const options = {
//   name: 'test',
//   width: 1234,
//   height: 1235,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest:{}
// }
<<<<<<< HEAD
// // options.makeTest()

// // console.log()
// // console.log(options.name)
// // delete options.name
// // console.log(options)
=======
// options.makeTest()

// console.log()
// console.log(options.name)
// delete options.name
// console.log(options)
>>>>>>> 6dfedd9c10183068844fb9c82a9342d9cdbd3d60
// let counter = 0;
// for (let key in options) {
//   if(typeof options[key] === "object") {
//     for (let i in options[key]) {
//     console.log(`the ${i} property has value of ${options[key][i]}`)
//     counter++;
//   }
// }
//   else {
//     console.log(`the ${key} property has value of ${options[key]}`)
//   }
//   counter++;
// };
// const {bg, border} = options.colors
// console.log(bg)
// console.log(Object.keys(options))
// for(let key in options) {
//   let server = [prompt("do you want to check the browser?", ""), prompt("do you want to check the instagram?", ""), prompt("do you want to check the telegram?", ""), prompt("do you want to check the reals?", ""), prompt("do you want to check the skyscanner?", "")]
//   function testMe() {
//     server[i] = console.log(`we need to check all the ${key} for ${options[key]}`)
//     options.makeTest = server;
//   }
//   testMe()
// };
<<<<<<< HEAD
// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'
//   }
// };

// function showExperience(plan) {
//     const {exp,languages, programmingLangs} = plan.skills
//     return exp;
//   }

// showExperience(personalPlanPeter)

// function showProgrammingLangs(plan) {
//   const {exp,languages,programmingLangs} = plan.skills
//   const {js, php} = programmingLangs;
//   return js, php
//  }
//  console.log(showProgrammingLangs(personalPlanPeter))

 const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  }
};

function showExperience(plan) {
const {exp,languages,programmingLangs} = plan.skills
return exp;
}
showExperience(personalPlanPeter)

function showProgrammingLangs(plan) {
const {exp,languages,programmingLangs} = plan.skills
programmingLangs.ruby = "30%"
const {js, php, ruby} = programmingLangs;
return `Язык js изучен на ${js}\nЯзык php изучен на ${php}\nЯзык ruby изучен на ${ruby}`
}
showProgrammingLangs(personalPlanPeter)
=======
// let arr = [1, 2, 3, 4]
// arr.push(2)
// arr.pop()
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// } 
// for (let value of arr) {
//   console.log(value);
// }
// arr.forEach(function(item, i, arr) {
//   console.log(`${item} prinadlejit ${i} po nomeru ${arr}`);
// })
// let array = prompt('', '');
// let products = array.split(', ');
// // console.log(products.join("; "));
// console.log(products.sort())

const obj = {
    a: 5,
    b: 6
}
const copy = obj;
copy.a = 10;
console.log(obj);
console.log(copy);
>>>>>>> 6dfedd9c10183068844fb9c82a9342d9cdbd3d60
