class teacher{
    teacherName
    // Constructor
    constructor(teacherName){
      this.teacherName=teacherName
    }
}
 class PhysicsTeacher extends teacher{
   mainsubject
   constructor(mainsubject, teacherName){
     super(teacherName);
     this.mainsubject=mainsubject
   }

   getdetais(){
    //  console.log(typeof(getdetais))
     return `Teacher Name : ${this.teacherName}, Main Subjects : ${this.mainsubject}`
   }
 }

        // Parent Class call
// var Teacher = new teacher("Jaimin")
// console.log(Teacher)

        // Child Class call
 var physicsTeacher = new PhysicsTeacher ("Physics Science", "Jaimin")
 console.log(physicsTeacher)
 console.log(typeof(physicsTeacher.getdetais()))
//  console.log(typeof(getdetais))

// ---------------------------------------> > > > Program By Sir < < < <----------------------------------
                  //class inheritance

// class Teacher {
//     teacherName
//     school
//     // constructor() { }
//     constructor(teacherName, school) {
//       this.teacherName = teacherName;
//       this.school = school;
//     }
//     // constructor(teacherName) {
//     //   this.teacherName = teacherName;
//     // }
//   }
//   //child class
//   class PhysicsTeacher extends Teacher {
//     mainSubject;
  
//     constructor(mainSubject, tech_name, sch) {
//       super(tech_name, sch);
//       this.mainSubject = mainSubject;
//     }
  
//     getDetails() {
//       return `Teacher Name: ${this.teacherName} and ${this.school}, Main Subject: ${this.mainSubject}`;
//     }
//   }
//   //parent class
//   // var teacher = new Teacher("Scott");
//   // console.log(teacher);
  
//   //child class
//   var physicsTeacher = new PhysicsTeacher("Physical Sciences", "Allen", "skill");
//   // console.log(physicsTeacher);
//   console.log(physicsTeacher.getDetails());