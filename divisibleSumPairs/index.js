ar = [1,2,3,4,5,6]

function divisibleSumPairs(ar) {
  let empty = []
  let div = 3
    for ( let i = 0; i < ar.length;i ++) {
      for (let j = 0;j < ar.length; j ++) {
        if(ar[i]+ar[j]===6) {
          console.log(ar[i])
          console.log(ar[j])
        }
      }
    }
    // console.log(empty)
}
divisibleSumPairs(ar)
