const arr = [1,2,1,2,1,3,2]

function sockMerchant(n, ar) {
    const obj = {}
    arr.forEach((ele) => {
        Object.entries(obj)== "" ? obj[ele] = ele: obj[ele] +=ele
        // console.log(obj)
        })
    console.log(obj)}

sockMerchant(arr)