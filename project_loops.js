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
