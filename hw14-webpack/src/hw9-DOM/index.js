const getRandomColor = function () {
  const colorArr = '0123456789ABCDEF';
  let  color = '#';
  for (let i = 0; i < 6; i++) {
    color += colorArr[Math.floor(Math.random() * 16)];
  }
  return color;
}
const generateSquare = function(container, number){
  const block = document.getElementById(container);
  block.innerHTML = '';
  for(let i = 1; i <= number; i++){
    let div = document.createElement('div');
    div.classList.add('square');
    div.style.backgroundColor = getRandomColor();
    block.append(div);
  }
}  
let timerID = null;
export function generateSquareInterval(container, number){ 
  generateSquare('square-interval', 25);
  console.log(timerID);
  const block = document.getElementById(container);
  if(timerID != null){
    clearInterval(timerID);
  }
  timerID = setInterval(() =>{
    for(let i = 0; i < block.children.length; i++){
      block.children[i].style.backgroundColor = getRandomColor();
    }
  }, 1000);
} 