// function gradingStudents(grades) {
//  const grades = map((grade) => {

//  })
// }
// gradingStudents(37)

grades = [45,65,36,78,98]
function gradingStudents(grades) {
    const graded = grades.map((grade) => {
    if(grade<38) {
        return grade
        } else {
            if(grade%5 >= 3) {
            return Math.ceil(grade/5)*5
        } else if(grade%5 < 3) {
   
         return grade/5*5
}}})
  return graded
}

gradingStudents(grades)
// console.log(grd%5 >=grd/2)