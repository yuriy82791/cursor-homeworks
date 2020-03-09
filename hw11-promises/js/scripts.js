function getChinese(time){
  return new Promise(resolve => {
    setTimeout(() =>{
      const sign = Date.now().toString().substring(8);
      resolve(String.fromCharCode(sign));
    }, time);
  });
}
async function getRandomChinese(length, time){
  let chineseStr = '';
  let i = 0;
  while(i < length){
    await getChinese(time).then((str) => {
      chineseStr += str;
    });
    i++;
  }
  return(chineseStr);
}
getRandomChinese(4, 50).then(str =>{
  console.log(str);
  document.querySelector('.chinese-word').innerHTML = str;
}).catch(err => {
  console.log('err:' + err);
});

