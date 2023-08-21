let i = 0;
let callCount;
let callCountWithVar;

//Функция без объявления переменных
const func = () => {
  i++;
  func();
};

try {
  func();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
   callCount = i;
}

let j = 0;

//Функция с объявлением 5 переменных
const func2 = () => {
  let a = i + 1;
  let b = a + 1;
  let c = b + 1;
  let d = c + 1;
  let e = d + 1;
  j++;

  func2();
};

try {
  func2();
} catch (e) {
    callCountWithVar = j;
}

console.log(callCount + ' - количество вызовов первой функции, в теле которой не объявляются переменные') 
console.log(callCountWithVar + " - количество вызовов второй функции внутри которой было объявлено пять переменных")

//Числа в JavaScript представлены 64-битными значениями с плавающей запятой. В байте 8 бит, 
//в результате каждое число занимает 64/8 = 8 байт. Пять переменных - числа!

//Узнаем сколько занимает один вызов функции
let fnCallValue = (8 * 5 * callCountWithVar) / (callCount - callCountWithVar)
console.log(fnCallValue.toFixed() + " - столько байт занимает вызов функции")

//Тогда размер колстэка будет равен
let callstackValue = fnCallValue * callCount
console.log((callstackValue/(1024*1024)).toFixed(2) + " Мб - размер колстэка")


//Размер стэка в разных браузерах различается.
//Chrome - 0.96 Мб
//Firefox - 5.76 Мб 
//Opera - 0.96 Мб
//Вывод: у оперы и хрома одинаковые движки.