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

if (personalMovieDB.count < 10) {
    console.log('Noob');
} else if (personalMovieDB.count < 30) {
    console.log('Mediocre');
} else {
    console.log('Omega');
}


for (let i = 0; i < 3; i++) {
    const a = prompt('Name one of the last watched films?');
    const b = prompt('How much you liked it from 1 to 10?');
    if (a != null && b != null && a != '' && b != '' && a.length < 6 && b.length < 6 ) {
        personalMovieDB.movies[a] = b;        
        console.log('done');
    } else {
        i = 0;
        console.log('error');        
    }
    
    
}

console.log(personalMovieDB);