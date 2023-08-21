// 3.	Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// ●	вычисление N-го числа в ряду Фибоначчи 
// ●	вычисление всех чисел в ряду Фибоначчи до числа N
// ●	вычисление N-го просто числа
// ●	вычисление всех простых чисел до числа N



const MathX = (() => {
  // Функция для вычисления N-го числа в ряду Фибоначчи
  const fibonacci = n => {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  // Функция для вычисления всех чисел в ряду Фибоначчи до числа N
  const fibonacciSequence = n => {
    let sequence = [];
    for (let i = 0; i < n; i++) {
      sequence.push(fibonacci(i));
    }
    return sequence;
  }

  // Функция для проверки, является ли число простым
  const isPrime = num => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Функция для вычисления N-го простого числа
  const primeNumber = n => {
    let count = 0;
    let number = 2;
    while (count < n) {
      if (isPrime(number)) {
        count++;
      }
      number++;
    }
    return number - 1;
  }

  // Функция для вычисления всех простых чисел до числа N
  const primeNumbersSequence = n => {
    let sequence = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        sequence.push(i);
      }
    }
    return sequence;
  }

  // Возвращаем публичные методы
  return {
    fibonacci: fibonacci,
    fibonacciSequence: fibonacciSequence,
    primeNumber: primeNumber,
    primeNumbersSequence: primeNumbersSequence
  };
})();

// Пример использования
console.log(MathX.fibonacci(5)); // Вывод: 5
console.log(MathX.fibonacciSequence(10)); // Вывод: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(MathX.primeNumber(4)); // Вывод: 7
console.log(MathX.primeNumbersSequence(20)); // Вывод: [2, 3, 5, 7, 11, 13, 17, 19]