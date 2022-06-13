/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

console.log("CHALLENGE 1:")
let count1 = 0

while (count1 !== students.length){
  console.log(students[count1])
  count1++
}


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

console.log("CHALLENGE 2:")
let count2 = grades.length - 1

while (count2 >= 0){
  console.log(grades[count2])
  count2 -= 1
}
// ^ not using reverse yet

// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

console.log("CHALLENGE 3:")
let count3 = 0

while (count3 !== positiveNumbers.length){
  if (positiveNumbers[count3] % 2 === 0){
    console.log(positiveNumbers[count3])
  }
  count3++
}


// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

console.log("CHALLENGE 4:")
let count4 = 0

while (count4 !== mixedSignNumbers.length){
  if (mixedSignNumbers[count4] % 2 === 0){
    console.log(mixedSignNumbers[count4])
  }
  count4++
}


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
// const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
const symmetricalCapitals = ['I', 'M', 'O', 'T', 'U', 'V', 'W', 'X'];

console.log("CHALLENGE 5:")
let count5 = 0

while (count5 !== symmetricalCapitals.length){
  console.log(symmetricalCapitals[count5])
  count5++
}

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
// const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
const fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

console.log("CHALLENGE 6:")
let count6 = 0

while (count6 !== fibonacciNumbers.length){
  console.log(fibonacciNumbers[count6])
  count6++
}


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

const newArray = [11, 22, 33, 44, 55]

console.log("CHALLENGE 7:")
let count7 = 0

while (count7 !== newArray.length){
  console.log(newArray[count7])
  count7++
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

const emptyArray = []
emptyArray.push("A", "B", "C")
emptyArray.unshift(1, 2)

console.log("CHALLENGE 8:")
let count8 = 0

while (count8 !== emptyArray.length){
  console.log(emptyArray[count8])
  count8++
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.

console.log("CHALLENGE 9:")
let count9 = 3

while (count9 <= 10){
  console.log(students[count9])
  count9++
}


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.

const studentsCopy = []

console.log("CHALLENGE 10:")
let count10 = 3

while (count10 <= 10){
  studentsCopy.push(students[count10])
  count10++
}

count10 = 0
while (count10 !== studentsCopy.length){
  console.log(studentsCopy[count10])
  count10++
}



// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.

const studentsSlice = students.slice(3,11)

console.log("CHALLENGE 11:")
let count11 = 0
while (count11 !== studentsSlice.length){
  console.log(studentsSlice[count11])
  count11++
}

count11 = 0
while (count11 !== students.length){
  console.log(students[count11])
  count11++
}

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

console.log("CHALLENGE 12:")
dinosaurs.splice(4,3)
let count12 = 0
while (count12 !== dinosaurs.length){
  console.log(dinosaurs[count12])
  count12++
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

console.log("CHALLENGE 13:")
let dinosaursString = dinosaurs.join(" * ")
console.log(dinosaursString)


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

console.log("CHALLENGE 14:")
dinosaurs.reverse()
console.log(dinosaurs)

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

console.log("CHALLENGE 15:")

const concat = primaries.concat(secondaries)

count15 = 0
while (count15 !== concat.length){
  console.log(concat[count15])
  count15++
}

console.log(primaries)
console.log(secondaries)