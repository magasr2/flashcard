var basic = require("./basicCard.js");

var simpleQuestion1 = new basic("What number is Earth from our Sun?", "3");

//console.log(simpleQuestion1.front);
//console.log(simpleQuestion1.back);

var simpleQuestion2 = new basic("What was New York called before the British?", "New Amsterdam");

//console.log(simpleQuestion2.front);
//console.log(simpleQuestion2.back);

var simpleQuestion3 = new basic("Who founded New Orleans?", "The French");

//console.log(simpleQuestion3.front);
//console.log(simpleQuestion3.back);

var simpleQuestion4 = new basic("What year did America declare independance?", "1776");

//console.log(simpleQuestion4.front);
//console.log(simpleQuestion4.back);

var simpleQuestion5 = new basic ("Who was president during the Civil War?", "Abraham Lincoln");

//console.log(simpleQuestion5.front);
//console.log(simpleQuestion5.back);

module.exports = [simpleQuestion1,simpleQuestion2,simpleQuestion3,simpleQuestion4,simpleQuestion5];