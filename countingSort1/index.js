let arr = [1,1,3,1,1]
//if v == arr[i], then newArr[i]+=1

function countingSort(arr) {
    if(!arr.length < 100) {
    const newArr = []
    for (let i = 0; i<100;i ++) {
        newArr[i]=0
    } 
    newArr.map((v,i) => {
         arr.map(ele => {
             if(ele === i)
            newArr[ele]+=1
         }) 
        })
    
        console.log(newArr)
    }

}
countingSort(arr)