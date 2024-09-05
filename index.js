"use strict";
var sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(10, 20));
//scope 
var a = 10; // global scope variable
{
    var b = "maira";
    {
        var c = true;
    }
}
//
//var a : number = 10;
//var a : number = 10;
// 
let d = "maira";
{
    let d = "samra";
}
console.log(b, "outside the block");
// const cannot be changed for example its a fix value e.g pie =3.14
//const age : number = 22
//age = 32 error ( not changed)
// parent (global scope ) =>move  child (local scope)
// child (local scope ) NOTmove  parent ( global scope)
// let keyword upadate (multiple blocks)
// const keyword not upadate
// **ARRAY ( infinite number of variables)
//*same data type multiple values
let student1 = " maira";
let student2 = " abc";
let studentsname = ["maira,samra,awais,mariam,fatima,ayesha"];
console.log(studentsname);
//specific index number (reapet , start 0 , one difference)
let student3 = " maira";
let student4 = " abc";
let studentsnames = [
    "maira" //0
    ,
    "samra" //1
    ,
    "awais" //2
    ,
    "mariam" //3
    ,
    "fatima" //4
    ,
    "ayesha" //5
];
console.log(studentsnames[4] + studentsnames[2]);
// last index = array length -1
let rollNo = [1, 2, 3];
let data = 2;
console.log(rollNo[data]);
//
let rollNos = [1, 2, 3, 4];
let datas = 2;
console.log(studentsnames[rollNo[data]]);
// length
//let RollNo : number[] =[1,2,3]
//let Data = 2
console.log(studentsnames[studentsnames.length - 1]);
console.log(studentsnames[studentsnames.length / 2]);
// length return type ( number)
// push 
studentsnames.push("sehar", "bisma", "areeba", "minihal");
console.log(studentsnames.length);
//studentsnames.push("irsa","hifza")
//console.log(studentsnames);
//pop last name remove
studentsnames.push("sehar", "bisma", "areeba", "minihal");
studentsnames.pop();
console.log("after pop", studentsnames);
// return string ,undefined
// console.log(studentsname)
// studentsnames.push(studentsnames .pop());
// shift ist element remove
//unshift add value
let mystudents = ["sadia", "laiba"];
mystudents.shift();
console.log(mystudents);
//
//let mystudent : string[] = ["sadia","laiba"]
mystudents.unshift("awais");
console.log(mystudents);
// 
console.log(mystudents.shift());
console.log(mystudents.unshift()); //start 
//
//pop will return remove element 
// shift  will retuen remove element
// push element add ( elements add after length) (will return new array length)(number)
//unshift  same as push return
// splice (required)(index start),(del value),update,add,
//let studentsnames =[
// "maira" //0
//,"samra" //1
//,"awais" //2
//,"mariam" //3
//,"fatima" //4
//,"ayesha" //5
//]
//name.splice(1,1)
//indexof
let names = ["abc ", "dfg"];
console.log(names.indexOf("dfg"));
//addition splice
let Names = ["ali", "huzafa", "hamza"];
Names.splice(0, 1, "rajab", "sulman");
console.log(Names);
//del ,
//create a todo list
// add ten tools ,one should be have lunch
//delete 2nd
// update "have lunch" to "prepare lunch"
//add 4th index
// del last value , splice
let todolist = [
    "Good morning",
    "Do 30 minutes of yoga",
    "Have a lunch",
    "Buy bread",
    "Have a breakfast",
    "Dentist appoinment",
    "Have a lunch",
    "some work",
];
todolist.splice(1, 1, "prepare lunch");
todolist.splice(todolist.indexOf("Have a lunch"), 1, "prepare Lunch");
todolist.splice(4, 0, "Get ready");
todolist.splice(todolist.length - 1, 1);
console.log(todolist);
//
let marks = [100, 250, 30, 45];
//console.log(marks.sort());
console.log(marks.sort().reverse);
//
let Marks = [19, 23, 45, 67];
// console.log(Marks.slice(0,3));
console.log(Marks.slice(0, 2));
//
let v = [10, 20, 45, 67];
console.log(v.slice(2));
