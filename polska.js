// Напишите функцию calc(str), которая вычисляет результат выражения в обратной польской нотации (ОПН). ОПН представляет собой выражение, в котором операнды и операторы записаны в особом порядке:
// - Операнды (числа) и операторы (+, -, *, /) разделяются пробелами.
// - Операция выполняется над двумя последними числами, встреченными перед оператором.
// - Выражение вычисляется слева направо.
// Если входная строка некорректна, функция должна вернуть сообщение об ошибке. Возможные ошибки:
// "Error in Syntax" — если выражение содержит синтаксическую ошибку.
// "Error in Operands" — если операнд не является числом.
// "Division by zero" — если в выражении происходит деление на ноль.
// Примеры:
// Input 1: "8 2 / 3 +"
// Output 1: 7
// Input 2: "
// * -"
// Output 2: 1

// проходиться по массиву с лева на право, запоминать операнды если встретили оператор [i] [i-1]
// в переменной precedent сохранять значение резултата

function calc(str) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
      if (b === 0) {
        return "division by Zero";
      }
      return a / b;
    },
  };

  const tokens = str.trim().split(/\s+/);
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];

    if (!isNaN(tokens[i])) {
      stack.push(Number(current));
      continue; // начинается новая итерация
    }

    const res = operations[current]

    if (res) {
      if (stack.length < 2) {
        return "Error, check syntax";
      }

      const b = stack.pop();
      const a = stack.pop();

      if(res === "division by Zero") return "Division by zero";

      stack.push(res(a, b));

      continue;
    }
  }
  if(stack.length !== 1) return "Error in Syntax";
  return stack[0];
}

console.log(calc("8 2 / 3 +"));
