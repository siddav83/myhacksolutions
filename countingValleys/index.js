
// const steps = ["U","U","D","D","D","D","U","U"]
      const steps ="DDDDUDUUUDUUUU"

      function countingValleys(steps, path) {
        let sealevel = 0, valley = 0, belowSeaLevel = false;
        for ( const step of path) {
        step == "U" ? sealevel++: sealevel--;
        if(sealevel < 0 && !belowSeaLevel == true) {
          valley++
          belowSeaLevel = true
        } else if(sealevel >= 0 && belowSeaLevel == true) {
          belowSeaLevel = false
        }
        }
        return valley
      }