//Coding Practice: 
//Using the Filter() vs Find() method

// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance, returns first match, if no match - undefined

const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
  ];
  // filter
  const youngPeople = people.filter((person) => {
      //if (person.age < 30) {
      //    return person 
      // }     
          return person.age < 30
  }) 
  console.log(youngPeople) //?
  //[ { name: 'bob', age: 20, position: 'developer' }, 
  //{ name: 'peter', age: 25, position: 'designer' } ]  

  const developers  = people.filter((person) => person.position === "developer") 
  //[ { name: 'bob', age: 20, position: 'developer' } ]  //? 

  //no match
  //With filter you get back an empty [] when there is no match
  const seniorDevs = people.filter((item) => item.position === "senior dev") //? []
  
  //find
  const peter = people.find((person) => person.name === "peter") //?
  //{ name: 'peter', age: 25, position: 'designer' } 
  console.log(peter.position) //? designer //uses dot notation to access value

  //no match
  //with find you get undefined where there is no match
  const oldPerson = people.find((person) => person.age > 35) //?

  //multiple matches 
  //returns the first match
   const randomPerson = people.find((person) => person.age < 35) //?
   //{ name: 'bob', age: 20, position: 'developer' } 

   //grab position
   //Using filter retuns an array so you must access value using the index, 
   //unlike find which returns an object and can use the dot notation
   const anna = people.filter((person) => person.name === "anna") //?
   console.log(anna[0].position) //? intern
