var quotes = ["new value!", "Value 2$#@!Ff5h", "Value 3", "Value 4"];


$(document).ready(function() {
    var random = Math.floor(Math.random() * quotes.length);
    var element = $("#random")[0];
    element.innerText = quotes[random];
}) 
