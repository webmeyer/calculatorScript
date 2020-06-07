// var calculate = function (firstNumber, secondNumber, operator) {
//   var result;
//   if (operator === '+') {
//     result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
//     } else if (operator === '-') {
//       result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
//       } else if (operator === '*') {
//         result = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
//         } else if (operator === '/') {
//           result = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
//           }
//     return result;
//   }


const output = document.querySelector('output'); // Определяем поле для вывода результата

const div = document.createElement('div'); // Создаём контейнер для клавы
div.classList.add('keyboard');
document.querySelector('.calculator').appendChild(div);

// Преобразуем строку с данными в массив
'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ')
    // создаем кнопку с помощью строкового литерала
    // записываем значение символа в атрибут "value" кнопки
    .map(symbol => {
        div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
    })

// Находим кнопки и добавляем обработчик событий "клик"
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    calc(this.value) // по клику вызывается функция со значением кнопки в кач-ве параметра
  })
})

// Добавляем обработчик события "нажатии клавиши", фильтруем значения регуляркой
document.addEventListener('keydown', event => {
  if((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
})

// функция принимает значение кнопки или ключ клавиши
function calc(value) {
  // если нажат знак равенства или Enter
  if (value.match(/=|Enter/)) {
      try {
          // Math.trunc используется для округления до целого числа
          output.textContent = Math.trunc(math.evaluate(output.textContent))
          
      // если операцию выполнить невозможно
      } catch {
          // сохраняем значение поля
          let oldValue = output.textContent
          // создаем новую переменную
          let newValue = 'недопустимо'
          // выводим значение новой переменной в поле
          output.textContent = newValue
          // через полторы секунды возвращаем полю старое значение
          setTimeout(() => {
              output.textContent = oldValue
          }, 1500)
      }
      
  // если нажат символ "C" - очищаем поле
  } else if (value === 'C') {
      output.textContent = ''
  
  // если нажат символ "СЕ" или Backspace - уменьшаем строку на один символ
  } else if (value.match(/CE|Backspace/)) {
      output.textContent = output.textContent.substring(0, output.textContent.length - 1)
      
  // если нажата любая другая (отфильтрованная) кнопка или клавиша - записываем ее значение в поле
  } else {
      output.textContent += value
  }
}
