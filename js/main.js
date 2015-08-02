// add scripts

console.log("sanity check!");

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

//problem 1
function secondLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.age);
  });
}

secondLoop(students);

//problem 2
function thirdLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.name + ", " + student.city);
  });
}

thirdLoop(students);

//problem 3
function fourthLoop(arr) {
  arr.filter(function(student){
    if (student.city === "Boulder") {
    console.log(student.name + " is from " + student.city);
    }
  });

}

fourthLoop(students);


