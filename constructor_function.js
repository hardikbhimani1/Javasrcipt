var createEmployee=function(EmployeeName, EmployeeID, Salary){
    var Employee={};
    Employee.EmployeeName=EmployeeName
    Employee.EmployeeID=EmployeeID
    Employee.Salary=Salary

    Employee.getemployeeName=function(){
        return this.EmployeeName;
    };

    return Employee;
};

// let square = function(n) {return n * n}
// console.log("Square : ",square(5));

// var Employee1=createEmployee("Hardik", 101, 200000)
// console.log(Employee1)
console.log(createEmployee("Hardik", 101, 200000),createEmployee("Hello").getemployeeName())