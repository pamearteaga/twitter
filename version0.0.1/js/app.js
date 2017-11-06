

var boton = document.getElementById("btn");


boton.addEventListener("click", addTweet);

function addTweet() {
    
    var text = document.getElementById("usertext").value;
    document.getElementById("usertext").value = "";
    var tweet = document.createElement("p");
    var contentTweet = document.createTextNode(text);
    var section = document.getElementById("tweets");
    var divTweet = document.createElement("div");


    if (text.lenght == 0 || text == null) {

       return document.getElementById("btn").disabled = true;

    } else {

       document.getElementById("btn").disabled = false;
       btn.classList.remove("inactive");

       tweet.appendChild(contentTweet);

       divTweet.appendChild(tweet);

       section.appendChild(divTweet);
   
   }
   

} //addTweet


/*
var textarea = document.getElementById("usertext");

textarea.addEventListener("keypress", btnActive);


function btnActive(){

    if (textarea == "") {

        document.getElementById("btn").disabled = true;

       


    }else{
        
    
    }
    
}//btnActive 



var textarea = document.getElementById('usertext')

textarea.addEventListener("onkeyup", numberChart);

function numberChart(){

  document.getElementById('limit').innerHTML = 140 - this.value.length;
};

*/

// número de caracteres

document.getElementById("usertext").onkeyup = function () {
  document.getElementById("limit").innerHTML = 140 - this.value.length;
};












