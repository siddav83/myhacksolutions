const arr = [1,2,3,4,5]

function miniMax(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const min = sorted.slice(0,3).reduce((i,l) => i + l);
  const max = sorted.slice(1,4).reduce((i,l) => i + l);
  console.log(min,max)
}

miniMax(arr)

// console.log(sorted)
