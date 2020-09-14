var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas =  parseInt(texto.value);
  var l = 0;
  var yi, xf, xi, yf;
  var color = "#568EBF";
  var espacio = ancho / lineas;

  for(l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = espacio * (l + 1);
    yf = espacio * (l + 1);

    dibujarLinea(color, 0, yi, xf, 300);
    dibujarLinea(color, xi, 1, 299, yf);

    console.log("linea " + l);
  }

  dibujarLinea(color, 1, 1, 1, 299);
  dibujarLinea(color, 1, 299, 299, 299);
  dibujarLinea(color, 1, 1, 299, 1);
  dibujarLinea(color, 299, 1, 299, 299);
}
