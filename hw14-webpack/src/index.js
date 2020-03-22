import "./style.css";
import maxValue from "./hw1-variables-and-data-types";
import loopFunction from "./hw2-loops-and-conditions";
import findMaxDigit from "./hw3-functions";
import { createPairs, students } from "./hw4-array";
import { getMedian, getIntegerNumbers } from "./hw5-arrays";
import { getSubjects, studentsList } from "./hw6-objects";
import { getMyTaxes, ukraine } from "./hw7-function-method";
import Student from "./hw8-classes";
import "./hw9-DOM/style.css";
import { generateSquareInterval } from "./hw9-DOM";
import { startPlay, audio } from "./hw10-Events";
import getRandomChinese from "./hw11-promises";
import "./hw12-api/style.css";
import { getInf, getPlanet } from "./hw12-api";
import createIdGenerator from "./hw13-generators";
function clearHTML() {
  if (audio !== null) {
    audio.pause();
    audio.currentTime = 0;
  }
  document.getElementById("square-interval").innerHTML = "";
  document.querySelector(".star-wars-container").classList.remove("active");
}
document.getElementById("hw1").addEventListener("click", function() {
  clearHTML();
  console.log(maxValue);
});
document.getElementById("hw2").addEventListener("click", function() {
  clearHTML();
  loopFunction();
});
document.getElementById("hw3").addEventListener("click", function() {
  console.log(findMaxDigit(241632812307));
});
document.getElementById("hw4").addEventListener("click", function() {
  clearHTML();
  console.log(createPairs(students));
});
document.getElementById("hw5").addEventListener("click", function() {
  clearHTML();
  console.log(
    getMedian(6, 2, 55, 55.5, 14.3, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
  );
});
document.getElementById("hw6").addEventListener("click", function() {
  clearHTML();
  console.log(getSubjects(studentsList[0]));
});
document.getElementById("hw7").addEventListener("click", function() {
  clearHTML();
  console.log(getMyTaxes.call(ukraine, 2500));
});
document.getElementById("hw8").addEventListener("click", function() {
  clearHTML();
  let studentYura = new Student("Юрій Рибак", 3, 'НУ "Львівська Політехніка"');
  console.log(studentYura.getInfo());
  console.log(studentYura.marks);
  studentYura.marks = 3;
  console.log(studentYura.marks);
  console.log(studentYura.getAverageMark());
  studentYura.dismissStudent();
  console.log(studentYura.marks);
  studentYura.marks = 4;
  console.log(studentYura.marks);
  studentYura.recoverStudent();
  studentYura.marks = 4;
  console.log(studentYura.marks);
  console.log(studentYura.getAverageMark());
});
document.getElementById("hw9").addEventListener("click", function() {
  clearHTML();
  generateSquareInterval("square-interval", 25);
});
document.getElementById("hw10").addEventListener("click", function() {
  clearHTML();
  startPlay();
});
document.getElementById("hw11").addEventListener("click", function() {
  clearHTML();
  getRandomChinese(4, 50)
    .then(str => {
      console.log(str);
    })
    .catch(err => {
      console.log("err:" + err);
    });
});
document.getElementById("hw12").addEventListener("click", function() {
  clearHTML();
  document.querySelector(".star-wars-container").classList.add("active");
  document.querySelector("#get-information").addEventListener("click", getInf);
  document
    .querySelector("#get-planets")
    .addEventListener("click", getPlanet.bind(null, 1));
  document.querySelectorAll(".click").forEach(element => {
    element.addEventListener("click", event => {
      getPlanet(event.target.dataset.page);
    });
  });
});
document.getElementById("hw13").addEventListener("click", function() {
  clearHTML();
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
});
