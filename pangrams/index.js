
const sent = "the quick brown fox fox fox"

function pangrams(s) {
    
    const abc = "thequick".split()
   const uniq = sent.split("").filter((v,i,a)=> { 
       return a.indexOf(v)==i
    })
    const newUniq = uniq.filter(ele => ele !== " ")
    let counter = 0
    for ( let i = 0; i < newUniq.length; i++) {
        for ( let j = 0; j < newUniq.length; j++) {
            if(i === j) {
                counter ++
            }
        }
    }
    console.log(counter)
}
    pangrams(sent)

// usage example:
// const myArray = ['a', 1, 'a', 2, '1'];
// const unique = myArray.filter((v, i, a) => a.indexOf(v) === i);

// console.log(unique)