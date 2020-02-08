let sum = null;
let message = null;
let temp = null;
let n = parseInt(prompt('Enter first number', 10));
while(isNaN(n)){
  n = parseInt(prompt('Enter first number', 10));
}
let m = parseInt(prompt('Enter second number', 100));
while(isNaN(m)){
  m = parseInt(prompt('Enter first number', 100));
}
const skipEven = confirm('Skip even numbers?');
if(n > m){
  temp = n;
  n = m;
  m = temp;
}
for(let i = n; i <= m; i++){
  if(skipEven && (i % 2) == 0){
    continue;
  }
  sum += i;
}
message = skipEven ? `Loop from ${n} to ${m} without even numbers is - ${sum}` : `Loop from ${n} to ${m} with even numbers is - ${sum}`;

console.log(message);
document.getElementById('result').innerHTML += message;