// 2.	Задача о странных числах: Напишите функцию, которая принимает число и возвращает true,
//  если это число является странным, и false в противном случае. Странным числом считается число, 
//  которое равно сумме всех своих делителей, кроме самого себя.


const  isStrangeNumber1 = num => {
    //Сумма делителей
    let divisorsSum = 0;
    // Проходим по всем числам, которые меньше num для поиска делителей.
    for (let i = 1; i < num; i++) {
        //Если делится без остатка, то число i является делителем, добавляем его к сумме делителей.
        if(num % i === 0)  divisorsSum+=i
    }
    //Если сумма делителей равна заданному числу, то оно является странным.
    return divisorsSum === num
}

const isStrangeNumber2 = num => {
    //Создаем массив всех возможных делителей числа num
    //Для этого сначала заполняем новый массив числами от 1 до num - 1
    const divisors = Array.from({ length: num - 1 }, (_, i) => i + 1)
    //Проверяем, делится ли число num на каждый элемент массива без остатка. 
    //Фильтруем только те числа, которые действительно являются делителями num.
    .filter(divisor => num % divisor === 0);
    // Вычисляем сумму всех делителей с помощью метода reduce()
    const sum = divisors.reduce((acc, divisor) => acc + divisor, 0);
    // Если сумма делителей равна числу num, то число считается странным
    return sum === num;
}


const isStrangeNumber3 = (num, divisor = num - 1, sum = 0) => {
    if (divisor <= 0) {
       // Если делитель становится меньше или равен 0, мы проверяем, равна ли накопленная сумма sum числу num.
       // Если это так, то число считается странным, и функция возвращает true, в противном случае возвращает false.
        return sum === num;
    }
    if (num % divisor === 0) {
        // Проверяем, делится ли число на текущий делитель divisor без остатка. Если делится, то мы добавляем divisor
        // к накопленной сумме sum.
        sum += divisor;
    }
    //Вызываем функцию рекурсивно, уменьшая divisor на 1 и передавая обновленные divisor и sum. 
    //Это позволяет проверить следующий делитель и добавить его к сумме
    return isStrangeNumber3(num, divisor - 1, sum);
    //Рекурсия продолжается, пока divisor не достигнет значения 0. На этом этапе мы сравниваем накопленную сумму делителей
    // с числом num. Если они совпадают, функция возвращает true, и число считается странным. В противном случае, если сумма
    // делителей не равна числу num, функция вернет false, и число не будет считаться странным.
}

console.log(isStrangeNumber1(6)); // true, 6 = 1 + 2 + 3
console.log(isStrangeNumber1(12)); // false, 12 != 1 + 2 + 3 + 4 + 6
console.log(isStrangeNumber1(28)); // true, 28 = 1 + 2 + 4 + 7 + 14
console.log(isStrangeNumber1(30)); // false, 30 != 1 + 2 + 3 + 5 + 6 + 10 + 15

console.log(isStrangeNumber2(6)); // true, 6 = 1 + 2 + 3
console.log(isStrangeNumber2(12)); // false, 12 != 1 + 2 + 3 + 4 + 6
console.log(isStrangeNumber2(28)); // true, 28 = 1 + 2 + 4 + 7 + 14
console.log(isStrangeNumber2(30)); // false, 30 != 1 + 2 + 3 + 5 + 6 + 10 + 15

console.log(isStrangeNumber3(6)); // true, 6 = 1 + 2 + 3
console.log(isStrangeNumber3(12)); // false, 12 != 1 + 2 + 3 + 4 + 6
console.log(isStrangeNumber3(28)); // true, 28 = 1 + 2 + 4 + 7 + 14
console.log(isStrangeNumber3(30)); // false, 30 != 1 + 2 + 3 + 5 + 6 + 10 + 15
