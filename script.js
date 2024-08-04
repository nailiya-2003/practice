// "use strict";
const numberOfFilms = +prompt("How much films did you look at?", "");
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