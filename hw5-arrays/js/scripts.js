const getRandomNumber = function(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
const getIntegerNumbers = function(numberArr){
  return numberArr.filter((val) =>{
    return val === parseInt(val, 10);
  });
};
//---------function #1------------------------
const createRandomArray = function(length, from, to){
  let arr = [];
  for(let i = 0; i < length; i++){
    arr.push(getRandomNumber(from, to));
  }
  return arr;
};
console.log('function #1 - '+ createRandomArray(20, 10, 1000)); 
//------------------------------------------
//---------function #2------------------------
const getModa = function(...numbers){
  const integerArr = getIntegerNumbers(numbers);
  const sortArr = integerArr.sort((a,b) => {return a - b;});
  let count = 1;
  let countArr = [];
  let res = [];
  for(let i = 0; i < sortArr.length; i++){
    if(sortArr[i] === sortArr[i+1]){
      count++;
    }else{
      if(count > 1){
        countArr.push([sortArr[i], count]);
      }
      count = 1;
    }
  }
  countArr = countArr.sort((a,b) => {return a[1] - b[1];});
  for(let j = countArr.length-1; j >=0; j--){
    if(countArr[j][1] > countArr[j-1][1]){
      res.push(countArr[j][0]);
      break;
    }else {
      res.push(countArr[j][0]);
    }
  }
  return res.reverse();
  
};
console.log('function #2 - '+ getModa(55, 6, 77, 2, 55, 6, 11, 78, 2, 77, 55, 77, 57, 87, 23, 55, 56, 2, 3, 2));
//------------------------------------------
//---------function #3------------------------
const getAverage = function(...numbers){
  let sum = 0;
  let minusTolength = 0;
  numbers.forEach(function(val){
    if(val === parseInt(val, 10)){
      sum += val;
    }else{
      minusTolength++;
    }
  });
  return (sum / (numbers.length - minusTolength)).toFixed(2);
};
console.log('function #3 - '+ getAverage(20, 10, 1.2, 1000)); 
//------------------------------------------
//---------function #4------------------------
const getMedian = function(...numbers){
  const integerArr = getIntegerNumbers(numbers);
  const sortArr = integerArr.sort((a,b) => {return a - b;});
  if(sortArr.length % 2 !== 0){
    return sortArr[Math.floor(sortArr.length/2)];
  }else{
    return (sortArr[Math.floor(sortArr.length/2)] + sortArr[Math.floor(sortArr.length/2) - 1])/2;
  }
  
};
console.log('function #4 - '+ getMedian(6, 2, 55, 55.5, 14.3, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//------------------------------------------
//---------function #5------------------------
const filterEvenNumbers = function(...numbers){
  return evenArray = numbers.filter((val) => {
    if(val === parseInt(val, 10)){
      return val % 2 !== 0;
    }
  });
};
console.log('function #5 - '+ filterEvenNumbers(1, 2, 3, 1.2, 23, 34, 45, 56, 3, 77, 88)); 
//------------------------------------------
//---------function #6------------------------
const countPositiveNumbers = function(...numbers){
  return evenCount = numbers.reduce((count, val) => {
   if(val > 0 ){
    count++;
   }
   return count;
  }, 0);
};
console.log('function #6 - '+ countPositiveNumbers(123, 1, -1, -10, 23, 14, -23, -34, 123, 423)); 
//------------------------------------------
//---------function #7------------------------
const getDividedByFive = function(...numbers){
  let evenArray = numbers.filter((val) => {
    if(val % 5 === 0 ){
     return val;
    }
  });
  return evenArray;
};
console.log('function #7 - '+ getDividedByFive(1, 5, 25, 34, 45, 56, 55, 77, 105)); 
//------------------------------------------
//---------function #8------------------------
const replaceBadWords = function(string){
  let badWords = ['fuck', 'shit'];
  let arr = string.split(" ");
  arr.forEach(function(word, key){
      badWords.forEach(function(val){
        let from = word.indexOf(val);
        let to = val.length;
        if(from !== -1){
          arr[key] = word.replace(val, '****');
        }
      });
  });
  return arr.join(' ');
};
console.log('function #8 - '+ replaceBadWords("Are you fucking shiting kidding?"));
//------------------------------------------
//---------function #9------------------------
const divideByThree = function(string){
  if(string.length >= 3){
    let arr = [];
    for(let i = 0; i < string.length; i+=3){
      arr.push(string.substring(i, i+3));
    }
    return arr;
  }else{
    throw new Error( 'This string is to short');
  }
 
};
console.log('function #9 - '+ divideByThree("madam"));
//------------------------------------------
//---------function #10------------------------
//This is not an ideal implementation of this function but it is the only thing that came to my mind
const createCombinations = function(text){
  let res = [text];
  let tempArr = text.split('');
  for(let i = 0; i < text.length; i++){
    for(let j = 0; j < text.length; j++){
      let temp = tempArr[j];
      tempArr[j] = tempArr[j+1];
      tempArr[j+1] = temp;
      if(res.indexOf(tempArr.join('')) === -1){
        res.push(tempArr.join(''));
      }
    }
  }
  return res;
};
console.log('function #10 - '+ createCombinations('man'));