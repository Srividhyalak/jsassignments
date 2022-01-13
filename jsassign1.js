// 1) Write a function to get FirstName & lastName as input and return fullName as output

const concatstr = (fname,lname) => 
{
   let fullname = fname . concat(lname);
   return fullname;
}
let concat1 = concatstr ('sri', 'vidhya');
console.log(concat1);


// 2) Write a program to find the area of a rectangle. Get length & breadth as inputs and return area as output

const rarea = (l,b) => 
{
   let area = l*b;
   return area;
}
let area = rarea (10 , 15);
let area1 = rarea (18 , 15);
console.log(area);
console.log(area1);


// 3) Write a program to iterate over the following array using for loop
//let arr = [1, 'hello', 3, true]
const arraylen = () =>
{
  return [1, 'hello', 3, true]
}

const arrlen = arraylen();
for (i=0; i<arrlen.length; i++)
{
   console.log(arrlen[i]);
}


// 4) Write a program to iterate over the properties of the given object

let concept = {
    name: 'for loop',
    use: 'iterate over arrays',
    steps: 3
 }
 for (const prop in concept) {
    
    console.log(prop);
    console.log(concept[prop]);

 }


 // 5) Iterate over the given array using forEach and map respectively

 let students = ['Hari', 'Deva', 'Nisha', 'Ram']
 students.forEach(stud => {
     console.log (stud)
     
 });

 let student = ['Hari', 'Deva', 'Nisha', 'Ram']
 student.map(studs => {
     console.log (studs)
     
 });
 

