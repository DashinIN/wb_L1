import { declension } from './declension.js'

console.log(declension(0, ['сообщение', 'сообщения', 'сообщений']));
console.log(declension(1, ['сообщение', 'сообщения', 'сообщений']));
console.log(declension(3, ['сообщение', 'сообщения', 'сообщений']));
console.log(declension(112, ['сообщение', 'сообщения', 'сообщений']));
console.log(declension(854, ['сообщение', 'сообщения', 'сообщений']));
console.log(declension(999, ['сообщение', 'сообщения', 'сообщений']));
  // 1 сообщение
  // 3 сообщения
  // 112 сообщений
  // 854 сообщения
  // 999 сообщений

console.log(declension(0, ['пользователь', 'пользователя', 'пользователей']));
console.log(declension(1, ['пользователь', 'пользователя', 'пользователей']));
console.log(declension(3, ['пользователь', 'пользователя', 'пользователей']));
console.log(declension(112, ['пользователь', 'пользователя', 'пользователей']));
console.log(declension(854, ['пользователь', 'пользователя', 'пользователей']));
console.log(declension(999, ['пользователь', 'пользователя', 'пользователей']));
  // 0 пользователей
  // 1 пользователь
  // 3 пользователя
  // 112 пользователей
  // 854 пользователя
  // 999 пользователей

