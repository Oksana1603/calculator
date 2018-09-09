var performMath = document.getElementById('cal');
var form = document.getElementById('form');

performMath.addEventListener('click', () => {


    var func = form.func.value;
    var num1 = form.num1.value;
    var num2 = form.num2.value;
    //console.log(func, num1, num2);
    event.preventDefault();
    var answer = '';
    switch(func){
     case "+":    
        answer = (parseFloat(num1))+(parseFloat(num2));
     break;   
    case "-":    
        answer = (parseFloat(num1))-(parseFloat(num2));
     break; 
     case "*":    
        answer = (parseFloat(num1))*(parseFloat(num2));
     break; 
     case "/":    
        answer = (parseFloat(num1))/(parseFloat(num2));
     break; 
     case "root":    
        answer = Math.sqrt(parseFloat(num1));
     break; 
    }
const section = document.querySelector('section');
const div = document.createElement('div');
section.appendChild(document.createTextNode('Your answer is '+ answer) );


});

