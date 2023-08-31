

//*  with promises

const sumarUno = (numero) => {
  var promesa = new Promise((resolve, reject) => {
    console.log(numero);
    if (numero >= 7) {
      reject('El numero es alto')
    }
    setTimeout(() => {
      resolve(numero + 1);
    }, 800);
  });

  return promesa;
};

sumarUno(4)
  .then(sumarUno)
  .then(sumarUno)
  .then(sumarUno)
  .then((nuevoNUmero) => {
    console.log(nuevoNUmero);
  })
  .catch((error) => {
    console.log('error en promesa');
    console.log(error);
  })
