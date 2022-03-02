
const sentence = "the fbt gcat ate grass";
const alpha = 'ate he ';
const alp = alpha.split("");

const split = sentence.split("")

function pangrams(s) {
    const alp = alpha.split("");
    split.forEach( let => {
        alp.forEach(i => {
        if(let.includes(i)) {
            console.log(let,i)
        }})
    })}
    pangrams(sentence)
