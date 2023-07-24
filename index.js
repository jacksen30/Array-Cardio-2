// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;  //returns a boolean value
});

console.log({isAdult});

// Array.prototype.every() // is everyone 19 or older?

const allAdults = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;  //returns a boolean value
});

console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findComment = comments.find(comments => {
  return comments.id === 823423;
});

console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const indexOfComment = comments.findIndex(comments => {
  return comments.id === 823423;
});

// The splice() method is used to delete the matching element / object in the array, 
// The first argument indexOfComment is the index at which to start changing the array, 
// The second argument 1 indicates the number of elements to remove from the array.

comments.splice(indexOfComment, 1); 

// Displays the updated array with the element - comment.id of 823423 removed
console.table(comments);