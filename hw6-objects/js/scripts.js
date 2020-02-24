const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
//--------function #1----------------------
const getSubjects = function(student){
    const tempSubjects = Object.keys(student.subjects);
    const studentsSubjects = tempSubjects.map(function(val){
      const subjectName = val.split('_').join(' ');
      return subjectName.slice(0,1).toUpperCase()+subjectName.slice(1).toLowerCase();
    });
    return studentsSubjects;
};
console.log('Function #1');
console.log(getSubjects(students[0]));
console.log('------------------------------------------------------------------------------');
//--------function #2-----------------------
const getAverageMark = function(student){
  const {subjects} = student;
  const marks = Object.values(subjects);
  const marksArr = [].concat(...marks);
  return Number(((marksArr.reduce(function(sum, val){return val+sum;}, 0)) / marksArr.length).toFixed(2));
};
console.log('Function #2')
console.log('Average mark ->'+getAverageMark(students[0]));
console.log('------------------------------------------------------------------------------');
//--------function #3-----------------------
const getStudentInfo = function(student){
  const{name, course} = student;
  const mark = getAverageMark(student);
  return {name, course, AverageMark : mark};
};
console.log('Function #3');
console.log(getStudentInfo(students[0]));
console.log('------------------------------------------------------------------------------');
//--------function #4-----------------------
const getStudentsNames = function(students){
  return students.map(function(student){
    return student.name;
  }).sort(); 
};
console.log('Function #4');
console.log(getStudentsNames(students));
console.log('------------------------------------------------------------------------------');
//--------function #5-----------------------
const getBestStudent = function(students){
  const bestStudent = students.reduce(function(previousValue, currentValue){
   return getAverageMark(previousValue) > getAverageMark(currentValue) ? previousValue : currentValue;
  });
  return bestStudent.name;
};

console.log('Function #5');
console.log('Best student -> '+getBestStudent(students));
console.log('------------------------------------------------------------------------------');
//--------function #6-----------------------
const calculateWordLetters = function(string){
  const countLetters = {};
  for(let i = 0; i < string.length; i++){
    string[i] in countLetters ? countLetters[string[i]] +=1 : countLetters[string[i]] = 1;
  }
  return countLetters;
};
console.log('Function #6');
console.log(calculateWordLetters('тест'))
