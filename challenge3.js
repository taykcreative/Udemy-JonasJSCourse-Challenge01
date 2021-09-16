// Course: JavaScript Fundamentals - Part 1
// Coding Challenge #3
// Completed by: Tay
// Date: September 16, 2021

// Variables
const NUMBER_OF_GAMES = 3;
const MIN_SCORE = 100;
//Dolphins
let score1 = 96;
let score2 = 108;
let score3 = 89;
const DOLPHIN_GAME1_AVG = (score1 + score2 + score3) / NUMBER_OF_GAMES;
score1 = 97;
score2 = 112;
score3 = 101;
const DOLPHIN_GAME2_AVG = (score1 + score2 + score3) / NUMBER_OF_GAMES;
const DOLPHIN_GAME3_AVG = DOLPHIN_GAME2_AVG; //the values were the same
// Koalas Game 1
score1 = 88;
score2 = 91;
score3 = 110;
const KOALA_GAME1_AVG = (score1 + score2 + score3) / NUMBER_OF_GAMES
score1 = 109;
score2 = 95;
score3 = 123;
const KOALA_GAME2_AVG = (score1 + score2 + score3) / NUMBER_OF_GAMES
score1 = 109;
score2 = 95;
score3 = 106;
const KOALA_GAME3_AVG = (score1 + score2 + score3) / NUMBER_OF_GAMES

// if/else GAME 1
if(DOLPHIN_GAME1_AVG > KOALA_GAME1_AVG && DOLPHIN_GAME1_AVG >= MIN_SCORE) {
    console.log(`Dolphin's win game 1!`)
}
else if (DOLPHIN_GAME1_AVG < KOALA_GAME1_AVG && KOALA_GAME1_AVG >= MIN_SCORE){
    console.log(`Koala's win game 1!`)
}
else {
    if(DOLPHIN_GAME1_AVG >= MIN_SCORE && KOALA_GAME1_AVG >= MIN_SCORE)
        console.log(`Game 1 DRAW`)
    else{
        console.log(`Min Score not reached`)
    }
}

// if/else GAME 2
if(DOLPHIN_GAME2_AVG > KOALA_GAME2_AVG && DOLPHIN_GAME2_AVG >= MIN_SCORE) {
    console.log(`Dolphin's win game 2!`)
}
else if (DOLPHIN_GAME2_AVG < KOALA_GAME2_AVG && KOALA_GAME2_AVG >= MIN_SCORE){
    console.log(`Koala's win game 2!`)
}
else {
    if(DOLPHIN_GAME2_AVG >= MIN_SCORE && KOALA_GAME2_AVG >= MIN_SCORE)
        console.log(`Game 2 DRAW`)
    else{
        console.log(`Min Score not reached`)
    }
}

// if/else GAME 3
if(DOLPHIN_GAME3_AVG > KOALA_GAME3_AVG && DOLPHIN_GAME3_AVG >= MIN_SCORE) {
    console.log(`Dolphin's win game 3!`)
}
else if (DOLPHIN_GAME3_AVG < KOALA_GAME3_AVG && KOALA_GAME3_AVG >= MIN_SCORE){
    console.log(`Koala's win game 3!`)
}
else {
    if(DOLPHIN_GAME3_AVG >= MIN_SCORE && KOALA_GAME3_AVG >= MIN_SCORE)
        console.log(`Game 3 DRAW`)
    else{
        console.log(`Min Score not reached`)
    }
}
