// // alert("Hola mundo!") //Alerta
// console.log("Hello world")
// console.log("Pollas")

// var nombre = "Héctor"; //Con var definimos las variables
// var altura = 1.9;
// var nombres = ["Héctor", "Julián", "Pedro"];
// let apellido = "Alberca"

// document.write("<h1> Listado de nombres </h1>");
// // for (var i = 0; i < nombres.length; i++) {
// //     document.write(nombres[i]+" "+"<br/>")

// // }
// nombres.forEach((nombre) => {
//   document.write(nombre + "<br/>");
// });

// // document.write(nombre+" "+altura) //Mostramos por pantalla

// if (altura >= 1.8) {
//   datos.innerHTML += `<h3> Eres alto</h3>`;
// } else {
//   datos.innerHTML += `<h3> Eres bajito</h3>`;
// }

// for (var i = 0; i < 10; i++) {
//   datos.innerHTML += `Hola` + i + ` `;
// }

// function MuestraMiNombre(nombre) {
//   var misDatos = `<h1>Soy datos</h1>
//                     <h2>Hola soy ${nombre}</h2>`;

//   return misDatos;
// }

// function imprimir() {
//   var datos = document.getElementById("datos");
//   datos.innerHTML = MuestraMiNombre("Héctor");
// }

// imprimir();

// //objetos

// let persona = {
//     nombre : "David",
//     edad : 23
// };

// persona.comidaFav = "Hamborguesa"

// let persona2 = {
//     nombre : "Héctor",
//     edad : 25
// };

// console.log(persona)
// let arrayObjetos = [persona, persona2]

console.log("Script correcto");

//Aquí empieza karmaland x d?

const txtOp1 = document.getElementById("op1");
const txtOperador = document.getElementById("oper");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("btnCalc");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", calcular);

function calcular() {
  const operador = txtOperador.value;
  const op1 = parseFloat(txtOp1.value);
  const op2 = parseFloat(txtOp2.value);

  if (
    (operador == "+" ||
      operador == "-" ||
      operador == "*" ||
      operador == "/") &&
    !isNaN(op1) &&
    !isNaN(op2)
  ) {
    let result;
    switch (operador) {
      case "+":
        result = op1 + op2;
        break;
      case "-":
        result = op1 - op2;
        break;
      case "*":
        result = op1 * op2;
        break;
      case "/":
        result = op1 / op2;
        break;
    }
    pResultado.innerText = result.toPrecision(2);
  } else {
    pResultado.innerText = "Calculo imposible";
  }
}

function main() {
  calcular();
}

// main()
