var student1 = {
    studentName : "Hardik",
    section : "A"
};
var student2 = {
    studentName : "bhimani",
    section : "B"
};
// function at outside the object

function calculetTotalmark(sub1,sub2,sub3){
    var totalmark = sub1 + sub2 + sub3;
    let message = `hey ${this.studentName}, your marks is ${totalmark}`;
    console.log(message)
}


      //     apply()

// calculetTotalmark.apply(student1,[70,80,90])
// calculetTotalmark.apply(student2,[80,90,90])


        //bind ()


// var student1calculet = calculetTotalmark.bind(student1)
// calculetTotalmark(70,80,90)
// var student2calculet = calculetTotalmark.bind(student2)
// calculetTotalmark(80,90,90)

var  student2calculet = calculetTotalmark. bind({
    studentName : 'JAY',
    section : 'C'
})
student2calculet(80,70,90)



            //  call ()


// calculetTotalmark.call(student1,70,80,90)
// calculetTotalmark.call(student2,80,90,90)