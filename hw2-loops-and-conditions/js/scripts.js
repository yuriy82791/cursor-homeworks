let sum = null;
let message = null;
let n = parseInt(prompt('Enter first number'));
while(isNaN(n)){
  n = parseInt(prompt('Enter first number'));
}
let m = parseInt(prompt('Enter second number'));
while(isNaN(m)){
  m = parseInt(prompt('Enter first number'));
}
let skipEven = confirm('Skip even numbers?');
for(let i = n; i <= m; i++){
  if(skipEven && (i % 2) == 0){
    continue;
  }
  sum += i;
}

if(skipEven){
  message = `Loop from ${n} to ${m} without even numbers is - ${sum}`;
}else{
  message = `Loop from ${n} to ${m} with even numbers is - ${sum}`;
}
console.log(message);
document.getElementById('result').innerHTML += message;