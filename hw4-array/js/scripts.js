const students = ["Тарас", "Ірина", "Ігор", "Тетяна", "Назар", "Олена"];
const themes = ["Диференціальні рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const getRandomNumber = function(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
//------------------------------------------
const createPairs = function(students){
  let pairs = [];
  for(let i = 1; i < students.length; i = i + 2){
    pairs.push([students[i-1], students[i]]);
  }
  return pairs;
};
const pairsList = createPairs(students);
console.log(pairsList);

const addThemes = function(pairsList, themes){
  let themesList = [];
  for(let i = 0; i < pairsList.length; i++){
    themesList.push([pairsList[i].join(' и '), themes[i]]);
  }
  return themesList;
};
const studentsWithThemes = addThemes(pairsList, themes);
console.log(studentsWithThemes);

const setMarks = function(students, marks){
  let marksList = [];
  for(let i = 0; i < students.length; i++){
    marksList.push([students[i], marks[i]]);
  }
  return marksList;
};
const studentsWithMarks = setMarks(students, marks);
console.log(studentsWithMarks);

const setMarrksForProject = function(studentsWithThemes){
  let projectMark = [];
  for(let i = 0; i < studentsWithThemes.length; i++){
    let rundomMark = getRandomNumber(1, 5);
    let temp = studentsWithThemes[i];
    temp.push(rundomMark);
    projectMark.push(temp);
  }
  return projectMark;
}
const projectWithMarks = setMarrksForProject(studentsWithThemes);
console.log(projectWithMarks);

