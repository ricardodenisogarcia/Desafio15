const lista = [];
function completarArray() {
  for (i = 0; i < 20; i++) {
    var numeroR = Math.random() * 1000;
    var numeroE = Math.floor(numeroR);
    lista.push({
      numero: numeroE,
      palabra: "Código",
    });
  }
  console.table(lista);
  return lista;
}

function devolverSoloPar(objeto) {
  var nuevoArray = [];

  for (var i = 0; i < objeto.length; i++) {
    var numeroADividir = objeto[i].numero;
    if (numeroADividir % 2 == 0) {
      nuevoArray.push(objeto[i]);
    }
  }
  console.log("Los pares de ese array son:");
  console.table(nuevoArray);
  return nuevoArray;
}

function main() {
  completarArray();
  devolverSoloPar(lista);
}

main();
