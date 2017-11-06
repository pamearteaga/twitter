

var boton = document.getElementById("btn");


boton.addEventListener("click", addTweet);

function addTweet() {
    
    var text = document.getElementById("usertext").value;
    document.getElementById("usertext").value = "";
    var tweet = document.createElement("p");
    var contentTweet = document.createTextNode(text);
    var section = document.getElementById("tweets");
    var divTweet = document.createElement("div");


    if (text.length == 0 || text == null) {

       document.getElementById("btn").disabled = true;

    } else {

       document.getElementById("btn").disabled = false;
       
       tweet.appendChild(contentTweet);

       divTweet.appendChild(tweet);

       section.appendChild(divTweet);

       document.getElementById("limit").innerHTML = 140; //resetear contador
   
   }
   
}



// contador de caracteres y activar botón

var textarea = document.getElementById("usertext");

textarea.onkeydown = function(){

  var initialLimit = document.getElementById("limit");

  var numberChart = initialLimit.innerHTML = 140 - this.value.length;
  
  btn.classList.remove("inactive");

   if (numberChart <= 0) {

      document.getElementById("btn").disabled = true;
      btn.classList.add("inactive");

   } else if (numberChart <= 20 && numberChart >= 11) {
       
       initialLimit.classList.add("orange");

   } else if (numberChart <= 10 && numberChart > 0) {
       
       initialLimit.classList.remove("orange");
       initialLimit.classList.add("red");

   } 
};












