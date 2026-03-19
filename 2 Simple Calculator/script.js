const display = document.getElementById("display");
let displayValue = "";
console.log("Calculator initialized, display element:", display);

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (value === "C") {
            displayValue = "";
        } else if (value === "back") {
            displayValue = displayValue.slice(0, -1);
        } else if (value === "=") {
            try {
                displayValue = eval(displayValue).toString();
            } catch (e) {
                displayValue = "Error";
            }
        } else {
            displayValue += value;
        }
        display.value = displayValue;
        console.log(`Button clicked: ${value}, Display value: ${displayValue}`);
    });
});

