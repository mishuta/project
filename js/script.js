"use strict"; 


let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Number of films watched?');
     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Number of films watched?');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Name one of the last watched films?');
        const b = prompt('How much you liked it from 1 to 10?');
        if (a != null && b != null && a != '' && b != '' && a.length < 6 && b.length < 6 ) {
            personalMovieDB.movies[a] = b;        
            console.log('done');
        } else {
            i--;
            console.log('error');        
        }
        
        
    }
}

// rememberMyFilms();

function detectPersonalLeve(){
    if (personalMovieDB.count < 10) {
        console.log('Noob');
    } else if (personalMovieDB.count < 30) {
        console.log('Mediocre');
    } else {
        console.log('Omega');
    }
    
}

// detectPersonalLeve();


function showmyDB(hidden) {    
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showmyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i=1; i <= 3; i++) {
        const c = prompt(`Name favorite genre ${i}`);
        personalMovieDB.genres[i - 1] = c;
    }
}

writeYourGenres();