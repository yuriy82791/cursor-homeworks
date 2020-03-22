
export function getIntegerNumbers(numberArr){
  return numberArr.filter((val) =>{
    return val === parseInt(val, 10);
  });
};
export function getMedian(...numbers){
  const integerArr = getIntegerNumbers(numbers);
  const sortArr = integerArr.sort((a,b) => {return a - b;});
  if(sortArr.length % 2 !== 0){
    return sortArr[Math.floor(sortArr.length/2)];
  }else{
    return (sortArr[Math.floor(sortArr.length/2)] + sortArr[Math.floor(sortArr.length/2) - 1])/2;
  }
  
};
