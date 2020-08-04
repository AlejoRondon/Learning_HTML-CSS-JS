'use strict'
console.log(`****************************************************************************`)
console.log(`*******************  STARTING functions.js *********************************`)
console.log(`****************************************************************************`)
//-> https://www.javascripttutorial.net/javascript-function/
console.log(`* The arguments object`.toUpperCase()) //TITLE

function add() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
// console.log(add(1, 2)) // 3
console.log(`add(1, 2)`, add(1, 2))
// console.log(add(1, 2, 3, 4, 5)) // 15
console.log(`add(1, 2, 3, 4, 5)`, add(1, 2, 3, 4, 5))

let tiger = {
  name: 'tiger',
  specie: 'tiger',
  eat: function (food) {
    console.log(`I'm a ` + this.name + ` eating ${food.name}`)
  },
  jump: function () {
    console.log(`I'm a ` + this.name + ` jumping....`)
  },
}

let fish = {
  name: 'fish',
  eat: function (food) {
    console.log(`I'm a ` + this.name + ` eating ${food.name}`)
  },
  swim: function () {
    console.log(`I'm a ` + this.name + ` glu glu glu....`)
  },
}

tiger.eat(fish)
fish.swim()

let person = {
  name: 'alejo',
  burp: function () {
    console.log(`I'm a ` + this.name + ` buuuuuurrppppping!`)
  },
}

person.burp()

//Borrowing functions...
fish.swim.apply(person)
tiger.jump.call(person, fish)
let personEatFunction = tiger.eat.bind(person, fish)
personEatFunction()

person.eatFish = tiger.eat.bind(person, fish)
person.eatFish()
