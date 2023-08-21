// 23.	Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного
//  пользователем пароля. Необходимо анализировать длину пароля, использование различных символов,
//   наличие чисел и букв в разных регистрах. Выведите пользователю оценку сложности пароля и 
//   предложите улучшения, если пароль слишком слабый.


const evaluatePasswordStrength = (password) => {
    // Оценка длины пароля
    let lengthScore = Math.min(1, password.length / 8);

    // Проверка наличия букв в разных регистрах
    let lowerCase = /[a-z]/.test(password);
    console.log(lowerCase)
    let upperCase = /[A-Z]/.test(password);
    console.log(upperCase)
    let caseScore = lowerCase && upperCase ? 1 : 0.5;

    // Проверка наличия чисел
    let digitScore = /\d/.test(password) ? 1 : 0;

    // Проверка наличия специальных символов
    let specialChar = /[^a-zA-Z0-9]/.test(password);
    let specialCharScore = specialChar ? 1 : 0;

    // Общая оценка сложности пароля
    let totalScore = lengthScore + caseScore + digitScore + specialCharScore;

    // Рекомендации для улучшения пароля
    let recommendations = [];
    if (totalScore < 2) {
        if (password.length < 8) {
            recommendations.push("Увеличьте длину пароля.");
        }
        if (!lowerCase || !upperCase) {
            recommendations.push("Используйте буквы в разных регистрах.");
        }
        if (!/\d/.test(password)) {
            recommendations.push("Добавьте цифры в пароль.");
        }
        if (!specialChar) {
            recommendations.push("Добавьте в пароль спецсимволы, например, !, @, #, и т.д.");
        }
    }

    return [totalScore, recommendations];
}

// Пример 
let password = prompt("Введите пароль:");
const [totalScore, recommendations] = evaluatePasswordStrength(password);

console.log("Оценка сложности пароля:", totalScore);
if (recommendations.length > 0) {
    console.log("Вот рекомендации которые могут помочь вам улучшить пароль:");
    recommendations.forEach((recommendation) => {
        console.log(recommendation);
    });
}