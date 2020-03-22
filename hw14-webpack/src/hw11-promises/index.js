function getChinese(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      const sign = Date.now()
        .toString()
        .substring(8);
      resolve(String.fromCharCode(sign));
    }, time);
  });
}
export default async function getRandomChinese(length, time) {
  let chineseStr = "";
  let i = 0;
  while (i < length) {
    chineseStr += await getChinese(time);
    i++;
  }
  return chineseStr;
}
