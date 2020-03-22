 const findMaxDigit = function (number){
  return Math.max(...number.toString().split(""));
};
export default findMaxDigit;

