//16.	Задача на модули и использование внешних библиотек: напишите модуль,
//  который экспортирует функцию для работы с датами. Внутри модуля используйте 
//  внешнюю библиотеку Moment.js для удобной работы с датами.

import moment from 'moment';

const formatDateTime  = (date, format) => {
    return moment(date).format(format);
}
// Экспортируем функцию для работы с датами
export default formatDateTime

 







