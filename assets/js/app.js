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
// ------------------------------
// Dada una lista de números enteros no negativos y una suma objetivo,
// encuentre un par de números que sumen a la suma objetivo.

 function findPairForSum(array, number) {
    for(let i = 0; i <array.length; i++){
     for(let j = 0 ; j < array.length; j++){
       if(array[i]+ array[j] == number){
         return [array[i],array[j]];
       }
     }
   }
  }
  console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));
//   ------------------------------
// Dado un array de números,"filterOddElements" devuelve
//  un array que contiene sólo los números impares del array dado.

  function filterOddElements(arr) {

    var  impar = arr.filter(e => e % 2 === 1);
        
    return impar
    }

console.log(filterOddElements([1, 2, 3, 4, 5]));
// -------------------------------

// Dado un array, "findShortestWordAmongMixedElements"
//  devuelve la cadena más corta dentro del array dado.
// falta poner "" para numeros

function findShortestWordAmongMixedElements(arr) {
    // your code here
      let candena = []
    for(let i = 0; i < arr.length ; i++){
      if(typeof arr[i] == 'string'){
        candena.push(arr[i])
      }
    }
    if(arr.length === 0){
      return ""
    }
    
   let menor = candena.sort(function(a, b) {
       return  a.length - b.length
        
  })
  return menor[0]
   
  }
  console.log(findShortestWordAmongMixedElements([4, 'two', 2, 'three']))