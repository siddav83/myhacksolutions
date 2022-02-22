4
let array = [['aba','baba','aba','xzxb'],['aba','xzxb','ab']]
function matchingStrings(strings, queries) {
    let str = array[0]
    let qry = array[1]
    // Write your code here
    let box = []
 for (let i = 0;i < str.length;i++) {
     for (let j = 0;j < qry.length; i++) {
         if(str[i] == qry[j]) {
            box.push(i)
         }
     }
 }
 console.log(box)
}
matchingStrings(array)