let arr = [[11, 2, 4],[4, 5, 6],[10, 8 ,-12]]

function diagonalDifference(arr) {
    let lhs = 0
    let rhs = 0
    for (let i = 0; i < arr.length;i ++ ) {
        for (let j = 0; j < arr.length;j ++ ) {
            if(i == j) {
              lhs += arr[i][j]
            }
            if (i + j == arr.length - 1) {
                rhs += arr[i][j]
              }
        }}
    // Write your code here
    console.log(lhs)
}

diagonalDifference(arr)