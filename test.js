let x =  "Volvo" + 16 + 4; // let data type declaration
const PI = 3.14159265359; // Const data type declaration
let y = "test"; //undefined
y = undefined;
/* let f = myfun(5 , 8); // Function
function myfun (a,b)
{
    return a + b;
} */


document.getElementById("mytext").innerHTML='Test content';
console.log('Happy New Year');
document.getElementById("par").innerHTML='5-3';
document.getElementById("par").innerHTML=5-3; 

                    // const variable

document.getElementById("con").innerHTML = PI; 

                    // let variable & typeof()

document.getElementById("letv").innerHTML= x + " " + "typeof()" +" " + typeof(x); 

                   // undefined type

document.getElementById("undef").innerHTML= y;  // undefined type

                      //Function

let f = myfun(5 , 8 , 9); 
let f2 = myfun(5 , 8 , 1 );
function myfun (a, b, c)
 {
     return a + b * c;
 };

document.getElementById("funt").innerHTML= f; // Function 1
document.getElementById("funt2").innerHTML= f2; // Function 2

                   // Object
 const stud = { fname:"Sri" , lname:"vidhya" , Course:"JS" , batch: "7 Am"}; // Object                   

document.getElementById("Obj").innerHTML = stud.fname + " is Studing" + " "+ stud.Course + " at "  + stud.batch; 


                  // Boolean

/* Boolean Start */
let a  = 5;
let b  = 5;
let c  = "5";
/* Boolean End */
document.getElementById("Bool").innerHTML= (a===c); // Boolean operator 1
document.getElementById("Boo2").innerHTML= (a==c); // Boolean operator 2

                       // Array 

const arr = ["name1","name2","name3"];

document.getElementById("arr").innerHTML= arr[1]; 
document.getElementById("arrp").innerHTML= arr.push("name4"); //push
document.getElementById("arrap").innerHTML= arr;
document.getElementById("arrpop").innerHTML= arr.pop(); // pop
document.getElementById("arrapop").innerHTML= arr;
document.getElementById("arrl").innerHTML= arr.length;
/* document.getElementById("arr").innerHTML= arr[0]; // Array 2 */

               // String Methods

 let txt = "Srividhyalakshmi";   
 let txt1 = "Hai";
 let txt2 = "Sri";
 let txt3 = txt1.concat(" ", txt2);   
 document.getElementById("strlen").innerHTML= txt.length;
 document.getElementById("strslice").innerHTML= txt.slice(3,6);
 document.getElementById("str-slice").innerHTML= txt.slice(-6,-3);
 document.getElementById("substr").innerHTML= txt.substring(7,3);
 document.getElementById("strep").innerHTML= txt.replace("Srividhyalakshmi","Srividhya");
 document.getElementById("strup").innerHTML= txt.toUpperCase();
 document.getElementById("strcon").innerHTML= txt3;


/* alert(2+ 6);
console.log(5 + 6); */