/* global $ */
const input = $('.input p')
let functions = ''
let inputNumbersArr = []
let inputNumbers = ''

function clearInput () {
  inputNumbers = ''
  inputNumbersArr = []
  input.html('')
}
$('.decimal p').click((e) => {
  inputNumbers = inputNumbers + '.'
  input.html(inputNumbers)
})

function calculateResult () {
  let result = inputNumbersArr.reduce((accu, currentValue, index) => {
    let parsednum = parseFloat(inputNumbersArr[index + 1])
    accu = parseFloat(accu)
    if (currentValue === '+') {
      accu += parsednum
    } else if (currentValue === '-') {
      accu -= parsednum
    } else if (currentValue === '*') {
      accu *= parsednum
    } else if (currentValue === '/') {
      accu /= parsednum
    }
    return accu
  }, inputNumbersArr[0])
  return result
}

$('.numbers p').click((e) => {
  inputNumbers += e.target.innerHTML
  input.html(inputNumbers)
})

$('.function p').click((e) => {
  functions = e.target.innerHTML
  inputNumbersArr.push(inputNumbers, functions)
  input.html(inputNumbersArr)
  inputNumbers = ''
})
$('.equals').click(() => {
  inputNumbersArr.push(inputNumbers)
  let result = calculateResult()
  input.html(result)
  inputNumbersArr = []
  inputNumbers = result
})

$('.clear').on('click', clearInput)
