let buttons = document.querySelectorAll(".calculator .box .buttons .line-btns button");
const visor = document.getElementById("visor");

var evalText = "";

function updateVisor(value)
{
    function resolve()
    {
        var result = eval(evalText);

        evalText = result;
        visor.value = result;
    }

    function clear()
    {
        visor.value = "0";
        evalText = "";
    }

    if (value == "clear")
    {
        clear();
    }else if (value == "equal")
    {
        resolve();
    }else
    {
        evalText += value;
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (visor.value == "0")
        {
            visor.value = btn.id;
        }else
        {
            visor.value = visor.value += btn.id;
        }

        updateVisor(btn.id);
    })
});