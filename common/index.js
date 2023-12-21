const employees = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Roe" },
    { firstName: "Sam", lastName: "Smith" },
    { firstName: "Alice", lastName: "Johnson" },
    { firstName: "Bob", lastName: "Thomas" },
    { firstName: "Mary", lastName: "Williams" }
]

function createList() {
    const list = document.getElementById("list");
    if (!list) {
        return;
    }
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let i = 0; i < employees.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = employees[i].firstName + " " + employees[i].lastName;
        list.appendChild(li);
    }
}

function changeShape() {
    const div = this;
    if (div.classList.contains("circle")) {
        div.className = "square"
    } else {
        div.className = "circle"
    }
}

const element = document.createElement("h1");
element.innerHTML = "Hello World!";

const list = document.createElement("ol")
list.setAttribute("id", "list")

const div = document.createElement("div")
div.setAttribute("id", "div")
div.className = 'circle'

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введите текст...";

const button = document.createElement("button");
button.innerHTML = "Сохранить";

// Добавляем обработчик клика для кнопки
button.addEventListener("click", function() {
    // Проверяем, введен ли текст в поле
    if (input.value !== "") {
        // Сохраняем текст в localStorage с ключом "Text"
        localStorage.setItem("Text", input.value);
        setTimeout(function() {
            console.log(localStorage.getItem("Text"));
        }, 2000);
    } else {
        alert("Пожалуйста, введите текст!");
    }
});

document.body.appendChild(element);
document.body.appendChild(list);
document.body.appendChild(div);
document.body.appendChild(input);
document.body.appendChild(button);

createList();
document.getElementById("div").addEventListener("click", changeShape);


class Calculator{
    constructor(){
        this.num1 = 0;
        this.num2 = 0;
    }

    add(num1, num2){
        return num1 + num2;
    }

    subtract(num1, num2){
        if(num1 - num2 > Number.MIN_VALUE){
            return num1 - num2;
        }else{
            return Number.MIN_VALUE; // обработка граничного случая
        }
    }

    multiply(num1, num2){
        return num1 * num2;
    }

    divide(num1, num2){
        if(num2 !== 0){
            return num1 / num2;
        }else{
            return "Ошибка! Деление на ноль запрещено!"; // обработка граничного случая
        }
    }

    getResult() {
        console.log("Результат:", this.add(this.num1, this.num2));
        console.log("Результат:", this.subtract(this.num1, this.num2));
        console.log("Результат:", this.multiply(this.num1, this.num2));
        console.log("Результат:", this.divide(this.num1, this.num2));
    }
}

const calc = new Calculator();
calc.num1 = 5;
calc.num2 = 3;
calc.getResult();