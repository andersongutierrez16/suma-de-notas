var notas = [];
var i;

function promedio () {


for (i = 0; i < 2; i++) {
    notas.push(Number(prompt("Ingresa tu nota:" + (i + 1),)));
}

var suma = notas.reduce(function(total, cantidad) {
    return total + cantidad
});


var promedio = (suma / (notas.length)).toFixed(1);


var estado;
if (promedio >= 4.0) {
    estado = ("Felicitaciones, pasaste");
} else {
    estado = ("Ups, no pasaste hijo de puta");
}

document.write("Tus notas son: " + notas + "<br>" + "Tu Promedio es: " + promedio + "<br>" + estado + "<br>");
alert(estado);

}
