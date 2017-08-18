var closed = require("./ClozeCard.js");

var question1 = new closed("George Washington was the first president", "George Washington");

//GW
//console.log(question1.cloze);

//...was the first president
//console.log(question1.partial);

//GW was the first president
//console.log(question1.fullText);


var question2 = new closed("Neil Armstrong was the first man on the moon.", "Neil Armstrong");

//Neil Armstrong
//console.log(question2.cloze);

//...was the first man on the moon.
//console.log(question2.partial);

//Neil Armstrong was the first man on the moon.
//console.log(question2.fullText);


var question3 = new closed("World War Two ended in 1945.", "1945");

//1945
//console.log(question3.cloze);

//World War Two ended in....
//console.log(question3.partial);

//World War Two ended in 1945.
//console.log(question3.fullText);


var question4 = new closed("Kobe Bryant was a professional basketball player", "basketball");

//basketball
//console.log(question4.cloze);

//Kobe Bryant was a professional ...... player
//console.log(question4.partial)

//Kobe Bryant was a professional basketball player
//console.log(question4.fullText);


var question5 = new closed("Los Angeles touches the Pacific Ocean", "Pacific");

//Pacific
//console.log(question5.cloze); 

//Los Angeles touches the ..... Ocean
//console.log(question5.partial);

//Los Angeles touches the Pacific Ocean
//console.log(question5.fullText);

module.exports = [question1, question2, question3, question4, question5];
