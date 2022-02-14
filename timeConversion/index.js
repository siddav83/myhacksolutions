const s = "12:45:54PM"

const timeConversion = (s) => {
  const hour =  parseInt(s.slice(0,2))
  const amPm = s.slice(8,10)
  if(hour === 12 & amPm == "PM") {
    return `12:${s.slice(3,8)}`
  }
  if(hour === 12 & amPm == "AM") {
    return `00:${s.slice(3,8)}`
  }
  if(hour < 12 & amPm == "PM") {
    return `${hour+12}:${s.slice(3,8)}`
  }
  if(amPm == "AM") {
    return s.slice(0,8)
  }
}

const timeConversion = (s) => {
  const hour =  parseInt(s.slice(0,2))
  const amPm = s.slice(8,10)
  if(hour === 12 & amPm == "PM") {
    console.log(`12:${s.slice(3,8)}`)
  }
  if(hour === 12 & amPm == "AM") {
    console.log(`00:${s.slice(3,8)}`)
  }
  if(hour < 12 & amPm == "PM") {
    console.log(`${hour+12}:${s.slice(3,8)}`)
  }
  if(amPm == "AM") {
    console.log(s.slice(0,8))
  }
}


timeConversion(s)
