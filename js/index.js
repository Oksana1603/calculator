const performMath = document.getElementById('cal');
const form = document.getElementById('form');

performMath.addEventListener('click', () => {


    const func = form.func.value;
    const num1 = parseFloat(form.num1.value);
    const num2 = parseFloat(form.num2.value);
    //console.log(func, num1, num2);
    event.preventDefault();
    let answer = '';
    switch (func) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
        case "root":
            answer = Math.sqrt(num1);
            break;
    }
    const section = document.querySelector('section');
    const div = document.createElement('div');
    section.appendChild(document.createTextNode('Your answer is ' + answer + '.' + '\n'));


});
const section = document.querySelector('section');
const div = document.createElement('div');
const clear = document.querySelector('.form#clear');
clear.addEventListener('click', ()=>{
section.removeChild(div);   
    
})