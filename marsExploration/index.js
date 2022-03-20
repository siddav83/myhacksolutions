const s = "SOSOOSOSOSOSOSSOSOSOSOSOSOS"

function marsExploration(s) {
    // const s1 = s.match(/.{1,3}/g)
    const sos = "SOS"
    let counter = 0

    for (let i = 0; i < s.length;i+=3) {
        if(s.charAt(i) !== 'S') {
            counter++
        }
        if(s.charAt(i + 1) !== 'O') {
            counter++
        }
        if(s.charAt(i + 2) !== 'O') {
            counter++
        }
    } 
        return counter
}

marsExploration(s)