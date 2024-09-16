// Переводы на разные языки
const translations = {
  ru: {
      title: "Калькулятор корней",
      numberLabel: "Введите выражение или число:",
      //degreeLabel: "Степень корня (например, 2 для квадратного корня):",
      precisionLabel: "Количество знаков после запятой:",
      calculateButton: "Вычислить",
      helpTitle: "Поддержка",
      number_value: "Например, 25"
      
  },
  en: {
      title: "Root Calculator",
      numberLabel: "Enter expression or number:",
      //degreeLabel: "Root degree (e.g., 2 for square root):",
      precisionLabel: "Number of decimal places:",
      calculateButton: "Calculate",
      helpTitle: "Help",
      number_value: "For example, 25" 

      
  },
  zh: {
      title: "根计算器",
      numberLabel: "输入表达式或数字：",
      //degreeLabel: "根的度数（例如，2 代表平方根）：",
      precisionLabel: "小数点后的位数：",
      calculateButton: "计算",
      helpTitle: "帮助",
      number_value: "例如，25"
  },
  es: {
      title: "Calculadora de raíces",
      numberLabel: "Ingrese expresión o número:",
      degreeLabel: "Grado de la raíz (por ejemplo, 2 para raíz cuadrada):",
      precisionLabel: "Número de decimales:",
      calculateButton: "Calcular",
      helpTitle: "Ayuda",
      number_value: "Por ejemplo, 25"
  }
};

// Функция для перевода страницы
function translatePage(language) {
  const translation = translations[language];

  document.getElementById("title").innerText = translation.title;
  document.getElementById("number-label").innerText = translation.numberLabel;
  //document.getElementById("degree-label").innerText = translation.degreeLabel;
  document.getElementById("precision-label").innerText = translation.precisionLabel;
  document.getElementById("calculate-button").innerText = translation.calculateButton;
  document.getElementById("help-title").innerText = translation.helpTitle;
    document.getElementById("number").placeholder = translation.number_value;
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
