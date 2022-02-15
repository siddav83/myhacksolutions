let input = "S;M;plasticCup()"

function processData(input) {
//   let split = input.split(";")
//   if(split[1] =="M") {
//     sliced = input.slice(4,-2).split("")

//     //Enter your code here
//   }
//   // const arr = sliced.forEach((ele) => {
//   //   return ele == ele.toUpperCase() ? ele += 1: ele
//   //   })
//   // //   if(ele === ele.upperLowerCase) {
//   // //     return ele + ""
//   // //   }
//   // // })
// console.log(sliced)
}
// processData(input)


// array = ["test","test2","test3"]

// array = array.toString();

// array = array.replace(/,/g, ", ");

// console.log(array);
const found = input.split('').filter(ele => {
  return ele === ele.toUpperCase()})
console.log(found)
