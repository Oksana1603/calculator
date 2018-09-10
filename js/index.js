const performMath = document.getElementById('cal');
const form = document.getElementById('form');

performMath.addEventListener('click', () => {


    let func = form.func.value;
    let num1 = form.num1.value;
    let num2 = form.num2.value;
    //console.log(func, num1, num2);
    event.preventDefault();
    let answer = '';
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
section.appendChild(document.createTextNode('Your answer is '+ answer+ '.'+'\n') );


});

