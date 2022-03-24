const arr = [1,2,1,2,1,3,2]

function sockMerchant(n, ar) {
    const obj = {}
    counter = 0
    arr.forEach((ele) => {
        obj.hasOwnProperty(ele) ? obj[ele] += 1: obj[ele] = 1
        if(obj[ele] % 2 == 0) {
            counter ++
        }})
    return counter
}

sockMerchant(arr)