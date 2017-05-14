/* global $ */
const input = $('.input p')
let functions = ''
let inputNumbersArr = []
let inputNumbers = ''
let calcInputArr = []

function clearInput () {
  inputNumbersArr = []
  input.html('')
}
function calculateResult () {
  let result = calcInputArr.reduce((accu, currentValue, index, arr) => {
    let parsednum = parseFloat(arr[index + 1])
    accu = parseFloat(accu)
    console.log(currentValue)
    if (typeof currentValue === 'string') {
      console.log(currentValue)
      if (currentValue === '+') {
        accu += parsednum
      } else if (currentValue === '-') {
        accu -= parsednum
      } else if (currentValue === '*') {
        accu *= parsednum
      } else if (currentValue === '/') {
        accu /= parsednum
      }
    }
    console.log(currentValue)
    return accu
  }, calcInputArr[0])
  return result
}

$('.numbers p').click((e) => {
  inputNumbers += e.target.innerHTML
  input.html(inputNumbers)
  enableFuntions()
})

$('.function p').click((e) => {
  functions = e.target.innerHTML
  inputNumbersArr.push(inputNumbers, functions)
  console.log(inputNumbersArr)
  input.html(inputNumbersArr)
  inputNumbers = ''
  disableFuntions()
})
$('.equals').click(() => {
  inputNumbersArr.push(inputNumbers)
  console.log(inputNumbersArr)
  let result = calculateResult()
  input.html(result)
  disableFuntions()
  console.log(result)
  inputNumbersArr = []
  inputNumbers = result
  enableFuntions()
})

function disableFuntions () {
  $('.function').attr('disabled', true)
  // console.log('functions are disabled')
}
function enableFuntions () {
  $('.function').attr('disabled', false)
  // console.log('functions are enabled')
}
disableFuntions()
$('.clear').on('click', clearInput)
