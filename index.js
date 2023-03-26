// code your solution here

// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

//   function win (collection) {
//     for (const year of collection) {
//         if (year.result === 'W') {
//             console.log(year.year)
//         }
//     }
//   }

//   win(record)


// create a variable and use .find() by creating an arrow function with a condition 'result'
// that gets passed to the function to test the condition
// returns a ternary expression
function superbowlWin (record) {
    const result = record.find(record => record.result === 'W')
    return !!result ? result.year : undefined;
}