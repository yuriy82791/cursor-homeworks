function *createIdGenerator(){
  let val = 1;
  while (true) {
    yield val++;
  }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
//-------------------------------------Advanced--------------------------------------
function *newFontGenerator(size){
   let fontSize = size;
   while (true) {
    let action = yield fontSize;
    if(action === 'up'){
      fontSize += 2;
    }
    if(action === 'down'){
      fontSize -= 2;
    }
    document.querySelector('.page-title').style.fontSize = fontSize+'px';
   }
   
   
}
const fontGenerator = newFontGenerator(26);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);

