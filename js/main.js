/* global $ */
const input = $('.input p')
const box = $('.box p')
let inputNumbers = ''
let operators = ['+', '-', '*', '/']
let num = parseInt(inputNumbers, 10)

function clearInput () {
  input.html('')
  inputNumbers = ''
}
function equal () {
  let num = parseInt(inputNumbers, 10)
  // console.log(typeof num)
  console.log(num)
}
function injectNumbersintoInput (e) {
  let number = e.target.innerHTML
  if (number !== '=') {
    inputNumbers += number // keep track of numbers being inputed
  } else {
    equal()
  }
  input.html(inputNumbers)
}

box.on('click', injectNumbersintoInput)
$('.clear').on('click', clearInput)
