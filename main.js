//step 2
console.log(document);

//step 3
const title = document.getElementById("title");
const text = document.querySelector(".text");
console.log(title);
console.log(text);

//step 4
title.textContent = "DOM изменён через JS!";
title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";

text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";

//step 5
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Кнопка нажата!");
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "white";
});

//step 6
const input = document.getElementById("nameInput");
const button = document.getElementById("showName");
const output = document.getElementById("output");
button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
    } else {
        output.textContent = "Пожалуйста, введите имя!";
        output.style.color = "red";
    }
});

//step 7
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
});
output.style.color = "";
input.focus();

//step 8
const form = document.getElementById("userForm");
const userNameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const result = document.getElementById("formResult");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = userNameInput.value.trim();
    if (name === "") {
        result.textContent = "Ошибка: Имя не может быть пустым!";
        result.style.color = "red";
        userNameInput.focus();
        return;
    }
    const age = Number(ageInput.value);
    if (isNaN(age) || age <= 0 || age > 120) {
        result.textContent = "Ошибка: Введите корректный возраст (от 1 до 120)!";
        result.style.color = "red";
        ageInput.focus();
        ageInput.value = "";
        return;
    }
    result.textContent = `Данные сохранены: ${name}, ${age} лет`;
    result.style.color = `green`;
    form.reset();
});