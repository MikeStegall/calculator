/* global $ */
const input = $('.input p')
const box = $('.box p')
let inputNumbers = ''
let operators = ['+', '-', '*', '/']
let createNum
let num = parseInt(inputNumbers, 10)

function clearInput () {
  input.html('')
  inputNumbers = ''
}
function equal () {
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
