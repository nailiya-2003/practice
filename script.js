"use strict";
const numberOfFilms = +prompt("How much films did you look at?", "");
function start() {
    
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const latestFilms = prompt("What is one of your watched film?", ""),
      evaluatedFilms = +prompt("How are you evaluate that film?", "");

personalMovieDB.movies[latestFilms] = evaluatedFilms;
console.log(personalMovieDB);


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
   
   
// }
// let length = 7;
// let result = '';

// for (let i = 1; i < length; i++) {
//     for(let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '/n';
// }