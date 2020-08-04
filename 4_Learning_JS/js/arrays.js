'use strict'
console.log(`****************************************************************************`)
console.log(`********************  STARTING arrays.js ***********************************`)
console.log(`****************************************************************************`)
//-> https://www.javascripttutorial.net/javascript-array/

console.log(`In JavaScript, an array is an ordered list of data. An array has the following special characteristics in comparison with the array of other programming languages such as Java and C/C++.
First, an array can hold data of the different types in each slot i.e., an array can hold elements with mixed of numbers, strings, objects, etc.
Second, the length of an array is dynamically sized and auto-growing.`)

console.log(`* Creating JavaScript arrays`.toUpperCase()) //TITLE
var scores = new Array()
scores = Array(10)
scores = new Array(9, 10, 8, 7, 6)

console.log(`* Basic operations on arrays`.toUpperCase()) //TITLE
console.log(`All arrays are instances of the Array type. Therefore, the typeof of an array variable returns object as shown in the following example:`)
console.log(`typeof ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']:`, typeof ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'])

console.log(`When you call the toString() and valueOf() methods of an array, you get a string represented as a comma-separated list of elements as shown in the following example:`)

console.log(`['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'].toString():`, ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'].toString())

console.log(`['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'].valueOf():`, ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'].valueOf())

console.log(`  ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'].join('|'):`, ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'].join('|'))

let numbers = [0, 1, 10, 3, 20, 2, 30]
console.log(`numbers`, numbers)

numbers.sort(function (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
})
console.log(`numbers.sort`, numbers)

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant']
console.log(`animals`, animals)
animals.sort()
console.log(`animals.sort()`, animals.sort())

let animals2 = ['cat', 'dog', 'elephant', 'bee', 'ant']
console.log(`animals2`, animals2)

console.log(
  `animals2.sort((a, b) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}):`,
  animals2.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
  })
)
