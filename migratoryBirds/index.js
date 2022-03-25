const arr = [1, 1, 2, 2, 3]

function migratoryBirds(arr) {
   const obj = {}
   const counter = 0
   arr.forEach(ele => {
       obj.hasOwnProperty(ele) ? obj[ele] +=1: obj[ele] = 1
   });
   console.log(obj)
   let values = Object.keys(obj)
   let max = Math.max(...values)
   console.log(max)

}

migratoryBirds(arr)