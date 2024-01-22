function isPrime(number) {
  if (number <= 1 || number > 1000) {
    console.log("Данные неверны. Пожалуйста, введите число от 2 до 1000.");
    return;
  }

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number + " - простое число.");
  } else {
    console.log(number + " - не простое число.");
  }
}
