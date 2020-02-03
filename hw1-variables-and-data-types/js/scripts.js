const vegetablePrice = 15.678;
const meatPrice = 123.965;
const cheesePrice = 90.2345;
const money = 500;
const maxValue = Math.max(vegetablePrice, meatPrice, cheesePrice);
const minValue = Math.min(vegetablePrice, meatPrice, cheesePrice);
console.log('max number:' + maxValue);
console.log('min number:' + minValue);
const totalPrice = vegetablePrice + meatPrice + cheesePrice;
console.log('Total:' + totalPrice);
const integerTotalPrice = Math.floor(vegetablePrice) + Math.floor(meatPrice) + Math.floor(cheesePrice);
console.log('Integer part of product price:' + integerTotalPrice);
const ceiledToHundred = Math.ceil(totalPrice/100)*100;
console.log('Price sume ceiled to hundreds:' + ceiledToHundred);
const evenOddPrice = Math.floor(totalPrice);
const evenOdd = evenOddPrice % 2;
console.log(evenOddPrice+ ' % 2 = ' + evenOdd + ' - number is odd');
const rest = money - totalPrice;
console.log('Rest from '+money+'uah is: ' + rest+'uah');
const everageValue = (totalPrice / 3).toFixed(2);
console.log('Everage number '+totalPrice+'/3 = ' + everageValue);
const sale = Math.random().toFixed(2);
const salePercent = (sale*100).toFixed(0);
const checkPrice = totalPrice.toFixed(2);
const salePrice = (checkPrice * sale).toFixed(2);
const priceWithSale = (checkPrice - salePrice).toFixed(2);

const averageCheckPrice = (checkPrice/2).toFixed(2);
const lostProfit = ((totalPrice / 2) - salePrice).toFixed(2);
console.log('The sale is - ' + salePercent + '%');
console.log('Price with sale - ' + priceWithSale + 'uah');
console.log('The lost profit price is: ' + averageCheckPrice + ' - ' + salePrice + ' = ' + lostProfit);

//------advanced part-------------------------------------
const message = `
  <h1>Advanced part</h1>
  <p>Max number - <strong>${maxValue}</strong></p>
  <p>Min number - <strong>${minValue}</strong></p>
  <p>Total - <strong>${totalPrice}</strong></p>
  <p>Integer part of product price - <strong>${integerTotalPrice}</strong></p>
  <p>Price sume ceiled to hundreds - <strong>${ceiledToHundred}</strong></p>
  <p>${evenOddPrice} % 2 = ${evenOdd} is <strong>odd</strong></p>
  <p>Rest from ${money}uah is - <strong>${rest}uah</strong></p>
  <p>Everage number ${totalPrice}/3 = <strong>${everageValue}</strong></p>
  <p>The sale is -  <strong>${salePercent}%</strong></p>
  <p>Price with sale -  <strong>${priceWithSale}uah</strong></p>
  <p>The lost profit price is: ${averageCheckPrice} - ${salePrice} = <strong>${lostProfit}</strong></p>
`;
document.writeln(message);
console.log(message);

