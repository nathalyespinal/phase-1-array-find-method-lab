const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  ]

 
  
  

// Write a function called `superbowlWin()` in `index.js`:

// * The function should receive 1 argument, an `Array` of JavaScript `Object`s
// * Each object has two properties: `year` and `result`
// * It should use `find()` to test each `Object` to see if the `result` is `"W"` —
//   a win!
// * It should return the `year` when the win occurred (if it occurred at all!)
// // * If no win is found, it should return, sadly, `undefined`



// function superbowlWin(array){
//   let winnerYear = record.find(array => array.result === 'W' ? record.year : undefined)
  //   return winnerYear
// }



// let winnerYear = record.find(array => array.result === 'W' ? 'year' : undefined)
// console.log(winnerYear.year)



// function superbowlWin(array){
//   array.forEach(element => {
//   });
//   return (element.result === 'W' ? 'year' : undefined);
// }
// let winnerYear = array.find(superbowlWin)


function superbowlWin(array){
  // let winnerYear;
  // let winningYear = array.find(object => {
  //   return object.result === 'W'
  // })
  let winningYear = array.find(isResultWin)
  //  console.log(winningYear)
  // check to see if there was a winning year, if there was return the year if not return undefined
  return winningYear ? winningYear.year : undefined
}


function isResultWin(object){
  return object.result === 'W'
}

// let winnerYearResults = record.find(superbowlWin)
// console.log(winnerYearResults)


console.log(superbowlWin(record))







// if ( array.result === 'W'){
//   return "year"
//  } else {
//   return undefined
// }







