const addOne = (numero, callback) => {
  setTimeout(() => {
    //return numero + 1;
    callback(numero + 1);
  }, 800);
};

addOne(5, (newValue) => {
  addOne(newValue, (newSecondValue) => {
    addOne(newSecondValue, (newThirdValue) => {
      console.log(newThirdValue);
    });
  });
});

//*  with promises

const sumarUno = (numero) => {
  var promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numero + 1);
    }, 800);
  });

  return promesa;
};

sumarUno(19)
  .then((nuevoNumero) => {
    return sumarUno(nuevoNumero);
  })
  .then((nuevoNumero) => {
    return sumarUno(nuevoNumero);
  })
  .then((nuevoNumero) => {
    console.log(nuevoNumero);
  });
