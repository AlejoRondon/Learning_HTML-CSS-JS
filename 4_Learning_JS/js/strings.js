console.log(`****************************************************************************`)
console.log(`******************** STARTING strings.js ***********************************`)
console.log(`****************************************************************************`)
//-> https://www.javascripttutorial.net/javascript-string/

//t JavaScript strings are primitive values. JavaScript strings are also immutable. It means that if you process a string, you will always get a new string. The original string doesn’t change.

//'Literal string definition'
console.log(`'Literal string definition'`, 'Literal string definition')
let name = 'John'
let greating = `Hello ${name}`
console.log(greating)

let str = "I'm a string!"
let length = str.length
console.log(`str(scaping chars): `, str, ` length:`, length)

name = 'John'
str = 'Hello ' + name
console.log(`Concatening strings:`, str)
