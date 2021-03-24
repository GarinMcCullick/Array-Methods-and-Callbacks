import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
 /*const HomeTeamName = fifaData.filter(function(item){
     console.log(item['Home Team Name']);
    //return item.Year === 2014;
 });*/
//(b) Away Team name for 2014 world cup final
/*const AwayTeamName = fifaData.filter(function(item){
    console.log(item['Away Team Name']);
   return item.Year === 2014;
});/*
//(c) Home Team goals for 2014 world cup final
const HomeTeamName = fifaData.filter(function(item){
    console.log(item['Home Team Name']);
   return item.Year === 2014;
});
//(d) Away Team goals for 2014 world cup final
const HomeTeamName = fifaData.filter(function(item){
    console.log(item['Home Team Name']);
   return item.Year === 2014;
});
//(e) Winner of 2014 world cup final *//*
const HomeTeamName = fifaData.filter(function(item){
    console.log(item['Home Team Name']);
   return item.Year === 2014;
});

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/


//return an array with teams that made it to finals
function getFinals(data){
   return data.filter(match => match.Stage === "Final");
}
console.log('task 2:',getFinals(fifaData));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data,getFinalsCB){//getFinalsCB is the call back
   return getFinalsCB(data).map(match => { return match.Year});
}
console.log(`task 3: ${getYears(fifaData,getFinals)}`);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

//get winners
function getWinners(array,getFinalsCB) { 
    const winners = [];
    const finalGames = getFinalsCB(array)
    for(let i = 0; i < finalGames.length; i++){
        if(finalGames[i]["Home Team Goals"] > finalGames[i]["Away Team Goals"]){
            winners.push(finalGames[i]["Home Team Name"]);
        }else{
            winners.push(finalGames[i]["Away Team Name"]);
        }
    }
    return winners;
}
console.log(getWinners(fifaData,getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array,getFinalsCB,getYearsCB,getWinnersCB) {
   /* const winner = getWinnersCB(array, getFinalsCB);
    const years = getYearsCB(array, getFinalsCB);
    const last = years.map(function(item){
        return `In ${years[item][0]}, ${winner[item][0]} won the world cup!`
    });
    return winner;*/
}
console.log("task 5:",getWinnersByYear(fifaData,getYears,getWinners));

/*data,getyearsCB,winnersCB
const winner = getWinners(data, getFinals);
const years = getYears(data, getFinals);
return winner.map[function(item, index){
    return `In ${years[index]}, ${item} won the world cup!`;
}*/

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinalsCB) {
   /* const avg = getFinalsCB;
    avg[i]["Home Team Goals"];*/
}console.log(getAverageGoals(getFinals))




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
