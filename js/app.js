
// BOTON PARA AGREGAR TWEET NUEVO
var boton = document.getElementById("btn"); // variable que llama la boton


boton.addEventListener("click", addTweet); // funcion para agergar evento al boton

function addTweet() {
    
    var text = document.getElementById("usertext").value; // variable para llamar el texto que ingresa el usuario
    document.getElementById("usertext").value = ""; // se vacia el campo

    var tweet = document.createElement("p"); // se crea el p donde irá el texto
    var contentTweet = document.createTextNode(text); // se crea el nodo texto
    var section = document.getElementById("tweets"); // sección donde van los nuevos tweets
    var divTweet = document.createElement("div"); // div donde irá el párrafo con el texto del usuario

    // VARIABLES para la hora
    var hourTweet = new Date(); // llama la fecha actual
    var hour = hourTweet.getHours(); // comando extrae la hora de Date
    var min = hourTweet.getMinutes(); // comando extrae los minutos de Date

   
    var textHour = document.createTextNode(hour + ':' + min); //el texto que indica la hora 

   
    var hourCont = document.createElement("div"); //crear el div donde va la hora
    hourCont.setAttribute("class", "hora"); // se agregar el atributo de la clase css


    if (text.length == 0 || text == null) { // desactivar boton en caso de que el campo esté vacío

       document.getElementById("btn").disabled = true;

    } else { // en caso de que se rellene el textarea

       document.getElementById("btn").disabled = false; // activar boton
       
       tweet.appendChild(contentTweet); // insertar comentario dentor del nodo de texto

       hourCont.appendChild(textHour); // inserta la hora dentro del div que la va a contener

       divTweet.appendChild(tweet); // insertar en el párrafo

       divTweet.appendChild(hourCont); // inserta div con hora


       section.appendChild(divTweet); // insertar en la sección donde van los tweets nuevos

       
       document.getElementById("limit").innerHTML = 140; // aprovecho de resetear contador de caracteres 

   
   }
   
}



// contador de caracteres y activar botón

var textarea = document.getElementById("usertext"); // llama el textarea

textarea.onkeydown = function(){ // la función se activará cuando se comience a escribir

  var initialLimit = document.getElementById("limit"); // llama al contenedor del contador

  var numberChart = initialLimit.innerHTML = 140 - this.value.length; // llamando al número que está en el html el cual se modificará
  
  btn.classList.remove("inactive"); // aprovecho de activar la clase css que hace que el botón se vea desactivado

   if (numberChart <= 0) { // si el número es menor o igual a 0

      document.getElementById("btn").disabled = true; // desactivar botón
      btn.classList.add("inactive"); // agregar lase css de botón inactivo

   } else if (numberChart <= 20 && numberChart >= 11) { // si el número es menor o igual a 20 y mayor o igual a 11 entonces activar el color naranjo
       
       initialLimit.classList.add("orange");

   } else if (numberChart <= 10 && numberChart > 0) {// si el número es menor o igual a 10 y mayor a 0 entonces activar el color rojo
       
       initialLimit.classList.remove("orange");
       initialLimit.classList.add("red");

   } else if (numberChart >= 19 && numberChart <= 140){ // desactivar naranjo y rojo cuando se borren caracteres y retroceda

       initialLimit.classList.remove("orange");
       initialLimit.classList.remove("red");
   }
};


// REZISE AUTOMATICO

var maxHeight = 150; // se define la altura máxima del textarea

textarea.oninput = function() { //la funcion se activa cuando el usuario escribe
  textarea.style.height = ""; // se "limpia" la altura del textarea
  textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px"; // se reemplaza y suma pixeles a medida que se generan nuevas líneas de texto
};










