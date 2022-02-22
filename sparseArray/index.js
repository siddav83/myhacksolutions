4
let strings = ['aba','baba','aba','xzxb']
let queries = ['aba','xzxb','ab']
function matchingStrings(strings, queries) {
  return queries.map(qry => strings.filter(str => str === qry).length))
}
matchingStrings(strings, queries)

// function matchingStrings(strings, queries) {
// console.log(queries.map(x=>strings.filter(y=>y===x)))
// }
// matchingStrings(strings, queries)