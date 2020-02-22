const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
const getRandomNumber = function(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
//----Function#1---------------------------------------------------------------
function getMyTaxes(salary){
  const calcTax =  Number(this.tax*salary);
  return `Tax paid by a IT-specialist in the selected country from salary ${salary} is ${calcTax}`
}
console.log(getMyTaxes.call(ukraine, 2500));
//-----------------------------------------------------------------------------
//----Function#2---------------------------------------------------------------
function getMiddleTaxes(ukraine){
  return Number(this.tax*this.middleSalary); 
}
console.log('The middle tax paid by a IT-specialist in the selected country from salary ' + getMiddleTaxes.call(latvia));
//-----------------------------------------------------------------------------
//----Function#3---------------------------------------------------------------
function getTotalTaxes(ukraine){
  return Number(this.tax*this.middleSalary*this.vacancies); 
}
console.log('The total taxes paid by a IT-specialists in the selected country from salary ' + getTotalTaxes.call(litva));
//-----------------------------------------------------------------------------
//----Function#4---------------------------------------------------------------
function getMySalary(ukraine){
  const mySalary = getRandomNumber(1500, 2000);
  const myTax = Number((mySalary*this.tax).toFixed(2));
  const myProfit = mySalary - myTax;  
  return {salary: mySalary, taxes: myTax, profit: myProfit};
}
setInterval(function(){console.log(getMySalary.call(ukraine));}, 10000);
//-----------------------------------------------------------------------------