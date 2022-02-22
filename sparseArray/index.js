4
let array = [['aba','baba','aba','xzxb'],['aba','xzxb','ab']]
function matchingStrings(strings, queries) {
    let str = array[0]
    let qry = array[1]
    console.log(str.length,qry.length)
    // Write your code here
    let box = [...qry]
 for (let i = 0;i < str.length;i++) {
     for (let j = 0;j < qry.length; j++) {
         if(str[i] == qry[j]) {
            box[j]+=1
         }
     }
 }
console.log(box)
}
matchingStrings(array)