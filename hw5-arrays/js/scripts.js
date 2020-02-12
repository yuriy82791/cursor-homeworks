const getRandomNumber = function(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const createRandomArray = function(length, from, to){
  let arr = [];
  for(let i = 0; i < length; i++){
    arr.push(getRandomNumber(from, to));
  }
  return arr;
}
console.log(createRandomArray(20, 10, 1000)); 
