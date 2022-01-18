var student1 ={
    studentName : 'Hardik',
    section : 'A'
};
var student2 ={
    studentName : 'Hardik2',
    section : 'B'
};
function calculateTotalMark(subject1,subject2,subject3)
 {
    let totalMark = subject1 + subject2 + subject3;
    let message = `Hey ${this.studentName},your total marks is:${totalMark}`;
    console.log(message);
}
var student1calculate = calculateTotalMark.bind(student1);
student1calculate(60,70,90)

var student2calculate = calculateTotalMark.bind(student2);
student1calculate(50,60,80)
