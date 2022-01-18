//write a java scrpt function that reverse a number.
//example x=32243;
//expected output: 34223

//arrow function:-
// const reverse = (num) => String(num).split("").reverse().join("")
// console.log(reverse(123))


// anonymous function:-


// var aaa =function(number)
// {
//     var a,b,c,d;
//     a=String(number)
//     b=a.split("")
//     c=b.reverse()
//     d=c.join("")
//     return d;
// }
// console.log(aaa(123))


//call back function


function callrev(number){
    console.log("reverse : ",number)
    console.log(number(123))
}
callrev (function(number)
{
    var a,b,c,d;
    a=String(number)
    b=a.split("")
    c=b.reverse()
    d=c.join("")
    return d;
})

