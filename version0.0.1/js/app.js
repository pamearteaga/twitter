
var boton = document.getElementById("btn");


function addTweet() {

	//conseguir texto
    
    var text = document.getElementById("usertext").value;
    document.getElementById("usertext").value = '';
    
    var section = document.getElementById("tweets");

    var content = document.createTextNode(text);

    var tweet = document.createElement("p");

    var newTweet = tweet.appendChild(content);

    section.appendChild(newTweet);

}

boton.addEventListener("click", addTweet);




/*
var boton = document.getElementById("btn");

function addTweet() {
    
    var text = document.getElementById("usertext").value;
    var tweet = document.createElement("p");
    var content = document.createTextNode(text);
    var section = document.getElementById("tweets");

    tweet.appendChild(content);
    document.section.appendChild(tweet);

}

boton.addEventListener("click", createTweet);
*/


