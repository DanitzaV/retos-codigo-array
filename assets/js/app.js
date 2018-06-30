// retos de codigo : arrays
// Escriba una función 'computeAverageLengthOfWords' 
// que recibe dos strings y devuelve el promedio de la 
// longitud de ambos strings.

function computeAverageLengthOfWords(word1, word2) {
    return (word1.length + word2.length) / 2
    // longuitud de ambos string y 
    // luego al dividir en 2 sacamos el promedio
}
console.log(computeAverageLengthOfWords("A", "KAMNJHS"));

// ------------------------------------------------------
//Escriba una función llamada getNthElement.
// Dado un arreglo y un entero, 
// getNthElement devuelve el valor según el entero dado, 
// dentro del arreglo dado.

function getNthElement(array, n){
    // i es n : el entero
    // recorro el array y n va ser como el indice
    // para que array[i] sea 2 
    for (let i = n; i < array.length; i++) {
        return array[i];
        
    }
}
console.log(getNthElement([1, 2, 3, 4, 5, 6, 100, 7, 9], 1))

// ---------------------------------------------
// Escribe una función llamada convertDoubleSpaceToSingle.

// Dada una cadena, convertDoubleSpaceToSingle 
// devuelve la cadena pasada en cadena con todos los espacios
//  dobles convertidos a espacios simples.

function convertDoubleSpaceToSingle(str) {
    // quito los espacios dobles
    // luego agrego un espacio
    return str.split("  ").join(" ");
}
console.log(convertDoubleSpaceToSingle("MESSI  IS  THE  GREATEST  PLAYER  EVER"))

// ----------------------------------------------------
// Escribe una función llamada areValidCredentials.

// Dando un nombre y una contraseña,
//  areValidCredentials, devuelve true si el nombre es 
//  superior a 3 caracteres, Y, la contraseña tiene al
//   menos 8 caracteres de longitud. De lo contrario, 
//   devuelve false.
function areValidCredentials(name, password) {
    if(name.length > 3 && password.length > 8 ){
      return true;
    }else {
       return false;
    }
  }
 console.log(areValidCredentials('Ritu', 'mylongpassword')) 