/* global $ */
let input = $('.input p')
let number = $('.box p')

function clearInput () {
  input.html('')
}

function injectNumbersintoInput (e) {
  // input.html(number)
  // console.log(number.html())
  let num = e.target.innerHTML
  input.html(num)
  console.log(e.target.innerHTML)
}

$('.box').on('click', injectNumbersintoInput)
$('.clear').on('click', clearInput)
