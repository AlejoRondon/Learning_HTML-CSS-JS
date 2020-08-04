console.log(`****************************************************************************`)
console.log(`********************  STARTING regex .js ***********************************`)
console.log(`****************************************************************************`)

console.log('A regular expression is a string that describes a specific pattern. Regular expressions are useful for searching and replacing strings.')
console.log('JavaScript provides the built-in RegExp type that allows you to work with regular expressions easily. Some string methods such as search(), match() and replace() also fully support regular expressions.')
console.log('* Creating a regular expression'.toUpperCase())
console.log('To create a regular expression in JavaScript, you enclose its pattern in forward-slash (/) characters')
console.log(`let re = /hi/ <-> let re = new RegExp('hi')`)

console.log(`* testing REGEX`.toUpperCase())
console.log(`The RegExp object has many useful methods. One of them is the test() method that allows you to test if a string contains a match of the pattern in the regular expression.`)
let re = /hi/
console.log(`re:`, '/hi/')
console.log(`re.test('hi John'):`, re.test('hi John'))

console.log(`* Using pattern flags`.toUpperCase())

console.log(`**` + `The ignore flag (i)`.charAt(0).toUpperCase() + `The ignore flag (i)`.slice(1))
let re2 = /hi/i
console.log(`re2:`, '/hi/i')
console.log(`re2.test('Hi John')`, re2.test('Hi John'))

console.log(`**` + `The global flag (g)`.charAt(0).toUpperCase() + `The global flag (g)`.slice(1)) //SUBTITLE
let re3 = /hi/
console.log(`re3:`, '/hi/')
console.log(`'hi John hi hi'.match(re3)->`, 'hi John hi hi'.match(re3))
console.log(`Note: Only one match was returned if we dont use g flag, then:`)
re3 = /hi/g
console.log(`re3:`, '/hi/g')
console.log(`'hi John hi hi'.match(re3)->`, 'hi John hi hi'.match(re3))

console.log(`**` + `Getting extra info(.exec(str))`.charAt(0).toUpperCase() + `Getting extra info(.exec(str))`.slice(1)) //SUBTITLE
let message4 = 'Hi, are you there? hi, HI...'
let re4 = /hi/gi
let matches = []
while ((match = re4.exec(message4)) != null) {
  matches.push(match)
}
console.log(`--please review console on inspector--`)
console.dir(matches)

console.log(`**` + `Using a replacement function`.charAt(0).toUpperCase() + `Using a replacement function`.slice(1)) //SUBTITLE
let str5 = 'I like to eat, eat, eat apples and bananas'
let re5 = /apples|bananas/gi

let newStr5 = str5.replace(re5, match => {
  console.log({ match }) //WOWWW!!
  return match.toUpperCase()
})
console.log(newStr5)

console.log(`**` + ` Using the match() method with the named capturing group`.charAt(0).toUpperCase() + ` Using the match() method with the named capturing group`.slice(1)) //SUBTITLE
console.log(`The following shows how to use the match() method with the named capture group. It captures the "yellow" into a group named "color"`)
let str6 = 'I like yellow color palette!'
console.log(`str6:`, str6)
let re6 = /(?<groupColor>yellow)/
let result6 = str6.match(re6)
console.dir(result6)
console.log(`--please review console on inspector--`)

console.log(`* Introduction to the character classes`.toUpperCase()) //TITLE
console.log(`**` + `digits`.charAt(0).toUpperCase() + `digits`.slice(1)) //SUBTITLE
let phone7 = '+1-(408)-555-0105'
console.log(`phone7`, phone7)
let re7 = /\d/g
console.log('let re7 = /d/g')
console.log(`phone7.match(re7).join('')`, phone7.match(re7).join(''))

console.log(`**` + `words`.charAt(0).toUpperCase() + `words`.slice(1)) //SUBTITLE
let str8 = 'O2 is oxygen'
console.log(`str8:`, str8)
let re8 = /\w\d/g
console.log(`let re8 = /\w\d/g`)
console.log(`str8.match(re8):`, str8.match(re8))

console.log(`**` + `Inverse Classes`.charAt(0).toUpperCase() + `Inverse Classes`.slice(1)) //SUBTITLE
console.log(`\D – matches any character except digits e.g., a letter.
\S – matches any character except whitespace e.g., a letter
\W – matches any character except word character e.g., non-Latin letter or space.`)

let phone9 = '+1-(408)-555-0105'
console.log(`phone9:`, phone9)
let re9 = /\D/g
console.log(`let re9 = /\D/g`)
console.log(`phone.replace(re8,''):`, phone9.replace(re9, ''))

console.log(`* Regular Expression: Anchors`.toUpperCase()) //TITLE
console.log(`Use the ^ anchor to match the beginning of the text.
Use the $ anchor to match the end of the text.
Use the m flag to enable the multiline mode that instructs the ^ and $ anchors to match the beginning and end of the text as well as the beginning and end of the line.`)
console.log(`/^\d\d:\d\d$/.test('12:05'):`, /^\d\d:\d\d$/.test('12:05'))
console.log(`/^\d\d:\d\d$/.test('123:05'):`, /^\d\d:\d\d$/.test('123:05'))
