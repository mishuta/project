"use strict"; 


// let numberOfFilms;

// function start() {
//      numberOfFilms = +prompt('Number of films watched?');
//      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Number of films watched?');
//      }
// }



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        personalMovieDB.count = +prompt('Number of films watched?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Number of films watched?');
        }
   },
    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Noob');
        } else if (personalMovieDB.count < 30) {
            console.log('Mediocre');
        } else {
            console.log('Omega');
        }        
    },

    showmyDB: function (hidden) {    
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },

    writeYourGenres: function (){
        for (let i=1; i < 2; i++) {
            let genres = prompt(`Name favorite genres`);
           
            if (genres == null && genres == '') {
                i--;
                console.log('error');
            } else {                
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
                console.log('done');        
            }            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre #${i + 1} is - ${item}`);
        });   
            
    },  
    

    toogleVisiblemyDB: function() {
        // personalMovieDB.privat = !personalMovieDB.privat;
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        
        }    
};
// personalMovieDB.start();
// personalMovieDB.toogleVisiblemyDB();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel(personalMovieDB.privat);
// personalMovieDB.showmyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();



// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Name one of the last watched films?');
//         const b = prompt('How much you liked it from 1 to 10?');
//         if (a != null && b != null && a != '' && b != '' && a.length < 6 && b.length < 6 ) {
//             personalMovieDB.movies[a] = b;        
//             console.log('done');
//         } else {
//             i--;
//             console.log('error');        
//         }
        
        
//     }
// }

// rememberMyFilms();

// function detectPersonalLeve(){
//     if (personalMovieDB.count < 10) {
//         console.log('Noob');
//     } else if (personalMovieDB.count < 30) {
//         console.log('Mediocre');
//     } else {
//         console.log('Omega');
//     }
    
// }

// detectPersonalLeve();


// function showmyDB(hidden) {    
//     if (!hidden) {
//         console.log(personalMovieDB);
//     } 
// }

// showmyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for (let i=1; i <= 3; i++) {
//         const c = prompt(`Name favorite genre ${i}`);
//         personalMovieDB.genres[i - 1] = c;
//     }
// }

// writeYourGenres();