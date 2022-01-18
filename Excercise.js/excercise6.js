// write a javascript function that accepts a string as  a parameter and find the longest word within the string.
// example string : 'web Development tutorial '
// expected output : 'Development'

// var sab = function (abc) {
//     var a
//     a = abc.split(" ")
//     console.log(a.sort())
//     console.log(a[0])
// }
// console.log(sab("Web Development Tutorial"))


//arrow funcation

// let sab = (abc) => {
//     var a;
//     a = abc.split(" ")
//     console.log(a.sort())
//     console.log(a[0])
// }
// console.log(sab("Web Development Tutorial"))


// call back function

function sub (str) {
    console.log("str:",(str))
    console.log(str("Web Development Tutorial"))
}
sub = function (abc) {
    let a
    a = abc.split(" ")
    console.log(a.sort())
    console.log(a[0])
}




