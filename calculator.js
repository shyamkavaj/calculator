var butt = document.getElementsByClassName("butt");
var screen = document.getElementById("screen");
var operand1 = 0;
var operand2 = null;
var operator = null;
var count = 0,flag=0;

function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < butt.length; i++) {
  butt[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    screen.style.fontSize = "3rem";

    // var text is for fetch data on screen.
    var text = screen.textContent;

    if(flag==1)
    {
      count=0;
      flag=0;
    }
    else if (count == 14) {
      flag=1;
    } 
    else {
      if (isOperator(value)) {
        screen.textContent = "";
        operator = value;
        operand1 = parseFloat(text);
        newf=1;
      } else if (value == "C") {
        screen.textContent = "";
      } else if (value == "sign") {
        operand1 = parseFloat(text);
        operand1 = -1 * operand1;
        screen.textContent = operand1;
      } else if (value == "%") {
        operand1 = parseFloat(text);
        operand1 = operand1 / 100;
        screen.textContent = operand1;
      } else if (value == "=") {
        operand2 = parseFloat(text);
        var result = eval(operand1 + " " + operator + " " + operand2);

        if (result) {
          screen.textContent = result;
          operand1 = result;
          operand2 = null;
          operator = null;
        }
      } else if (value == "||") {
        operand1 = parseFloat(text);
        if (operand1 > 0) {
          screen.textContent = operand1;
        } else {
          screen.textContent = -1 * operand1;
        }
      } else {
        screen.textContent += value;
        count++;
      }
    }
  });
}
