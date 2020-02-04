let sum = null;
let message = null;
let n = parseInt(prompt('Enter first number', 10));
while(isNaN(n)){
  n = parseInt(prompt('Enter first number', 10));
}
let m = parseInt(prompt('Enter second number', 100));
while(isNaN(m)){
  m = parseInt(prompt('Enter first number', 100));
}
let skipEven = confirm('Skip even numbers?');
for(let i = n; i <= m; i++){
  if(skipEven && (i % 2) == 0){
    continue;
  }
  sum += i;
}
skipEven ?  message = `Loop from ${n} to ${m} without even numbers is - ${sum}` : message = `Loop from ${n} to ${m} with even numbers is - ${sum}`;

console.log(message);
document.getElementById('result').innerHTML += message;