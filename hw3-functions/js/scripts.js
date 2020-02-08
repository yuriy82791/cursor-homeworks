const findMaxDigit = function (number){
  /*
  //find max digit from number
  let numberToString = number.toString();
  let maxNumber = null;
  for(let i = 1; i < numberToString.length; i++){
    if(numberToString[i] > numberToString[i-1] && numberToString[i] > maxNumber){
      maxNumber = numberToString[i];
    } 
  }
  return maxNumber;
  */
  return maxNumber = Math.max(...number.toString().split(""));
};


const findDegree = function (number, degree){
  let pow = number;
  if(degree > 0){
    for(let i = 1; i < degree; i++){
      pow*=number;
    }
  }else{
    pow = 1;
  }
  
  return pow;
}; 

const capitalLetter = function(name){
  name = name.toLowerCase();
  return name = name.charAt(0).toUpperCase() + name.slice(1);
};

const findAmountWithoutTax = function(salary, tax){
  return salary * ((100 - tax)/100); 
};

const getRandomNumber = function(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from;
};


const findLetterCount = function(text, letter){
  let count = 0;
  for (let i = 0; i < text.length; i++) {
   if(text[i] === letter){
     count++;
   }
  }
  return count;
};

const convertMoney = function(money){
  let converted = null;
  const courseDollar = 25;
  if(money.indexOf('$') !== -1){
    converted = parseInt(money)*courseDollar + 'uah';
  }else if(money.toLowerCase().indexOf('uah') !== -1){
    converted = parseInt(money)/courseDollar + '$';
  }else{
    converted = 'This function convert only dollar to uah or uah to dollar';
  }
  return converted;
};


const generateRandomPass = function(passwordLength){
  const passLength = passwordLength === undefined ? 8 : passwordLength;
  let password = '';
  for(let i = 1; i <= passLength; i++){
    password += Math.floor(Math.random()*10);
  }
  
  return password;
};


const removeLetter = function(text, letter){
  //можна було зробити через цикл але вирішив зробити через рекурсію
  const count = text.indexOf(letter);
  if(count !== -1 ){
    let tempString = text.substr(0, count) + text.substr(count+1);
    return removeLetter(tempString, letter);
  }else{
    return text;
  }
};


const isWordPolyndrom = function(word){
  //можна було зробити через чикл з перевіркою на співпадіння букв, але вирішив зробити так
  let tempWord = word.replace(/\s/g, "").toLowerCase();
  const reverseWord =  tempWord.split('').reverse().join(''); 
  
  return reverseWord === word ? `word ${word} is polindrom` : `word ${word} is not polindrom`;
};


const deleteDuplicatedLetters = function(text){
  let resultArr = [];
  text = text.toLowerCase();
  textArr = text.toLowerCase().split('');
  for(let i = 0; i < textArr.length; i++){
    if(text.indexOf(textArr[i]) == text.lastIndexOf(textArr[i])){
      resultArr.push(textArr[i]);
    }
  }
  return resultArr.join('');
};

const message = `
  <p>Function #1 - ${findMaxDigit(241632812307)}</p>
  <p>Function #2 - ${findDegree(2,4)}</p>
  <p>Function #3 - ${capitalLetter("yUrIY")}</p>
  <p>Function #4 - ${findAmountWithoutTax(1000, 19.5)}</p>
  <p>Function #5 - ${getRandomNumber(1, 5)}</p>
  <p>Function #6 - ${findLetterCount('Lorem ipsum dolor', 'o')}</p>
  <p>Function #7 - ${convertMoney('1111 UAH')}</p>
  <p>Function #8 - ${generateRandomPass(4)}</p>
  <p>Function #9 - ${removeLetter('blablabla', 'a')}</p>
  <p>Function #10 - ${isWordPolyndrom('Аргентина манит негра')}</p>
  <p>Function #11 - ${deleteDuplicatedLetters('Бисквит был очень нежный')}</p>
`;
document.getElementById('result').innerHTML += message;