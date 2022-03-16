
const sent = "We promptly judged antique ivory buckles for the next prize"

const s ="We promptly judged antique ivory buckles for the next prize"

function pangrams(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const regex = /\s/g;
    const reducedSentence = s.replace(regex,'').toLowerCase()
    // const uniq = reducedSentence.split('').filter((item, pos,arr)=> {
    //     return arr.indexOf(item) == pos;
// })
    const uniq = [...new Set(reducedSentence.split(''))]
    const sort =uniq.sort().join("")
  

    if(alphabet == sort) {
         return "pangrams"
    } else {
         return "not pangrams"
    }
}

pangrams(s)