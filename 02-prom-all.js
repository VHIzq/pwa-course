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

const identify = () => {
  return true;
};

let promesasLista = [sumaRapida(3), sumarLento(7), identify()];

Promise.all(promesasLista)
  .then((responses) => {
    console.log(responses);
  })
  .catch(console.log);
