const scores =[12,24,10,24]

function breakingRecords(scores) {
  let min = scores[0]
  let max = scores[0]
  let low = 0
  let high = 0
  let newArr = []
scores.map((score)=> {
  if(score > max) {
    high +=1
    max = score
  }
  if(score < min) {
    low +=1
    min = score
  }
  })
newArr[0] = high
newArr[1] = low

console.log(newArr)
// console.log(high)
// console.log(low)
// console.log("min",min)
// console.log("max",max)
}
breakingRecords(scores)
    // Write your code here


