/* exported getStudentNames */
function getStudentNames(students) {
  const studentArray = [];
  for (const index in students) {
    studentArray.push(students[index].name);
  }
  return studentArray;
}
