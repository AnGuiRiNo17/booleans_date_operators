// && - AND o conjucion logica

const check = 4 > 3 && 10 > 5 //true - true --> true
const check1 = 4 > 3 && 10 < 5 // true - false --> false
const check2 = 4 < 3 && 10 < 5 //false - false --> false

// || - OR o disyuncion logica
 
const check3 = 4 > 3 || 10 > 5 // true
const check4 = 4 > 3 || 10 < 5 // true
const check5 = 4 < 3 || 10 < 5 // false

// ! - NOT el operador niega verdadero a falso y falso a verdadero.
 let check6 = 4 > 3
 let check7 = !(4 > 3) //false
 let isLigthOn = true
 let isLigthOff = !isLigthOn
 //let isMarried = !false


 //Increment operators - ++

 //Pre-incremento 
 let count = 0
 console.log(++count)
 console.log(count) //1

 //Post incremento
 let count1 = 0
 console.log(count++)
 console.log(count) //1


 //Decrement Operators
 //Predecremento --
 let count2 = 0
 console.log(--count)
 console.log(count) //-1

  //Pos decremento --
  let count3 = 0
  console.log(count--)
  console.log(count) //-1

  //Ternary operators
  let firstCheck = false,
  secondcheck = false,
  access = firstCheck
  ?"Acceso denegado bot"
  :secondcheck
  ?"Acceso denegado bot"
  :"Acceso permitido";
  console.log(access) // Acceso Permitido


  let isRaining = true
  isRaining
  ? console.log('You need a rain coat')
  :console.log('You dont need a rain coat ')

  isRaining = false
  ?console.log('You need a rain coat')
  :console.log('No need for a rain coat');