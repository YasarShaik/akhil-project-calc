document.addEventListener("DOMContentLoaded", function () {
    let display = document.createElement("input");
    display.setAttribute("type", "text");
    display.setAttribute("id", "calc-display");
    display.style.width = "90%";
    display.style.height = "80px";
    display.style.fontSize = "32px";
    display.style.margin = "60px auto 10px auto";
    display.style.display = "block";
    display.style.textAlign = "right";
    display.style.borderRadius = "10px";
    display.style.border = "2px solid black";
    display.style.backgroundColor = "white";
    document.getElementById("main_caluclator").insertBefore(display, document.getElementById("display"));
    
    let expression = "";
    let buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = button.textContent;
            
            if (value === "AC") {
                expression = "";
                display.value = "";
            } else if (value === "=") {
                try {
                    display.value = eval(expression.replace("÷", "/").replace("X", "*").replace("%", "/100"));
                    expression = display.value;
                } catch {
                    display.value = "Error";
                    expression = "";
                }
            } else if (value === "√") {
                expression = Math.sqrt(eval(expression)).toString();
                display.value = expression;
            } else if (value === "+/-") {
                expression = (eval(expression) * -1).toString();
                display.value = expression;
            } else {
                expression += value;
                display.value = expression;
            }
        });
    });
});
