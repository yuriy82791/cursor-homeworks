const vegetablePrice = 15.678;
const meatPrice = 123.965;
const cheesePrice = 90.2345;
let maxValue = Math.max(vegetablePrice, meatPrice, cheesePrice);
let minValue = Math.min(vegetablePrice, meatPrice, cheesePrice);
console.log('max number:' + maxValue);
console.log('min number:' + minValue);
let totalPrice = vegetablePrice + meatPrice + cheesePrice;
console.log('Total:' + totalPrice);
let integerTotalPrice = Math.floor(vegetablePrice) + Math.floor(meatPrice) + Math.floor(cheesePrice);
console.log('Integer part of product price:' + integerTotalPrice);
let ceiledToHundred = Math.ceil((vegetablePrice + meatPrice + cheesePrice)/100)*100;
console.log('Price sume ceiled to hundreds:' + ceiledToHundred);
let evenOddPrice = Math.floor(totalPrice);
let evenOdd = evenOddPrice % 2;
console.log(evenOddPrice+ ' % 2 = ' + evenOdd + ' - number is odd');
let rest = 500 - totalPrice;
console.log('Rest from 500uah is: ' + rest+'uah');
let everageValue = (totalPrice / 3).toFixed(2);
console.log('Everage number '+totalPrice+'/3 = ' + everageValue);
let sale = Math.random().toFixed(2);
let salePercent = (sale*100).toFixed(0);
let checkPrice = totalPrice.toFixed(2);
let salePrice = (checkPrice * sale).toFixed(2);
let priceWithSale = (checkPrice - salePrice).toFixed(2);

let everageCheckPrice = (checkPrice/3).toFixed(2);
let lostProfit = (everageCheckPrice - salePrice).toFixed(2);
console.log('The sale is - ' + salePercent + '%');
console.log('Price with sale - ' + priceWithSale + 'uah');
console.log('The lost profit price is: ' + everageCheckPrice + ' - ' + salePrice + ' = ' + lostProfit);

//------advanced part-------------------------------------
let message = `
  <h1>Advanced part</h1>
  <p>Max number - <strong>${maxValue}</strong></p>
  <p>Min number - <strong>${minValue}</strong></p>
  <p>Total - <strong>${totalPrice}</strong></p>
  <p>Integer part of product price - <strong>${integerTotalPrice}</strong></p>
  <p>Price sume ceiled to hundreds - <strong>${ceiledToHundred}</strong></p>
  <p>${evenOddPrice} % 2 = ${evenOdd} is <strong>odd</strong></p>
  <p>Rest from 500uah is - <strong>${rest}uah</strong></p>
  <p>Everage number ${totalPrice}/3 = <strong>${everageValue}</strong></p>
  <p>The sale is -  <strong>${salePercent}%</strong></p>
  <p>Price with sale -  <strong>${priceWithSale}uah</strong></p>
  <p>The lost profit price is: ${everageCheckPrice} - ${salePrice} = <strong>${lostProfit}</strong></p>
`;
document.writeln(message);
console.log(message);

