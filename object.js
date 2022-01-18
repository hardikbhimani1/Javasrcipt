// 10/01/2022

//------------------------------ OBJECT-----------------------------------

// let o1 = Object()
// console.log(o1)
// console.log(typeof(o1))
//undefined

// let o2 = new Object(undefined);    null ne undefined ma same output aave {}f breket
// console.log(o2);

 //null

//  let o3 = new Object(null);                  null ne undefined ma same output aave {}f breket
//  console.log(o3);


// let car = new Object()
// car.brand = "maruti";
// car.color = "black";
// car.fueltype = "CNG";
// console.log(car)
            //         [output]
      // { brand: 'maruti', color: 'black', fueltype: 'CNG' }


// let car = {
//     brand : "maruti",
//     color : "black",
//     fueltype : "CNG"
// }
// console.log(car)
// console.log(car['color'])



// let car = {
//     brand : "maruti",
//     color : "black",
//     fueltype : "CNG"
// }
// console.log(car)
// car ['seat'] = '4';
// console.log(car)


// let car = {
//     brand : "maruti",
//     color : "black",            //this is a key value pair
//     fueltype : "CNG",
//     type:{
//         small : 'hatchback',
//         name: 'SUV',
//         med : 'seadan'
//     }

// }
// console.log(car)
// console.log(car.brand)
// console.log(car['type']['small'])



          // 11/01/2022
  //OBJECT Destructuring
  
//   let person = {
//         firstName: 'Hardik',
//         lastName: 'Bhimani',
//         middleName: 'R',
//         currentAge : 23

// };
// let {firstName,lastName,middleName,currentAge :Age=22} = person;  //key nu name change kari sako
// console.log(middleName)
// console.log(person)
// console.log(Age)                // currentAge ne Age ma convert kariyu         
//  let b = person                 // person ne b ma nakhiyo
//  console.log(b)


//      NaN


// var a        //  undefined
// var b = ''   // NaN
// console.log(a)
// console.log(b)   //NaN             // khali print thay kay lakhel na aave



// let employee = {
//       id : 1001,
//       name : {
//             firstName : 'Hardik',
//             lastName : 'Bhimani',
//             age : 36,
//             address :{
//                   city : 'Surat',
//                   state : 'Gujarat',
//                   country : 'India',
//             }
//       } 
// };
// let {lastName, firstName: name,...rest}= employee.name;
// let {city,state}= employee.name.address;
// console.log(city)
// console.log(state)
// console.log(typeof(rest))
// console.log(name)
// console.log(lastName)




//    12/01/2022

// var person = {
//       personName: 'Hardik',
//       birthDay :
//             function(){
//                   return "Happy BirthDay";            
//             }
// };
// console.log(person.birthDay())
// console.log(person.personName)
// console.log(person)



//  ************ this  typ   ***********************************

// var person = {
//       personName : 'Hardik',
//       lastName : 'Bhimani',
//       birthDay:
//             function(){
//                   console.log(this)
//                   return  `Happy BirthDay to ${person.personName} ${person.lastName}`;
//             }
// };
// console.log(person)
// console.log(person.birthDay())



            // for  


// var students = {
//       studentName : 'Hardik',
//       email : 'hardik@gmail.com',
//       branch : "cs",                   
//       phy : 60,
//       che : 70,
//       meths : 80,
// };
// for(let p in students){
//       // console.log(p);
//       console.log(p , " - ",students[p] )
//       if(p == "phy"|| p == "che" || p == "meths"){
//             students[p]=students[p]+5                    badha subject ma 5 marks add thay
//       }
// }
// console.log(students)


//  Destructuring Function

// var fun1 = function ({studentName : sn , email : em , dateBirth,...other}){
//       console.log("fun1",sn,em);
//       console.log(other, other.phone,other.city);
//        console.log(dateBirth);
// }
// var student={studentName : 'Hardik', email : 'hardik@gmail.com', phone : 123455,city : 'Surat'};
// fun1(student);



      //   add properties



var student = {};
//console.log(student)
student.marks = 70;
student.getResults = function(){
      if(this.marks >= 35)
      return "pass";
      else
      return "fail";
};
console.log(student.marks)
console.log(student.getResults())