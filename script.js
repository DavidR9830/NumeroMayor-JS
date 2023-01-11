var lista, test, max, resto, maxResto;

// Describe this function...
function maximoLista(lista) {
  if (lista.length == 1) {
    max = lista[0];
  } else {
    resto = lista.slice(1, lista.length);
    maxResto = maximoLista(resto);
    if (lista[0] > maxResto) {
      max = lista[0];
    } else {
      max = maxResto;
    }
  }
  return max;
}


test = [3, 8, 4, 9, 2];
window.alert('El máximo de la lista es: ' + String(maximoLista(test)));