

function distingueLetras (argumentos) {

    var x = 0;
    var y = 0;
    var regex=/(\d+)/g;
    
   
    // recorro el string
    for (var i = 0; i < argumentos.length; i++) {
      var charCode = argumentos[i].charCodeAt();
      
      // si pertenece a las mayúsculas
      if (charCode >= 65 && charCode <= 90) {
        x+=argumentos.charAt(i);
      }
      // si pertenece a las minúsculas
      else if (charCode >= 97 && charCode <= 122) {
        y+=argumentos.charAt(i);
      }
     
    }
    console.log("Cadena de Números: "+argumentos.match(regex));
    console.log(`Cadena de letras MAYUSCULAS:  ${x} \n Cadena de letras MINUSCULAS:  ${y} `)
    

  }


distingueLetras("ñalkjsdh39hfjADGA");
