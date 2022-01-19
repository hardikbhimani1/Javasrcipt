// classes and object in javascript 

class Employee {
    empId;
    empName;
    salary;

//methed  
getEmployeeeName() {
    return this.empName;
}

// method   /  function
hikesalary(amount){
    this.salary = this.salary + amount 
}
}
let  Employee1 =  new Employee();
console.log(typeof(Employee1))
Employee1.empId = 101;
Employee1.empName = "Hardik" ;
Employee1.salary = 5000;
Employee1.hikesalary (1500);
console.log(Employee1)


let  Employee2 =  new Employee();
console.log(typeof(Employee1))
Employee2.empId = 102;
Employee2.empName = "BHIMANi" ;
Employee2.salary = 6000;
Employee2.hikesalary (2500);
console.log(Employee2)
