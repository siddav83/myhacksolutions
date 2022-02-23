const a = [1,1]
const b = [1,2,3,4,3,2,1]

function lonelyinteger(a) {
    const unique = a.filter((uniq) => {
        return a.indexOf(uniq) ===a.lastIndexOf(uniq)})
        unique[0]
    // Write your code here
}

lonelyinteger(a)
