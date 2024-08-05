"use strict";
const numberOfFilms = +prompt("How much films did you look at?", "");
const personalMovieDB = {
    count: 3,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
for (let i = 0; i < 2; i++) {
    const latestFilms = prompt("What is one of your watched film?", ""),
      evaluatedFilms = prompt("How are you evaluate that film?", "");
      if (latestFilms != "" && evaluatedFilms != "" &&  evaluatedFilms != null && latestFilms != null && latestFilms.length < 50) {
        console.log("done");
        personalMovieDB.movies[latestFilms] = evaluatedFilms;
      } else {
        console.log("error");
        i--;
      }
}
if (numberOfFilms.count < 10) {
  console.log("vi krassavchik")
} else if (numberOfFilms >= 10 && numberOfFilms <= 20) {
  console.log("heheh nu ti pocti botanik")
} else {
  console.log("poshel")
}
console.log(personalMovieDB);


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