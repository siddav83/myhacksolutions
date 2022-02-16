ar = [6,3,[1,3,2,6,1,2]]

function divisibleSumPairs(n, k, ar) {
  let count = 0
    for ( let i = 0; i < ar.length;i ++) {
      for (let j = 0;j < ar.length; j ++) {
        if(i > j && (ar[i]+ ar[j]) % k === 0) {
          count +=1
        }
      }
    }
    return count
  }
divisibleSumPairs(ar)

1
