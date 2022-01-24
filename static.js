 // static properies and static method in class 
 
 
 class student {
     studentName;
     marks;
     static studentcount = 0
     constructor (studentName,marks){
         this.studentName = studentName
         this.marks = marks;
         student.studentcount ++;
     }

         // static method
         staticcomparestudentmark(stu1,stu2){
            return stu1.marks - stu2.mark
        } 
}
var firststudent = new student("Hardik",90)
console.log(student.studentcount)
var secoundstudent = new student("Jay",80)
console.log(student.studentcount)
var thirdstudent = new student("Raj",70)
console.log(student.studentcount)
console.log(firststudent)
console.log(secoundstudent)
console.log(thirdstudent)
console.log(staticcomparestudentmark())

 
