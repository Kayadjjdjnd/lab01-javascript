alert("Этот код выполнен из внешнего файла!");
console.log("Сообщение в консоли");

// Задание 2 — переменные
let name = "Эмилия";
let birthYear = 2005;
let isStudent = true;

console.log(name, birthYear, isStudent);

// Условия и циклы
let score = prompt("Введите ваш балл:");
if (score >= 90) {
  console.log("Отлично!");
} else if (score >= 70) {
  console.log("Хорошо");
} else {
  console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
  console.log(`Итерация: ${i}`);
}