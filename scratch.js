// function titleCase(str) {
//
//   let arr = str.split(' ')
//
//   let arr2 = []
//
//   arr.forEach((e) => {
//
//     arr2.push(e.split(''))
//
//   })
//
//   arr2.forEach((e) => {
//
//     let upper = e.shift().toUpperCase().unshift()
//     console.log(upper);
//
//
//   })
//
//   // console.log(arr2);
//
//   return str;
//
// }
//
// titleCase("I'm a little tea pot");

// split into array of arrays

let str = "cat"
let arr = []
let upperCase = arr.push(str.split('').shift().toUpperCase())
console.log(arr);
