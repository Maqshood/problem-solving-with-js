function checkPositiveOrNegative(num = 0) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  }
  return 'Zero';
}


console.log(checkPositiveOrNegative(-9));
