const choices = ['rock', 'paper', 'scissors'];
let resultElement = document.querySelector('#result');

// Генерируем случайный выбор компьютера
function computerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length); // получаем случайный индекс массива
    return choices[randomIndex];
}

// Определяем победителя раунда
function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Ничья!";

    switch (playerSelection + '-' + computerSelection) {
        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
            return "Победил игрок!";
        default:
            return "Компьютер победил.";
    }
}

// Обработчик кликов по кнопкам
function play(playerSelection) {
    let computerSelected = computerChoice(); // Получаем выбор компьютера
    let winnerMessage = determineWinner(playerSelection, computerSelected); // Определяем победителя

    // Показываем результат игроку
    resultElement.textContent = `${winnerMessage}\nВаш выбор: ${playerSelection}, Компьютер выбрал: ${computerSelected}.`;
}