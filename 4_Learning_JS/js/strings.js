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

//'JavaScript String type'
console.log(`'JavaScript String type'`, 'JavaScript String type')
let strObj = new String('JavaScript String Type')
console.log(`strObj:`, strObj)
console.log(`strObj.length:`, strObj.length)

console.log(`'Convertion to the primitive:'`, 'Convertion to the primitive:')
console.log(`strObj.valueOf():`, strObj.valueOf())
console.log(`strObj.toString():`, strObj.toString())
console.log(`strObj.toLocaleString():`, strObj.toLocaleString())

//'To access an individual character in a string'
console.log(`'To access an individual character in a string'`, 'To access an individual character in a string')
console.log(`strObj[0]:`, strObj[0])
console.log(`strObj.charAt(0):`, strObj.charAt(0))
console.log('When you call a method on a primitive string variable or a literal string, it is converted to an instance of the String type. For example:')
console.log(`'literal string'.toUpperCase():`, 'literal string'.toUpperCase())
//Concatenating strings
console.log('Concatenating strings:')
let firstName = 'John'
console.log(`firstName:`, firstName)
let fullName = firstName.concat(' ', 'Doe')
console.log(`fullName = firstName.concat(' ', 'Doe'):`, fullName)
//Substrings
console.log('Substrings')
console.log('The substr() method accepts two arguments. The first argument startIndex is the location at which the characters are being extracted, while the second argument length specifies the number of characters to extract.')
let str2sub = 'JavaScript String'
console.log(`str2sub:`, str2sub)
console.log(`str2sub.substr(0, 10): `, str2sub.substr(0, 10))
console.log(`str2sub.substr(11, 6): `, str2sub.substr(11, 6))
console.log('Sometimes,you want to extract a substring from a string using starting and ending indexes. In this case, you use the substring() method:')
console.log(`str2sub.substring(4, 10):`, str2sub.substring(4, 10))
