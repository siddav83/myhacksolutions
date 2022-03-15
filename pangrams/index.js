
const sent = "We promptly judged antique ivory buckles for the next prize"

function pangrams(s) {
    const abc = /\s*/
    const reduced = sent.replace(abc,"")
  
  console.log(reduced)
}
pangrams(sent)