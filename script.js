
// "use strict";
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
const personalMovieDB = {
  count: 3,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const latestFilms = prompt("What is one of your watched film?", "").trim(),
      evaluatedFilms = prompt("How are you evaluate that film?", "");
      if (latestFilms != "" && evaluatedFilms != "" &&  evaluatedFilms != null && latestFilms != null && latestFilms.length < 50) {
        console.log("done");
        personalMovieDB.movies[latestFilms] = evaluatedFilms;
      } else {
        console.log("error");
        i--;
      }
}
console.log(personalMovieDB)
}
rememberMyFilms();
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

