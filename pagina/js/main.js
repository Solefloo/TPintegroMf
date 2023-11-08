function valueEntrada (){
   var cantidadT = document.getElementById("cantidad").value;
   var categoriaT = document.getElementById ("categoria").value;
   const TICKET=200;

   /*if(categoriaT==0) {
    rTotal = cantidadT*TICKET;
   }
   if(categoriaT==1) {
    rTotal = cantidadT*TICKET*0.2;
   }
   if(categoriaT==2) {
    rTotal = cantidadT*TICKET*0.5;
   }
   if(categoriaT==3) {
    rTotal = cantidadT*TICKET*0.85;
   }*/
 
   switch (categoriaT) {
  case "0":
    var rTotal= cantidadT*TICKET;
    break;
  case "1":
    var rTotal= cantidadT*TICKET*0.2;
    break;
  case "2":
    var rTotal= cantidadT*TICKET*0.5;
    break;
  case "3":
    var rTotal= cantidadT*TICKET*0.85;
    break;
  default:
    break;
 }
   

   Document.getElementById ("total").innerText = rTotal; 
    
}


function formRevision(){
  //para nombres, no nulo ni dato numerico

  const name = nombre.value ;

  const patronN = /^[a-zA-Z]+$/;

 if (!patronN.test(name) && nombre.value==="" ) {
    nombre.classList.add("is-invalid");
    nombre.focus();
  }
  else{
    nombre.classList.remove("is-invalid")
  }
  //para apellidos con tilde, letra "ñ" y espacios en blanco
  const lastname = apellido.value;

  const patronA = /^[A-Za-zÑñÁáÉéÍíÓóÚú]+((\s[A-Za-zÑñÁáÉéÍíÓóÚú])*)?$/;

  if (!patronA.test(lastname) && apellido.value==="" ) {
    apelido.classList.add("is-invalid");
    apellido.focus();
  }
  else{
    apellido.classList.remove("is-invalid")
  }

//para correo electronico
  const correo = email.value;
  const patron = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

 if (!patron.test(correo)) {
    email.classList.add("is-invalid");
    email.focus();
  // El correo electrónico no es válido.
 }
 else{
   email.classList.remove("is-invalid")
 }
 valueEntrada();
}

const BOTONCLICK= document.getElementById ("botonRe");
BOTONCLICK.addEventListener("click",formRevision);