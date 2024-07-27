const { readFileSync } = require('fs');

const countStudents = (path) => {
  try {
    data = readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  arr_data = data.split('\n');
  arr_data.shift();
  arr_data.pop();
  stu_num = arr_data.length;
  hold = {};
  for (const student of arr_data) {
    student_data = student.split(',');
    key = student_data[student_data.length - 1];
    if (hold[key]) {
      hold[key].push(student_data[0]);
    } else {
      hold[key] = [student_data[0]];
    }
  }
  console.log(`there are ${stu_num} students`);
  for (const key in hold) {
    if (hold.hasOwnProperty.call(hold, key)) {
      const element = hold[key];
      let major = key;
      let number_in_major = element.length;
      let all_students = element.join(', ');
      console.log(`number os students in ${major} is ${number_in_major}`);
      console.log(`list of students : ${all_students}`);
    }
  }
};

countStudents('./database.csv');
