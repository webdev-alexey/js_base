// Домашнее задание.

// 1. Превратить сумматор в калькулятор с 4 операциями (+, -, *, /). Для выбора операции используйте тег select.

// 2. В сумматоре после выполнения действия блокировать кнопку = до тех пор, пока пользователь не изменит введённые данные. Подробная демонстрация в видео.

// 3. (*) При вводе в поля символы, отличные от цифр, моментально удалять их.

window.addEventListener("load", function () {
  let inp1 = document.querySelector(".num1");
  let inp2 = document.querySelector(".num2");
  let btnRun = document.querySelector(".btnRun");
  let resultBox = document.querySelector(".result");

  btnRun.addEventListener("click", function () {
    let total = parseInt(inp1.value) + parseInt(inp2.value);
    resultBox.innerHTML = total;
  });
});
