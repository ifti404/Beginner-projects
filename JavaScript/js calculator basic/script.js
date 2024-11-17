let num1 = prompt ("First Number?");
let num2 = prompt ("Second Number?");
num1 = parseInt(num1);
num2 = parseInt(num2);

// -----------Operation------------

const addition = num1 + num2;
const substraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;
const expo = num1 ** num2;

//----------Results----------------

document.write("Addition:" + addition + "<br>")
document.write("substraction:" + substraction + "<br>")
document.write("multiplication:" + multiplication + "<br>")
document.write("division:" + division + "<br>")
document.write("modulus:" + modulus + "<br>")
document.write("expo:" + expo + "<br>")

