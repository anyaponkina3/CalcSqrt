// Переводы на разные языки
const translations = {
  ru: {
      title: "Калькулятор корней",
      numberLabel: "Введите выражение или число:",
      degreeLabel: "Степень корня (например, 2 для квадратного корня):",
      precisionLabel: "Точность результата (количество знаков после запятой):",
      calculateButton: "Вычислить",
      helpTitle: "Помощь",
      helpText: "Введите выражение или число в поле выше, укажите степень корня и точность результата. Нажмите 'Вычислить' для получения результата.",
      supportItem1: "Арифметические и аналитические выражения",
      supportItem2: "Тригонометрические функции (в градусах)",
      supportItem3: "Комплексные числа",
      supportItem4: "Используйте любые английские буквы для обозначения переменных",
  },
  en: {
      title: "Root Calculator",
      numberLabel: "Enter expression or number:",
      degreeLabel: "Root degree (e.g., 2 for square root):",
      precisionLabel: "Result precision (number of decimal places):",
      calculateButton: "Calculate",
      helpTitle: "Help",
      helpText: "Enter an expression or number in the field above, specify the root degree and result precision. Click 'Calculate' to get the result.",
      supportItem1: "Arithmetic and analytical expressions",
      supportItem2: "Trigonometric functions (in degrees)",
      supportItem3: "Complex numbers",
      supportItem4: "Use any English letters for variables",
  },
  zh: {
      title: "根计算器",
      numberLabel: "输入表达式或数字：",
      degreeLabel: "根的度数（例如，2 代表平方根）：",
      precisionLabel: "结果精度（小数点后的位数）：",
      calculateButton: "计算",
      helpTitle: "帮助",
      helpText: "在上面的字段中输入表达式或数字，指定根的度数和结果精度。点击“计算”以获取结果。",
      supportItem1: "算术和分析表达式",
      supportItem2: "三角函数（以度为单位）",
      supportItem3: "复数",
      supportItem4: "使用任何英文字母表示变量",
  },
  es: {
      title: "Calculadora de raíces",
      numberLabel: "Ingrese expresión o número:",
      degreeLabel: "Grado de la raíz (por ejemplo, 2 para raíz cuadrada):",
      precisionLabel: "Precisión del resultado (número de decimales):",
      calculateButton: "Calcular",
      helpTitle: "Ayuda",
      helpText: "Ingrese una expresión o número en el campo de arriba, especifique el grado de la raíz y la precisión del resultado. Haga clic en 'Calcular' para obtener el resultado.",
      supportItem1: "Expresiones aritméticas y analíticas",
      supportItem2: "Funciones trigonométricas (en grados)",
      supportItem3: "Números complejos",
      supportItem4: "Utilice cualquier letra en inglés para las variables",
  }
};

// Функция для перевода страницы
function translatePage(language) {
  const translation = translations[language];

  document.getElementById("title").innerText = translation.title;
  document.getElementById("number-label").innerText = translation.numberLabel;
  document.getElementById("degree-label").innerText = translation.degreeLabel;
  document.getElementById("precision-label").innerText = translation.precisionLabel;
  document.getElementById("calculate-button").innerText = translation.calculateButton;
  document.getElementById("help-title").innerText = translation.helpTitle;
  document.getElementById("help-text").innerText = translation.helpText;
  document.getElementById("support-item-1").innerText = translation.supportItem1;
  document.getElementById("support-item-2").innerText = translation.supportItem2;
  document.getElementById("support-item-3").innerText = translation.supportItem3;
  document.getElementById("support-item-4").innerText = translation.supportItem4;
}

// Обработчик для смены языка
document.getElementById("language-select").addEventListener("change", function() {
  const selectedLanguage = this.value;
  translatePage(selectedLanguage);
});

// Устанавливаем функцию обработки кнопки после загрузки библиотек
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#calculate-button").addEventListener("click", calculateRoot);
});
