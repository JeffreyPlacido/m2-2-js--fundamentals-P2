// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q7
// Returns a new list with all the elements of lst that are length greater than 5

function long(lst) {
  const long2 = lst.filter(function (word) {
    return word.length > 5;
  });
  return long2;
}

console.log(
  long(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'])
);
