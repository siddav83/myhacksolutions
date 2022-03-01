
// const steps = ["U","U","D","D","D","D","U","U"]
      const steps ="UUUUUUUDDDDUDUDUDUDUDUD"

function countingValleys(steps, path) {
 
        let stepr = steps.split("");
        let valleyCount = 0;
        let currentSeaLevel = 0;
        let valleyStatus = false;
        stepr.forEach(step => {
          step === 'U' ? currentSeaLevel++ : currentSeaLevel--;
            if(currentSeaLevel < 0 && !valleyStatus) {
              valleyCount++;
              valleyStatus = true
            } else if(currentLevel >= 0 && valleyStatus) {
              valleyStatus= false
            }
          })

// countingValleys(steps)

console.log(steps.split(""))