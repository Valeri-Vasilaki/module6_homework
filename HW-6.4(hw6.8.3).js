function printNumbers(start, end) {
  let currentNumber = start;

  const intervalId = setInterval(function () {
    console.log(currentNumber);
    if (currentNumber === end) {
      clearInterval(intervalId); // Останавливаем интервал, когда достигнут конечный номер
    } else {
      currentNumber++;
    }
  }, 1000);
}
