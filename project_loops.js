// 1)
function oneToTen(num) {
  if (num >= 1 && num <= 10) {
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
  } else {
    return -1;
  }
}

//2
let array = [];
let i = 3;

while (i <= 130) {
  if (i % 2 === 1) {
    array.push(i);
  }
  i++;
}

console.log(array);

//3
function arraySum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

//4

let i = 9;

while (i >= 0) {
  console.log(i);
  i--;
}

//5

function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num < 0) {
    return undefined;
  }

  let result = num;

  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

//6

function sumOfAllNum(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
