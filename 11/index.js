// 11.	Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию. 
// Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции, даже после того,
//  как внешняя функция завершила свое выполнение.


const outerFunction = () => {
    let outerVariable = "Переменная из внешней функции";
  
    const innerFunction = () => {
        //Внутренняя функцию innerFunction имеет доступ к переменной outerVariable,
        //так как outerVariable находится в лексическом окружении функции innerFunction. 
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const returnedFunction = outerFunction();
  
  //Dызывается returnedFunction, она все еще имеет доступ к переменной outerVariable,
  // даже после завершения выполнения outerFunction.

  returnedFunction(); // Выведет "Переменная из внешней функции"