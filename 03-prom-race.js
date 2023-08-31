function sumarLento(numero) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(numero + 1);
    }, 800);
  });
}

const sumaRapida = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(numero + 1), 300);
  });
};

let promesasLista = [sumaRapida(3), sumarLento(7)];

Promise.race(promesasLista)
  .then((responses) => {
    console.log(responses);
  })
  .catch(console.log);

// si la promesa que se resuelve primero retorna error, entonces
// se detiene en ese la ejecución del programa.

// si la promesa que se resuelve al ultimo tira error, no se detiene
// el flujo del programa, porque la primera ya habria resuelto, asi que no afecta
// la ejecución del programa.
