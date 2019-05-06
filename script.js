var quotes = ["When angry, count to four. When very angry, swear.\n-Mark Twain", "Those who are at war with others are not at peace with themselves.\n-William Hazlitt", "Smile. Breathe. And go slowly.\n-Thich Nhat Hanh", "Reactions come from the mind. Responses come from the heart.\n-Joseph Meyering Sr"];

$(document).ready(function() {
    var randomOne = Math.floor(Math.random() * quotes.length);
    var randomTwo = Math.floor(Math.random() * quotes.length);
    var randomThree = Math.floor(Math.random() * quotes.length);
    var elements = $(".random");
    var firstQuote = elements[0];
    var secondQuote = elements[1];
    var thirdQuote = elements[2];
    firstQuote.innerText = quotes[randomOne];
    secondQuote.innerText = quotes[randomTwo];
    thirdQuote.innerText = quotes[randomThree];
}) 
