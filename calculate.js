let num1;
let num2;
  function add() {
          var num1 = parseInt(document.getElementById('number1').value);
          var num2 = parseInt(document.getElementById('number2').value);
          var r = num1 + num2;
          document.getElementById('result').value = r;
  }
  function minus() {
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var r = num1 - num2;
    document.getElementById('result').value = r;
}
function mutiply() {
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var r = num1 * num2;
    document.getElementById('result').value = r;
}
function divide() {
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var r = num1 % num2;
    document.getElementById('result').value = r;
}

