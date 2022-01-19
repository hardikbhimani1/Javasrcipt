var students1 = {
    studentName: 'Hardik',
    section : 'A'
};
var students2 = {
    studentName: 'Bhimani',
    section : 'B'
};
function calculateTotalMark(subject1, subject2,subject3) {
    let totalMark = subject1 + subject2 + subject3 ; 
    let message = `Hey ${this.studentName} your marks is ${totalMark}`;
    console.log(message);
}
var students1calculate =calculateTotalMark.bind(students1);
students1calculate(70,80,90)

var students2calculate =calculateTotalMark.bind(students2);
students2calculate(50,60,70)
