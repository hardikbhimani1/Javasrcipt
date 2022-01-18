/* 1.Write a javascript function that reverse a numeber
    example x=32243
    expected output 34223   */

 //anonymous function

 /*const reve = function(num){
    var st,spli,rev,jo
    st=String(num)
    slpi=st.split("")
    rev=slpi.reverse()
    jo=rev.join("")
    return jo
}
console.log(reve(32243))   */



// 2 .arrow function

const reve = (num) => String(num).split("").reverse().join("")
 console.log(reve(32243))


 // 3 call back function

 