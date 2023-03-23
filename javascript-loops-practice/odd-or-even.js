/* exported oddOrEven */
function oddOrEven(numbers) {
  const newArray = [];
  for (const index in numbers) {
    if (numbers[index] % 2 !== 0) {
      newArray.push('odd');
    } else {
      newArray.push('even');
    }
  }
  return newArray;
}

// number modulus through each index of array
// if index has remainder, it is odd,
// if no remainder, it is even
// push strings 'odd' or 'even' into new array
