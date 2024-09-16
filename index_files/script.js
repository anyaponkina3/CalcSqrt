// Функция для преобразования градусов в радианы
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Функция для удаления тригонометрических функций из выражения
function removeTrigFunctions(expression) {
  return expression
      .replace(/sin\((.*?)\)/g, 'sin($1)')  // Не изменяем
      .replace(/cos\((.*?)\)/g, 'cos($1)')  // Не изменяем
      .replace(/tan\((.*?)\)/g, 'tan($1)'); // Не изменяем
}

// Функция для проверки наличия переменных в выражении
function containsVariables(expression) {
  // Удаляем тригонометрические функции
  let cleanedExpression = removeTrigFunctions(expression);
  
  // Проверяем наличие переменных (английские буквы) в очищенном выражении
    return /[a-zA-Z]/.test(cleanedExpression);//&& !/\d/.test(cleanedExpression);
}

// Функция для вычисления корня
function calculateRoot() {
  let expression = document.getElementById("number").value;
  let degree = 2;//parseFloat(document.getElementById("degree").value);
  let precision = parseInt(document.getElementById("precision").value);

  if (!expression) {
      alert("Введите выражение");
      return;
  }

  // Замена ** на ^ для корректного вычисления возведения в степень в math.js
  let formattedExpression = expression.replace(/\*\*/g, '^');

  // Преобразование тригонометрических функций (sin, cos, tan) в радианы
  formattedExpression = formattedExpression
      .replace(/sin\((.*?)\)/g, (match, p1) => `sin(${toRadians(parseFloat(p1))})`)
      .replace(/cos\((.*?)\)/g, (match, p1) => `cos(${toRadians(parseFloat(p1))})`)
      .replace(/tan\((.*?)\)/g, (match, p1) => `tan(${toRadians(parseFloat(p1))})`);

  try {
      if (containsVariables(expression)) {
          // Если выражение содержит переменные, используем Algebrite
          let algebriteResult = Algebrite.run(`sqrt(${formattedExpression})`).toString();
          document.getElementById("result").innerHTML = `Результат: ${algebriteResult}`;
      } else {
          // Вычисляем значение выражения с math.js
          let parsedExpression = math.evaluate(formattedExpression);

          // Преобразование отрицательных чисел в комплексные числа
          if (math.isNegative(parsedExpression)) {
              parsedExpression = math.complex(parsedExpression);
          }

          // Извлечение корня
          let result;
          if (degree === 2) {
              result = math.sqrt(parsedExpression);  // Квадратный корень
          } else {
              result = math.pow(parsedExpression, 1 / degree);  // N-й корень
          }

          // Приведение результата к заданной точности
          result = math.format(result, { precision: precision });

          // Вывод результата
          document.getElementById("result").innerHTML = `Результат: ${result}`;
      }

  } catch (e) {
      alert("Некорректный ввод");
      console.error(e);
  }
}

// Устанавливаем функцию обработки кнопки после загрузки библиотек
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", calculateRoot);
});
