function calcularOperacion(codigoOperacion) {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultadoElemento = document.getElementById("resultado");
  
    if (isNaN(valor1) || isNaN(valor2)) {
      resultadoElemento.textContent = "Ingresa valores numéricos válidos";
      return;
    }
  
    var resultado;
  
    switch (codigoOperacion) {
      case 1: // Sumar
        resultado = valor1 + valor2;
        break;
      case 2: // Restar
        resultado = valor1 - valor2;
        break;
      case 3: // Multiplicar
        resultado = valor1 * valor2;
        break;
      case 4: // Dividir
        if (valor2 === 0) {
          resultadoElemento.textContent = "No es posible dividir por cero";
          return;
        }
        resultado = valor1 / valor2;
        break;
      default:
        resultadoElemento.textContent = "Operación inválida";
        return;
    }
  
    resultadoElemento.textContent = "El resultado es: " + resultado;
  }
  // * PUNTO 2
  function cambiarImagen() {
    var imagen = document.getElementById("miImagen");
    imagen.src = "/img/lapiz.jpg";
  }
  function restaurarImagen() {
    var imagen = document.getElementById("miImagen");
    imagen.src = "/img/foto mia.png";
  }
  //* PUNTO 3
  function avanzaReloj(){
    momentoActual = new Date();
    hora = ("0" + momentoActual.getHours()).slice(-2); 
    minuto = ("0" + momentoActual.getMinutes()).slice(-2); 
    segundo = ("0" + momentoActual.getSeconds()).slice(-2); 
    horaAMostrar = hora + " : " + minuto + " : " + segundo;
    document.form_reloj.reloj.value = horaAMostrar;
    setTimeout(avanzaReloj, 1000);
}
