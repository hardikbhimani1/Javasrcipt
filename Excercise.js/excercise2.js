//  Write a Javascript function that check weather a passed string is palindrom or not?

// A Pallindrome is  a word ,phrase , or sequence that reads a same backward as forward,
// e,g :- madam or nurses ,run 



//anonymous function:-



const pd =function(abc){
    var a,b,c;
    a=String(abc)
    b=a.split("")
    c=b.reverse()
    d=c.join("")
    if(a==d)
    {
        console.log("str is pd")
    }
    else
    {
        console.log("str not pd")
    }
}
console.log(pd("mom"))



 //arrow function:-



// var pd =(str)=>{
//     var a=String(str)
//     var b=a.split("").reverse().join("")
//     if(a==b)
//     {
//         console.log("str is pd")
//     }
//     else
//     {
//         console.log("str not pd")
//     }
// }
// console.log(pd("hardik"))



// call back function


// function pal(str){
//     console.log(str("MADAM"))
// }
// pal(function(str){
//     var a,b;
//     a= String(str)
//     b= a.split("").reverse().join("")
//     if(a==b)
//     {
//         console.log("Str is Pall")
//     }
//     else
//     {
//         console.log("Str is not Pall")
//     }
// });