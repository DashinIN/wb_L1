// 15.	Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово
//  await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

//Фукнция выполняет fetch данных, функция возвращает json
const fetchUserData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userData = await response.json();
    return userData;
  }

//Функция вызывает fetchUserData() и  выводит данные в консоль
const getUserData = async () =>  {
    try {
        const userData = await fetchUserData();
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
}
  
getUserData();