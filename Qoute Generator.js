var quote_list = ["\"Life is what happens when you're busy making other plans.\"",
"\"Get busy living or get busy dying.\"",
"\"You only live once, but if you do it right, once is enough.\"",
"\"Many of life\'s failures are people who did not realize how close they were to success when they gave up.\"",
"\"If you want to live a happy life, tie it to a goal, not to people or things.\"",
"\"Never let the fear of striking out keep you from playing the game.\"",
"\"Money and success don\'t change people; they merely amplify what is already there.\"",
"\"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking.\"",
"\"Not how long, but how well you have lived is the main thing.\"",
"\"The purpose of our lives is to be happy.\""]

var author_list = [" John Lennon", "Stephen King", "Mae West", "Thomas A. Edison"," Albert Einstein","Babe Ruth","Will Smith",
"Steve Jobs","Seneca","Dalai Lama"]

n = 0
content = document.querySelector(".quote");
author_cont = document.querySelector(".author");
store_count = quote_list[quote_list.length-1];


document.querySelector(".new").addEventListener("click",function (){
    var random_num = ((Math.random())*(quote_list.length-n));
    random_num1 = (Math.floor(random_num));
    while (random_num1 === store_count){
        var random_num = ((Math.random())*(quote_list.length-n));
        var random_num1 = Math.floor(random_num);
    };
    store_count = random_num1;

    content.innerText = quote_list[random_num1];
    author_cont.innerText = author_list[random_num1].toUpperCase();

    n = 0;
});



