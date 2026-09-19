// Функция расчета шансов на грант
function checkChances() {
    let score = parseFloat(document.getElementById('score').value);
    let result = document.getElementById('result');

    if (isNaN(score) || score < 0 || score > 140) {
        result.style.borderColor = "#e74c3c";
        result.style.backgroundColor = "#fdf2f2";
        result.innerText = "⚠️ Пожалуйста, введите корректный балл ЕНТ (от 0 до 140).";
        return;
    }

    result.style.borderColor = "#27ae60";
    result.style.backgroundColor = "#eef7ed";

    if (score >= 115) {
        result.innerHTML = `🔥 <strong>Отличный результат (${score} баллов)!</strong> Высокие шансы пройти на грант в ведущие ВУЗы (КБТУ, КазНУ, МУИТ, Политех).`;
    } else if (score >= 90) {
        result.innerHTML = `👍 <strong>Хороший балл (${score} баллов).</strong> Есть реальные шансы на грант в региональных и технических ВУЗах.`;
    } else if (score >= 65) {
        result.innerHTML = `⚖️ <strong>Пограничный балл (${score} баллов).</strong> Шансы на грант есть на менее популярных специальностях или в регионах. Стоит рассмотреть платной отделение.`;
    } else {
        result.innerHTML = `ℹ️ <strong>${score} баллов.</strong> Проходной балл на платное отделение, но для гранта стоит подтянуться или рассмотреть колледжи.`;
    }
}

// Функция живого поиска ВУЗов
function searchUniversity() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('uni-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}