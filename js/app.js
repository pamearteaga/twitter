

var boton = document.getElementById("btn");


boton.addEventListener("click", addTweet);

function addTweet() {
    
    var text = document.getElementById("usertext").value;
    document.getElementById("usertext").value = "";

    var tweet = document.createElement("p");
    var contentTweet = document.createTextNode(text);
    var section = document.getElementById("tweets");
    var divTweet = document.createElement("div");

    /*
    var hourTweet = document.createElement("div")
    hourTweet.setAttribute("id", "hora");


    var hour = function postHour(){
                        var fecha= new Date()
                        var horas= fecha.getHours()
                        var minutos = fecha.getMinutes()
 
                 document.write(horas + ":" + minutos + ":" + segundos)
                    }
     var hourCont = document.createTextNode(hour);*/


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

   } else if (numberChart >= 19 && numberChart <= 140){

       initialLimit.classList.remove("orange");
       initialLimit.classList.remove("red");
   }
};


// REZISE AUTOMATICO

var maxHeight = 150; 

textarea.oninput = function() {
  textarea.style.height = ""; 
  textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
};










