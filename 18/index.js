// 18.	Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

//Будем заполнять localStorage случайным текстом.
let value = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore adipisci consectetur, numquam aliquam magni sequi unde voluptatum, quos repellendus quis odit itaque saepe cupiditate qui enim illum! Beatae, dolor?'
console.log(value.length)
//Отчищаем localStorage перед заполнением
window.localStorage.clear()

let i = 0;
//Заходим в бесконечный цикл
while(true) {
    try {
        //Заполняем хранилище
        window.localStorage.setItem(`${i}`, value);
        } catch (e) {
            console.log(e.message)
            console.log(i)
            alert(e.message);
            //При переполнении ловим ошибку, выходим из цикла
            break
        }
        i++
}

//Считаем размер всех полей localStorage
let total = 0
for (let item in localStorage) {
    if (!localStorage.hasOwnProperty(item)) {
        continue;
    }
    //Внутренняя кодировка строк в JavaScript – это UTF-16, то есть под каждый символ отводится ровно два байта.
    //Складываем длинну ключа и значения, получаем объем в байтах.
    let itemLength = ((localStorage[item].length + item.length) * 2);
     total += itemLength; 
 };
 //Находим общий объем localStorage в Кб
console.log("Общий объем localStorage = " + (total / 1024).toFixed(2) + " Kб");

