console.log(`****************************************************************************`)
console.log(`***************** STARTING fundamentals.js *********************************`)
console.log(`****************************************************************************`)

//? 'Global and local variables'
console.log("'Global and local variables'")

// global variable
var message = 'Hello'
function say() {
  // local variable
  var message = 'Hi'
  console.log('say -> message', message)
}
say() // Hi
console.log('message', message)

//? 'Accessing global variable inside the function'
console.log("'Accessing global variable inside the function'")

function sayTwo() {
  // local variable
  message = 'Hi'
  console.log(`sayTwo -> message`, message)
}
sayTwo() // Hi
console.log('message', message) //Hi
