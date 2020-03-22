export default class Student{
  constructor(fullName, course, university){
    this.fullName = fullName;
    this.course = course;
    this.university = university;
    this.marksArr = [5, 4, 5, 2];
    this.dismiss = false;
  }
  getInfo(){
    return `Студен ${this.course} курсу ${this.university} ${this.fullName}`;
  }
  get marks(){
    if(this.dismiss){return null;}
    return this.marksArr;
  }
  set marks(mark){
    if(this.dismiss){return null;}
    this.marksArr.push(mark);
  }
  getAverageMark(){
    if(this.dismiss){return null;}
    return Number((this.marksArr.reduce(function(a,b){return a+b;})/this.marksArr.length).toFixed(2));
  }
  dismissStudent(){
    return this.dismiss = true;
  }
  recoverStudent(){
    return this.dismiss = false;
  }
}

