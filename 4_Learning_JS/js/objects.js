'use strict'
console.log(`****************************************************************************`)
console.log(`*******************  STARTING objects  .js *********************************`)
console.log(`****************************************************************************`)
//-> https://www.javascripttutorial.net/javascript-objects/
console.clear()
console.time('trying time')
console.group('Object properties')
console.log(`* Accessing and iterating`.toUpperCase()) //TITLE

let website = {
  title: 'JavaScript Tutorial',
  url: 'https://www.javascripttutorial.net',
  tags: ['es6', 'javascript', 'node.js'],
}

for (const key in website) {
  console.log(website[key])
}
console.table(website)
console.groupCollapsed('console count')
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.groupEnd()
console.groupEnd()
// console.trace()
// console.dir(website)
// console.info('hola')

console.group('methods')
console.log(`* Methods`.toUpperCase()) //TITLE
let person = {
  firstName: 'John',
  lastName: 'Doe',
}

person.greet = function () {
  console.log('Hello, World!')
}
person.greet()
console.groupEnd()
console.timeEnd('trying time')
