// 13/01/2022

var employee = {
    firstName : 'Hardik',
    lastName : 'Bhimani',
    designation : 'Clerk',
    salary : 6000,
    workExperienceYear : 4, 
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`; 
    },
    promote : function(){
        var isEligibleForPromote;
        if(this.designation == 'Clerk'){
            if(this.workExperienceYear >=3){
                isEligibleForPromote = true;
                this.designation = 'Asst. Manager';
                this.salary += this.salary  * 10/100; 
            }
            else {
                isEligibleForPromote = false;
            }
        }
        return isEligibleForPromote;
    }
};
console.log(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.designation);
console.log(employee.salary);
console.log(employee.workExperienceYear);
console.log(employee.getFullName());

if(employee.promote() == true) {
    console.log("Congratulation! The Employee promoted ");
    console.log("updated salary : " + employee.salary);
    console.log(" updated Designation : " + employee. designation);
}
else {
    console.log("Employee is not Eligible")
}