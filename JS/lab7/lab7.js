function showInfo(element) {
    var info = element.title;
    alert(info);
}

function calculate() {
    // Отримати значення з полів вводу
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var operation = document.getElementById("operation").value.toLowerCase();

    // Перевірка, чи введені числа коректні
    if (isNaN(num1) || isNaN(num2)) {
        alert("Введіть коректні числа.");
        return;
    }

    // Виконання вибраної операції та виведення результату
    var result;
    switch (operation) {
        case "сума":
            result = num1 + num2;
            break;
        case "різниця":
            result = num1 - num2;
            break;
        case "добуток":
            result = num1 * num2;
            break;
        case "ділення":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Ділення на нуль неможливе.");
                return;
            }
            break;
        default:
            alert("Будь ласка, введіть коректну операцію.");
            return;
    }

    // Виведення результату
    document.getElementById("result").innerText = "Результат: " + result;
}