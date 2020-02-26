class Student{
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
let studentYura = new Student('Юрій Рибак', 3, 'НУ "Львівська Політехніка"');
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

/*---------------------------------Advanced----------------------------*/

class BudgetStudent extends Student{
  constructor(...data){
    super(...data);
    this.scholarshipInterval();
  }
  
  getScholarship(){
    if(this.getAverageMark() >= 4 && this.dismiss == false){
      console.log(`Студент отримав стипендію 1500грн`);
    }else{
      console.log(`Студент стипендію не отримує:(`);
    }
  }
  scholarshipInterval(){
    setInterval(() => {this.getScholarship();},30000);
  }
}
let studentIvan = new BudgetStudent('Іван Пивовар', 4, 'НУ "Львівська Політехніка"');
studentIvan.getScholarship();
studentIvan.dismissStudent();
studentIvan.getScholarship();
studentIvan.recoverStudent();
