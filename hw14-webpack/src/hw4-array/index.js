export const students = ["Тарас", "Ірина", "Ігор", "Тетяна", "Назар", "Олена"];
export function createPairs (students){
  let pairs = [];
  for(let i = 1; i < students.length; i = i + 2){
    pairs.push([students[i-1], students[i]]);
  }
  return pairs;
};
