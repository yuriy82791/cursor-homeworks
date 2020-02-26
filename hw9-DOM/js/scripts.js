const getRandomColor = function () {
  const colorArr = '0123456789ABCDEF';
  let  color = '#';
  for (var i = 0; i < 6; i++) {
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
const generateSquareInterval = function(container, number){
  generateSquare('square-interval', 25);
  const block = document.getElementById(container)
  setInterval(() =>{
    for(let i = 0; i < block.children.length; i++){
      block.children[i].style.backgroundColor = getRandomColor();
    }
  }, 1000);
} 