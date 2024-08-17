// const textToType = "Это текст для проверки скорости печати.";
// const textContainer = document.getElementById("text-to-type");
// const result = document.getElementById("result");

// let currentIndex = 0;

// function displayText() {
//     textContainer.innerHTML = '';
//     for (let i = 0; i < textToType.length; i++) {
//         const span = document.createElement('span');
//         span.textContent = textToType[i];
//         span.className = 'letter';
//         textContainer.appendChild(span);
//     }
// }

// document.addEventListener('keypress', (event) => {
//     if (currentIndex < textToType.length) {
//         const letters = document.querySelectorAll('.letter');

//         // Проверяем, соответствует ли нажатая клавиша ожидаемому символу
//         if (event.key === textToType[currentIndex]) {
//             letters[currentIndex].classList.remove('letter');
//             letters[currentIndex].classList.add('correct');
//             currentIndex++;
//         } else {
//             letters[currentIndex].classList.add('incorrect');
//         }

//         // Проверяем, завершен ли ввод
//         if (currentIndex === textToType.length) {
//             result.textContent = "Поздравляем! Вы ввели текст правильно.";
//             document.removeEventListener('keypress', arguments.callee); // Удаляем обработчик
//         }
//     }
// });

// displayText(); 

const textToType = "you see this test text to this web app";
const textContainer = document.getElementById("text-to-type");
const result = document.getElementById("result");

let currentIndex = 0;
let errorCount = 0;  // Переменная для подсчета ошибок

function displayText() {
    textContainer.innerHTML = '';
    for (let i = 0; i < textToType.length; i++) {
        const span = document.createElement('span');
        span.textContent = textToType[i];
        span.className = 'letter';
        textContainer.appendChild(span);
    }
    updateCursor(); // Устанавливаем курсор в начале текста
}

// Функция для обновления курсора
function updateCursor() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => letter.classList.remove('cursor')); // Убираем курсор со всех символов
    if (currentIndex < textToType.length) {
        letters[currentIndex].classList.add('cursor'); // Добавляем курсор на текущий символ
    }
}

// Функция для обработки нажатий клавиш
function handleKeyPress(event) {
    const letters = document.querySelectorAll('.letter');

    // Если нажата клавиша Backspace
    if (event.key === "Backspace") {
        if (currentIndex > 0) {
            currentIndex--;
            letters[currentIndex].className = 'letter';  // Устанавливаем класс на 'letter', что сбрасывает стили
        }
        updateCursor();
        return;
    }

    // Проверяем, что текущий индекс меньше длины текста
    if (currentIndex < textToType.length) {
        // Если нажатая клавиша соответствует ожидаемому символу
        if (event.key === textToType[currentIndex]) {
            letters[currentIndex].classList.remove('incorrect'); // Убираем класс 'incorrect', если он был
            letters[currentIndex].classList.add('correct'); // Добавляем класс 'correct'
            currentIndex++;
        } else {
            // Если символ неправильный, добавляем класс 'incorrect'
            if (!letters[currentIndex].classList.contains('incorrect')) {
                letters[currentIndex].classList.add('incorrect');
                errorCount++;  // Увеличиваем счетчик ошибок
            }
            currentIndex++;  // Перемещаемся к следующему символу
        }
    }

    updateCursor(); // Обновляем позицию курсора

    // Проверяем, завершен ли ввод
    if (currentIndex === textToType.length) {
        result.textContent = `Поздравляем! Вы ввели текст. Количество ошибок: ${errorCount}`;
        document.removeEventListener('keydown', handleKeyPress); // Удаляем обработчик
    }
}

// Добавляем обработчик событий
document.addEventListener('keydown', handleKeyPress);

// Отображаем текст для ввода
displayText();