// .length
const cars = ["Ford", "Toyota", "Chevrolet", "Lexus"];
console.log(cars.length); // .Length

// .concat()
const moreCars = ["Audi", "Jeep", "Nissan", "Honda"];
const totalCars = cars.concat(moreCars);
console.log(totalCars); // .concat() puts both arrays together

// indexOF and lastIndexOf
console.log(totalCars.indexOf("Honda")); //shows you what number its in starting from 0 to 7 (jeep)is 5 (honda) is 7
console.log(totalCars.lastIndexOf("Ford")); //returns the position of the first occurrence of a value in a string

//.join()
const stringOfCars = totalCars.join(); //returns an array as a string and seperates by commas
console.log(stringOfCars);

// .split() and .split(",")
const carsFromString = stringOfCars.split(","); //split method returns the new array, the (",") adds the ' ' to each word
console.log(carsFromString);

// .reverse()
const carsInReverse = totalCars.reverse(); //reverses the Array
console.log(carsInReverse);

// .sort()
console.log(carsInReverse.sort());
const yourPrediction = carsInReverse[0]; //sorts your list in alphabetical order
console.log(carsInReverse.indexOf("Audi"));

// .slice()
const pets = ["dog", "cat", "fish", "rabbit", "snake", "lizard", "bird"];
const reptiles = pets.slice(4, 6);
console.log("array with slice:", reptiles);
console.log("original Aray after slice:", pets);

// .splice(#,#)
const removedReptiles = pets.splice(4, 2);
console.log("pets that removed from are:", removedReptiles);
console.log("new pets arr after remove:", pets);

// .pop()
const removedPet = pets.pop();
console.log("last item removed is:", removedPet);
console.log("after removed last item:", pets);

// .push()
pets.push(removedPet);
console.log("put the removed item back:", removedPet);
console.log("after put removed item back:", pets);

// .shift()
pets.shift();
console.log("remove first item:", pets);

// .unshift()
pets.unshift("turtle");
console.log("adding item to 1st index:", pets);

// .forEach()
const numbers = ["23", "45", "0", "2", "8", "44", "100", "1", "3", "91", "34"];
const addTwo = [];
numbers.forEach(function (num) {
  addTwo.push(num + 2);
});
console.log(addTwo);
