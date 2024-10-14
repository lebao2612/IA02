function getNumber() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
 
    if (isNaN(num1)) {
        document.getElementById("message").value = "Vui lòng nhập số hợp lệ cho số thứ nhất.";
        return null;
    }
    
    if (isNaN(num2)) {
        document.getElementById("message").value = "Vui lòng nhập số hợp lệ cho số thứ hai.";
        return null;
    }

    return { num1, num2 };
}

function validateNumberInput(inputId) {
    var value = parseFloat(document.getElementById(inputId).value);
    if (isNaN(value)) {
        document.getElementById("message").value = `Vui lòng nhập số hợp lệ cho ${inputId === "number1" ? "số thứ nhất" : "số thứ hai"}.`;
    } else {
        document.getElementById("message").value = ""; 
    }
}


document.getElementById("number1").addEventListener("blur", function() {
    validateNumberInput("number1");
});

document.getElementById("number2").addEventListener("blur", function() {
    validateNumberInput("number2");
});

function Add() {
    var numbers = getNumber();
    if (numbers) {
        var { num1, num2 } = numbers;
        var rs = num1 + num2;
        document.getElementById("result").value = rs;
        document.getElementById("message").value = "Kết quả đã được tính.";
    }
}

function Subtract() {
    var numbers = getNumber();
    if (numbers) {
        var { num1, num2 } = numbers;
        var rs = num1 - num2;
        document.getElementById("result").value = rs;
        document.getElementById("message").value = "Kết quả đã được tính.";
    }
}

function Multiply() {
    var numbers = getNumber();
    if (numbers) {
        var { num1, num2 } = numbers;
        var rs = num1 * num2;
        document.getElementById("result").value = rs;
        document.getElementById("message").value = "Kết quả đã được tính.";
    }
}

function Divide() {
    var numbers = getNumber();
    if (numbers) {
        var { num1, num2 } = numbers;
        if (num2 === 0) {
            document.getElementById("result").value = "Không thể chia cho 0!";
            document.getElementById("message").value = "Vui lòng nhập số khác.";
        } else {
            var rs = num1 / num2;
            document.getElementById("result").value = rs;
            document.getElementById("message").value = "Kết quả đã được tính.";
        }
    }
}

function Calculate() {
    var operator = document.querySelector('input[name="operation"]:checked');

    if (!operator) {
        document.getElementById("result").value = "";
        document.getElementById("message").value = "Vui lòng chọn một phép toán";
        return; 
    }

    var numbers = getNumber();
    if (!numbers) {
        
        if (isNaN(parseFloat(document.getElementById("number1").value)) && 
            isNaN(parseFloat(document.getElementById("number2").value))) {
            document.getElementById("message").value = "Vui lòng nhập số hợp lệ cho số thứ nhất và số thứ hai.";
        }
        return;
    }

    var opValue = operator.value; 
    
    if (opValue == "+") {
        Add();
    } else if (opValue == "-") {
        Subtract();
    } else if (opValue == "*") {
        Multiply();
    } else if (opValue == "/") {
        Divide();
    }
}
