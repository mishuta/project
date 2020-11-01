"use strict"; 


const numberOfFilms = +prompt('Number of films watched?');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

var i;
for (i = 0; i < 2; i++){
    const lastFilm = prompt('Name one of the last watched films?');
    const scoreFilm = prompt('How much you liked it from 1 to 10?');
    personalMovieDB.movies[lastFilm] = scoreFilm;
}

console.log(numberOfFilms);