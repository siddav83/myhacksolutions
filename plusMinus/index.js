//PROBLEM
//Given an array of integers, calculate the ratios of its elements that
// are positive, negative, and zero. Print the decimal value of each
//fraction on a new line with  places after the decimal.

const arr = [1,1,1,0,0,-1,-1]

function plusMinus(arr) {
  let pos =[]
  let neg = []
  let zero = []
  arr.forEach((num) => {
    if (num > 0) {
      pos.push(num)
    }
    if (num == 0) {
      zero.push(num)
    }
    if (num < 0) {
      neg.push(num)
    }
  })

  console.log((pos.length/arr.length).toFixed(6))
  console.log((neg.length/arr.length).toFixed(6))
  console.log((zero.length/arr.length).toFixed(6))
  // console.log(neg.lengh/arr.length)
  // console.log(zero.lengh/arr.length)

    // Write your code here

}
plusMinus(arr)
