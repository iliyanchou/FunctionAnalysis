let inputFunction = document.getElementById("functioninput");
let functionvariable = document.getElementById("functionvar");
function differentiate() {
    const expression = inputFunction.value;
    const derivative = math.derivative(expression, functionvariable.value);
    document.getElementById("functionoutput").innerHTML = `${derivative}`;
}
