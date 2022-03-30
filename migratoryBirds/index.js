const arr = [1, 4, 4, 4, 5, 3]

function migratoryBirds(arr) {
   const obj = {}
   const counter = 0
   arr.forEach(ele => {
       obj.hasOwnProperty(ele) ? obj[ele] +=1: obj[ele] = 1
   })
   console.log(obj)
//    let values = Object.values(obj)
//    let max = Math.max(...values)
//    for ( k in obj) {
//        if(Object.entries(k) === max) {
//            console.log(obj[k])
       
};

migratoryBirds(arr)