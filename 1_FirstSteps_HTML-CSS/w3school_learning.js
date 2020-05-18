let color = 'blue'
function myFunction() {
  var x = document.getElementsByClassName('cities')
  for (var i = 0; i < x.length; i++) {
    x[i].style = `background-color:${color}`
  }
  color = color === 'blue' ? 'tomato' : 'blue'
}
let counter = 0
function countFunction() {
  document.getElementById('myHeader').innerHTML = `Have a nice day #${counter}!`
  counter++
}
function changeContent() {
  document.getElementById('demo2').innerHTML = 'Hello JavaScript!'
}
function changeCss() {
  document.getElementById('demo2').style.fontSize = '25px'
  document.getElementById('demo2').style.color = 'red'
  document.getElementById('demo2').style.backgroundColor = 'yellow'
}
function light(sw) {
  var pic
  if (sw == 0) {
    pic =
      'https://2d6qxj3uqdaw38d6lk27l0ao-wpengine.netdna-ssl.com/wp-content/uploads/2013/02/iconmonstr-light-bulb-icon-470x470.png'
  } else {
    pic = 'https://www.volocity.org/wp-content/uploads/2017/01/light-bulb-icon.png'
  }
  document.getElementById('myImage').src = pic
}

function drawLine() {
  var c = document.getElementById('myCanvas')
  var ctx = c.getContext('2d')
  ctx.moveTo(0, 0)
  ctx.lineTo(200, 100)
  ctx.stroke()
}

function drawCircle() {
  var c = document.getElementById('myCanvas')
  var ctx = c.getContext('2d')
  ctx.beginPath()
  ctx.arc(95, 50, 40, 0, 2 * Math.PI)
  ctx.stroke()
}

function drawText() {
  var c = document.getElementById('myCanvas')
  var ctx = c.getContext('2d')
  ctx.font = '30px Arial'
  ctx.fillText('Hello World', 10, 50)
}
