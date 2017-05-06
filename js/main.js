/* global $ */
let input = $('.input p')
let box = $('.box p')
let inputNumbers = ''

function clearInput () {
  input.html('')
  inputNumbers = ''
}

function injectNumbersintoInput (e) {
  let number = e.target.innerHTML
  inputNumbers += number // keep track of numbers being inputed
  input.html(inputNumbers)
}

box.on('click', injectNumbersintoInput)
$('.clear').on('click', clearInput)
