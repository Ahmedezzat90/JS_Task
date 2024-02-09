function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
      return 'Second Number Not Found';
    }
    switch (operation) {
      case undefined:
      case 'add':
        return firstNum + secondNum;
      case 'subtract':
        return firstNum - secondNum;
      case 'multiply':
        return firstNum * secondNum;
      default:
        return 'Invalid Operation';
    }
  }
  
  console.log(calculate(20)); // Second Number Not Found
  console.log(calculate(20, 30)); // 50
  console.log(calculate(20, 30, 'add')); // 50
  console.log(calculate(20, 30, 'subtract')); // -10
  console.log(calculate(20, 30, 'multiply')); // 600
  