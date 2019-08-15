
//Kaprekars Constant

// Have the function KaprekarsConstant(num) take the num parameter being passed
// which will be a 4 - digit number with at least two distinct digits.

// Your program should perform the following routine on the number: 
// Arrange the digits in descending order and 
// in ascending order(adding zeroes to fit it to a 4 - digit number) and 
// subtract the smaller number from the bigger number. 
// Then repeat the previous step.

// Performing this routine will always cause you to reach a fixed number: 6174.

// Your program should return the number of times this routine must be performed
// until 6174 is reached.

// export function KaprekarsConstant(num) {

//   // code goes here

//   return num;
// }

exports.kaprekarsConstant = function (num) {

  if (typeof num !== 'number' && typeof num !== 'string') throw new Error();

  let asc, desc, count = 0;

  (function routine() {
    if (num === 6174) return count;

    while (String(num).length < 4) {
      num *= 10;
    }

    const split = String(num).split('').sort((a, b) => a - b);
    const asc = parseInt(split.join(''));
    const desc = parseInt(split.reverse().join(''));

    num = desc - asc;
    count++;
    return routine(num);
  })(num)

  return count;
}