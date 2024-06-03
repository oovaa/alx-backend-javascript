export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) return [];
  return listOfStudents.reduce((acc, cur) => {
    if (cur.id) return acc + cur.id;
    else return acc;
  }, 0);
}
