// Домашнее задание.

// 1. Превратить сумматор в калькулятор с 4 операциями (+, -, *, /). Для выбора операции используйте тег select.

// 2. В сумматоре после выполнения действия блокировать кнопку = до тех пор, пока пользователь не изменит введённые данные. Подробная демонстрация в видео.

// 3. (*) При вводе в поля символы, отличные от цифр, моментально удалять их.

window.addEventListener("load", function () {
  let inp1 = document.querySelector(".num1");
  let inp2 = document.querySelector(".num2");
  let btnRun = document.querySelector(".btnRun");
  let resultBox = document.querySelector(".result");
  let select = document.querySelector(".select");

  inp1.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d]/g, "");
  });
  inp2.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d]/g, "");
  });

  inp1.addEventListener("input", btnDisabled);
  inp2.addEventListener("input", btnDisabled);
  select.addEventListener("input", btnDisabled);

  btnRun.addEventListener("click", function () {
    if (select.value == "+") {
      let total = parseInt(inp1.value) + parseInt(inp2.value);
      resultBox.innerHTML = total;
    }
    if (select.value == "-") {
      let total = parseInt(inp1.value) - parseInt(inp2.value);
      resultBox.innerHTML = total;
    }
    if (select.value == "*") {
      let total = parseInt(inp1.value) * parseInt(inp2.value);
      resultBox.innerHTML = total;
    }
    if (select.value == "/") {
      let total = parseInt(inp1.value) / parseInt(inp2.value);
      resultBox.innerHTML = total;
    }
    btnRun.disabled = true;
  });

  function btnDisabled() {
    btnRun.disabled = false;
  }
});
