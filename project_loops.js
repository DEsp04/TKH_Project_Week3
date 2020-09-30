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
