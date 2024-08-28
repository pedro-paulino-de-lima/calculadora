const visor = document.getElementById("visor");
var visorLength = 1;

const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const treeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");
const zeroBtn = document.getElementById("0");

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplicationBtn = document.getElementById("multiplicationBtn");
const divisionBtn = document.getElementById("divisionBtn");

const equalBtn = document.getElementById("equalBtn");
const clearBtn = document.getElementById("clear");

let actualVisor = "0";
let count = "";

function updateVisor(value)
{
    if (visorLength < 19)
    {
        if(visor.value == "0" || visor.value == "+" || visor.value == "-" || visor.value == "/" || visor.value == "*")
        {
            visor.value = value;
            count += value;
        }else {
            visor.value += value;
            count += value;
            visorLength++;
        }
    }
}

function equal()
{
    visor.value = "";
    visor.value = eval(count);
}

oneBtn.addEventListener("click", () => {
    updateVisor(1);
});

twoBtn.addEventListener("click", () => {
    updateVisor(2);
});

treeBtn.addEventListener("click", () => {
    updateVisor(3);
});

fourBtn.addEventListener("click", () => {
    updateVisor(4);
});

fiveBtn.addEventListener("click", () => {
    updateVisor(5);
});

sixBtn.addEventListener("click", () => {
    updateVisor(6);
});

sevenBtn.addEventListener("click", () => {
    updateVisor(7);
});

eightBtn.addEventListener("click", () => {
    updateVisor(8);
});

nineBtn.addEventListener("click", () => {
    updateVisor(9);
});

zeroBtn.addEventListener("click", () => {
    updateVisor(0);
});

clearBtn.addEventListener("click", () => {
    visor.value = "0";
    count = "";
});

plusBtn.addEventListener("click", () => {
    updateVisor("+");
    visor.value = "+";
});

minusBtn.addEventListener("click", () => {
    updateVisor("-");
    visor.value = "-";
});

multiplicationBtn.addEventListener("click", () => {
    updateVisor("*");
    visor.value = "*";
});

divisionBtn.addEventListener("click", () => {
    updateVisor("/");
    visor.value = "/";
});

equalBtn.addEventListener("click", () => {
    equal();
});