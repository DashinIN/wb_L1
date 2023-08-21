//1. Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом.
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).


//Переворот строки и сравнение с исходной строкой
const isPalindrome1 = str => {
    str = str.toLowerCase().replace(/ /g, ""); // Приведение к нижнему регистру и удаление пробелов
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

//Сравнение символов с начала и конца строки
const isPalindrome2 = str => {
    str = str.toLowerCase().replace(/ /g, "");
    const length = str.length;
    //Проходимся по первой половине строки, сравнивая символы с начала и конца строки.
    //Не обязательно проверять всю строку, так как если первая половина совпадает
    // с второй половиной, то строка является палиндромом.
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i - 1]) {
            // Если символы не совпадают, строка не является палиндромом
            return false;
        }
    }
    return true;
}

//С использованием рекурсии
const isPalindrome3 = str => {
    str = str.toLowerCase().replace(/ /g, "");
    if (str.length <= 1) {
        return true; //строка длиной 1 или 0 всегда является палиндромом
    }
    if (str[0] !== str[str.length - 1]) {
        return false;  // Если первый и последний символ не совпадают, строка не является палиндромом
    }
    return isPalindrome3(str.slice(1, -1)); // Рекурсивно проверяем подстроку без первого и последнего символа
}

//С использованием every()
const isPalindrome4 = str => {
    str = str.toLowerCase().replace(/ /g, "");
    const characters = str.split(""); // Разбиваем строку на массив символов
    // Метод every() проверяет, что все элементы массива соответствуют заданному условию.
    // Здесь ссравниваем символ char на текущей позиции с символом в массиве на зеркальной
    // позиции characters.length - index - 1. Если все сравнения успешны, функция вернет true,
    //  что означает, что строка является палиндромом. Если хотя бы одно сравнение даст false, функция вернет false.
    return characters.every((char, index) => char === characters[characters.length - index - 1]);
}

//Два указателя
const isPalindrome5 =  str => {
    str = str.toLowerCase().replace(/ /g, "");
    let left = 0;
    let right = str.length - 1; //Два указателя: left указывает на начало строки, а right указывает на её конец.
    while (left < right) { //Gока left меньше right сравниваем символы на позициях left и right.
        if (str[left] !== str[right]) { 
           // Если символ на позиции left не совпадает с символом на позиции right, то строка не является палиндромом.
            return false;
        }
        //После каждой итерации цикла увеличиваем left и уменьшаем right, чтобы сравнивать следующие символы в строке.
        left++;
        right--;
    }
    //Если цикл завершается и все сравнения успешны, функция вернет true, что означает, что строка является палиндромом.
    return true;
}

//Императивный подход с методами js
const isPalindrome6 = str => {
    str = str.toLowerCase().replace(/ /g, "");
    //Разворачиваем строку и сравниваем с исходной, проще не придумать
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};


//Использование метода reduce(), предваритель разбив строку на массив символов с помощью .split
const isPalindrome7 = str => {
    str = str.toLowerCase().replace(/ /g, "");
    //Текущий символ char с символом в массиве на позиции arr.length - index - 1, 
    // что соответствует символу на позиции, противоположной текущему символу.
    // Если они совпадают, то результат сравнения (char === arr[arr.length - index - 1]) будет true, 
    // и это значение будет логически умножено на текущее значение аккумулятора acc.
    // Если все символы сравниваются успешно, то в конечном итоге аккумулятор останется true,
    //  что означает, что строка является палиндромом. Если хотя бы одно сравнение дает false,
    //   то аккумулятор станет false, и функция вернет false.
    return str.split("").reduce((acc, char, index, arr) => acc && char === arr[arr.length - index - 1], true);
};

const testString1 = "Аргентина манит негра";
const testString2 = "Аргентинец ценит негра";
const testString3 = "Привет";


console.log(isPalindrome1(testString1)); // true
console.log(isPalindrome1(testString2)); // true
console.log(isPalindrome1(testString3)); // false

console.log(isPalindrome2(testString1)); // true
console.log(isPalindrome2(testString2)); // true
console.log(isPalindrome2(testString3)); // false

console.log(isPalindrome3(testString1)); // true
console.log(isPalindrome3(testString2)); // true
console.log(isPalindrome3(testString3)); // false

console.log(isPalindrome4(testString1)); // true
console.log(isPalindrome4(testString2)); // true
console.log(isPalindrome4(testString3)); // false

console.log(isPalindrome5(testString1)); // true
console.log(isPalindrome5(testString2)); // true
console.log(isPalindrome5(testString3)); // false

console.log(isPalindrome6(testString1)); // true
console.log(isPalindrome6(testString2)); // true
console.log(isPalindrome6(testString3)); // false

console.log(isPalindrome7(testString1)); // true
console.log(isPalindrome7(testString2)); // true
console.log(isPalindrome7(testString3)); // false