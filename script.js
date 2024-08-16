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

function displayText() {
    textContainer.innerHTML = '';
    for (let i = 0; i < textToType.length; i++) {
        const span = document.createElement('span');
        span.textContent = textToType[i];
        span.className = 'letter';
        textContainer.appendChild(span);
    }
}

// Функция для обработки нажатий клавиш
function handleKeyPress(event) {
    const letters = document.querySelectorAll('.letter');

    // Проверяем, что текущий индекс меньше длины текста
    if (currentIndex < textToType.length) {
        // Проверяем, соответствует ли нажатая клавиша ожидаемому символу
        if (event.key === textToType[currentIndex]) {
            letters[currentIndex].classList.remove('letter');
            letters[currentIndex].classList.add('correct');
            currentIndex++;
        } else {
            // Если символ неправильный, добавляем класс 'incorrect'
            letters[currentIndex].classList.add('incorrect');
        }

        // Проверяем, завершен ли ввод
        if (currentIndex === textToType.length) {
            result.textContent = "Поздравляем! Вы ввели текст правильно.";
            document.removeEventListener('keydown', handleKeyPress); // Удаляем обработчик
        }
    }
}

// Добавляем обработчик событий
document.addEventListener('keydown', handleKeyPress);

// Отображаем текст для ввода
displayText();