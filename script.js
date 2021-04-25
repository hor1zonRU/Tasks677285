// 67. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

let inputText = document.getElementById("input_text");
let inputArr = document.getElementById("input_arr");
let checkBtn = document.getElementById("btn_check");
let output = document.getElementById("output_67");
let array = [];

inputArr.addEventListener("change", () => {
    if (inputArr !== null) {
        array.push(inputArr.value);
        console.log(array);
        inputText.removeAttribute("disabled");
    }
})

inputText.addEventListener("change", () => {
    if (inputText !== null) {
        console.log(typeof(inputText.value))
        checkBtn.removeAttribute("disabled");
    }
})

checkBtn.addEventListener("click", () => {
    output.innerHTML = inArray(inputText.value, inputArr.value);
    setTimeout(clearAll, 3000);
});

function clearAll () {
    inputArr.value = "";
    inputText.value = "";
    inputText.setAttribute("disabled", "disabled");
    checkBtn.setAttribute("disabled", "disabled");
    output.innerHTML = "";

    inputArr72.value = "";
    btnCheck72.setAttribute("disabled", "disabled")
    output72.innerHTML = "";
}


function inArray (text, arr) {

    if (arr.includes(text)) {
        return "Есть такое дело";
    }
    return "Там нет такого";
}

// 72. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let inputArr72 = document.getElementById("input_arr_72");
let btnCheck72 = document.getElementById("btn_check_72");
let output72 = document.getElementById("output_72");

let array72 = [];

inputArr72.addEventListener("change", () => {
    if (inputArr72 !== null) {
        array72 = inputArr72.value.split("")
        array72 = array72.map(Number)
        console.log(array72);
        btnCheck72.removeAttribute("disabled");
    }
})

btnCheck72.addEventListener("click", () => {
    let sum = 0
    for (let i = 0; i < array72.length; i++) {
        sum += array72[i]
        if (sum > 10) {
            return output72.innerHTML = `${array72.length - 1} числа(-ел) с начала потребуется сложить, чтобы получить больше 10 в сумме`  
        }
        setTimeout(clearAll, 3000);
    }
})

// 85. Создать ассоциативный массив и занести в него десять элементов по принципу: "фамилия" - "дата рождения". Удалить из массива всех людей, родившихся летом. Формат записи числа 18 april 1956. Вывести массив до удаления и после на экран, каждый с новой строки. Пример записи в массиве: $arr['Иванов'=&gt;'18 april 1956'];



